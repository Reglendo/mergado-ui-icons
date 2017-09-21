import * as React from "react";
class IconObjectUngroup extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--object-ungroup ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40.3 17.8h-2.2v11.2h2.2v6.7h-6.7v-2.3h-15.7v2.3h-6.7v-6.7h2.2v-2.3h-6.7v2.3h-6.7v-6.8h2.2v-11.2h-2.2v-6.7h6.7v2.3h15.7v-2.3h6.7v6.7h-2.2v2.3h6.7v-2.3h6.7v6.8z m-4.4-4.5v2.2h2.2v-2.2h-2.2z m-11.2-6.7v2.2h2.2v-2.2h-2.2z m-22.5 0v2.2h2.3v-2.2h-2.3z m2.3 20.1v-2.2h-2.3v2.2h2.3z m22.4-2.2h-2.2v2.2h2.2v-2.2z m-20.2 0h15.7v-2.3h2.3v-11.2h-2.3v-2.2h-15.7v2.2h-2.2v11.2h2.2v2.3z m9 8.9v-2.2h-2.3v2.2h2.3z m22.4 0v-2.2h-2.2v2.2h2.2z m-2.2-4.4v-11.2h-2.3v-2.3h-6.7v6.7h2.2v6.8h-6.7v-2.3h-6.7v2.3h2.2v2.2h15.7v-2.2h2.3z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconObjectUngroup.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconObjectUngroup;
//# sourceMappingURL=IconObjectUngroup.js.map