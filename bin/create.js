var fs = require('fs');
var cheerio = require('cheerio');
var camelcase = require('camelcase');
var capitalize = require('capitalize');
var native = require('css-to-react-native');
var components = {};
var types = {};
var _ = require('underscore');
var glob = require('glob');
var path = require('path');
var rootDir = path.join(__dirname, '..');
var attrs = ['xlink:href', 'clip-path', 'fill-opacity', 'fill'];
var cleanAtrributes = function($el, $) {
    _.each(attrs, function(attr) {
        $el.removeAttr(attr);
    });
    if($el.children().length === 0) {
        return false;
    }

    $el.children().each(function(index, el) {
        cleanAtrributes($(el), $);
    });
};

glob(rootDir + '/src/icons/*/*.svg', function(err, icons) {
    icons.forEach(function(iconPath){
        var id = path.basename(iconPath, '.svg');
        var svg = fs.readFileSync(iconPath, 'utf-8');
        $ = cheerio.load(svg,{
            xmlMode: false,
            decodeEntities: true
        });

        var $svg = $('svg');
       // cleanAtrributes($svg, $);
        var iconSvg = $svg.html();
        var viewBox = $svg.attr('viewbox');
        var folder = iconPath.replace(path.join(rootDir, 'icons') + '/', '').replace( '/' + path.basename(iconPath), '');
        var type = capitalize(camelcase(folder));
        var name = 'Icon' + capitalize(camelcase(id));
        var location = iconPath.replace(path.join(rootDir, 'icons'), '').replace('.svg', '.tsx');
        components[name] = location;
        if (!types[folder]) {
            types[folder] = {};
        }
        types[folder][name] = location;

        iconSvg = iconSvg.replace(/\n/g,'').replace(/\r/g,'').replace(/(style\=\")(.*?)\"/g,function(str,match,style) {

                var style = style.split(';').map(function(obj) {
                    return obj.split(':')
                });

                return "style={"+JSON.stringify(native.default(style))+"}"
        })

        iconSvg = iconSvg.match(/(<(g|path).*<\/(g|path)>)/g)[0].replace(/inkscape\:.*?\".*?\"/g,'')
        var component = `
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class ${name} extends React.PureComponent<Props, {}> {
    shouldComponentUpdate() { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={\`muk-icon__text\`}>{p.text}</span> : false
        const className = \`muk-icon \${name}--${id} \${p.addClass} \${p.className}\`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={\`muk-icon__image\`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g>${iconSvg}</g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default ${name};
`
        var constant = `
import * as React from "react"
export const ${name}: JSX.Element =
        <g>${iconSvg}</g>;
`
        var destination = path.join(rootDir, 'icons/', name + '.tsx')
        var destinationConst = path.join(rootDir, 'icons/const/', name  + '.tsx')
        if (!fs.existsSync(path.join(rootDir, 'icons/'))){
            fs.mkdirSync(path.join(rootDir, 'icons/'));
        }

        fs.writeFileSync(path.join(destination), component, 'utf-8');
        fs.writeFileSync(path.join(destinationConst), constant, 'utf-8');
        console.log(destination)
    });
     _.each(types, function(components, folder) {
        var iconsModule = _.map(components, function(loc, name){
            loc = loc.replace('.js', '');
            loc = loc.replace(folder, '/icons/const');
            loc = "." + loc;
            return `export { default as ${name} } from './icons/${name}';`;
        }).join('\n') + '\n';

        fs.writeFileSync(path.join(rootDir, '/index.tsx'), iconsModule, 'utf-8');
        console.log(path.join(rootDir, '/index.tsx'));
    });
});
