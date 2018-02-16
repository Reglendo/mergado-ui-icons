import * as React from "react";
class IconGenderless extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--genderless ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M29.9 21.4q0-4.1-3-7t-7-3-7.1 3-2.9 7 2.9 7.1 7.1 2.9 7-2.9 3-7.1zm2.8 0q0 2.6-1 5T29 30.5t-4.2 2.8-4.9 1-5-1-4.1-2.8T8 26.4t-1-5 1-5 2.8-4.1 4.1-2.7 5-1 4.9 1 4.2 2.7 2.7 4.1 1 5z" }))),
            !p.textFirst && textEl));
    }
}
IconGenderless.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGenderless;
//# sourceMappingURL=IconGenderless.js.map