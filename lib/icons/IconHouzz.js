import * as React from "react";
class IconHouzz extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--houzz ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M19.9 26.6L31.4 20v13.2l-11.5 6.6V26.6zM8.5 20v13.2l11.4-6.6zM19.9.2v13.2L8.5 20V6.8zm0 13.2l11.5-6.6V20z" }))),
            !p.textFirst && textEl));
    }
}
IconHouzz.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHouzz;
//# sourceMappingURL=IconHouzz.js.map