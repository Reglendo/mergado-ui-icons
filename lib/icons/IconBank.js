import * as React from "react";
import shallowCompare from "shallow-compare";
class IconBank extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--bank ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M19.9 1.4l20 8V12h-2.7q0 .6-.4 1t-1 .4H4.1q-.6 0-1-.4t-.4-1H0V9.4zM5.3 14.7h5.3v15.9h2.7V14.7h5.3v15.9h2.7V14.7h5.3v15.9h2.6V14.7h5.3v15.9h1.3q.6 0 1 .4t.4 1v1.3H2.7V32q0-.6.4-1t1-.4h1.2V14.7zm33.1 19.9q.6 0 1 .4t.5.9v2.7H0v-2.7q0-.5.4-.9t1-.4h37z" }))),
            !p.textFirst && textEl));
    }
}
IconBank.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBank;
//# sourceMappingURL=IconBank.js.map