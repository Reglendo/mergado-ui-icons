import * as React from "react";
class IconWindows extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--windows ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m16.7 22.5v14.5l-15.2-2.1v-12.4h15.2z m0-16.6v14.7h-15.2v-12.6z m21.9 16.6v17.5l-20.2-2.8v-14.7h20.2z m0-19.6v17.7h-20.2v-15z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconWindows.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconWindows;
//# sourceMappingURL=IconWindows.js.map