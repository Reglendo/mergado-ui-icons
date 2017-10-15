import * as React from "react";
class IconCodiepie extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--codiepie ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.6 15.2q1.2 0 1.9.6t.7 1.9-.8 1.8-2 .6h-3.1V24h-.5v-8.8h3.8zm3.6 13.1l-.1.3-.1.2q-2.6 5.1-7.4 8.2T21 40q-4.1 0-7.8-1.6t-6.4-4.2-4.2-6.4T1 20t1.6-7.8 4.2-6.4 6.4-4.2T21 0q5.4 0 10.1 2.8t7.4 7.5l.2.5-3 1.5q-2.4 1.2-3.7 1.9-.1 0-10.7 6 8.6 4 17.9 8.1zM21 39.5q5.6 0 10.3-3t7.2-7.9l-6.4-2.9q-1.6 3.1-4.6 4.9T21 32.5q-3.4 0-6.2-1.7t-4.6-4.5T8.5 20t1.7-6.2 4.6-4.6T21 7.5t6.3 1.7 4.5 4.5l6.3-3.2q-2.6-4.6-7.2-7.3T21 .5q-2.7 0-5.2.7t-4.7 1.9-3.9 3.1-3.1 3.9-1.9 4.7-.7 5.2.7 5.2 1.9 4.7 3.1 3.9 3.9 3.1 4.7 1.9 5.2.7z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCodiepie.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCodiepie;
//# sourceMappingURL=IconCodiepie.js.map