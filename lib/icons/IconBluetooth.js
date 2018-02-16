import * as React from "react";
class IconBluetooth extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--bluetooth ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M21.8 23.5l3.3 3.3-3.4 3.3zm0-13.6l3.3 3.3-3.3 3.3zm-3 27.3l10.4-10.4-6.8-6.8 6.8-6.8L18.8 2.8v13.7l-5.6-5.7-2.1 2 7.1 7.2-7.1 7.2 2.1 2 5.6-5.6v13.6zM34.9 20q0 4.7-.7 8.2t-2 5.7-3.1 3.6-4.1 2-4.9.5-4.9-.5-4-2-3.1-3.6-2-5.7-.7-8.2.7-8.2 2-5.7 3.1-3.6 4-2 4.9-.5 4.9.5 4.1 2 3.1 3.6 2 5.7.7 8.2z" }))),
            !p.textFirst && textEl));
    }
}
IconBluetooth.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBluetooth;
//# sourceMappingURL=IconBluetooth.js.map