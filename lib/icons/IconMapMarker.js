import * as React from "react";
import shallowCompare from "shallow-compare";
class IconMapMarker extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--map-marker ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M25.6 14.3q0-2.4-1.6-4.1t-4.1-1.6-4 1.6-1.7 4.1 1.7 4 4 1.7 4.1-1.7 1.6-4zm5.8 0q0 2.4-.8 4l-8.1 17.3q-.4.7-1.1 1.1t-1.5.4-1.5-.4-1-1.1L9.2 18.3q-.7-1.6-.7-4 0-4.7 3.3-8.1t8.1-3.3T28 6.2t3.4 8.1z" }))),
            !p.textFirst && textEl));
    }
}
IconMapMarker.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMapMarker;
//# sourceMappingURL=IconMapMarker.js.map