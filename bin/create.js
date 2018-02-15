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

export const ${name}: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = \`muk-icon \${name}--${id} \${props.addClass} \${props.className}\`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.text && props.textFirst &&
                    <span className={\`muk-icon__text\`}>
                        {props.text}
                    </span>
                }
                <svg className={\`muk-icon__image\`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g>${iconSvg}</g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={\`muk-icon__text\`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

${name}.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "${viewBox ? viewBox : "0 0 40 40"}",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
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
