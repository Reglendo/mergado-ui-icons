import * as React from "react";
import shallowCompare from "shallow-compare";
class IconBug extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--bug ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.9 21.4q0 .6-.4 1t-1 .5h-5q0 3.8-1.5 6.4l4.6 4.7q.5.4.5 1t-.5 1q-.4.4-1 .4t-1-.4l-4.4-4.4-.3.3q-.2.2-1 .6t-1.4.8-1.8.7-2.2.3v-20h-2.9v20q-1.1 0-2.2-.3t-2-.8-1.4-.8-1-.8l-.3-.3L7.6 36q-.5.4-1.1.4-.5 0-1-.3-.4-.4-.4-1t.3-1.1l4.5-5q-1.3-2.6-1.3-6.1h-5q-.5 0-1-.5t-.4-1 .4-1 1-.4h5v-6.6L4.8 9.6q-.4-.4-.4-1t.4-1 1-.5 1 .5l3.8 3.8h18.9l3.9-3.8q.4-.5 1-.5t1 .5.4 1-.4 1l-3.9 3.8V20h5q.6 0 1 .4t.4 1zM27.2 8.6H12.9q0-3 2.1-5.1t5.1-2.1 5 2.1 2.1 5.1z" }))),
            !p.textFirst && textEl));
    }
}
IconBug.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBug;
//# sourceMappingURL=IconBug.js.map