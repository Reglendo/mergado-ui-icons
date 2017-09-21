import * as React from "react";
class IconTumblr extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--tumblr ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.1 29.7l1.8 5.3q-0.6 0.7-2.5 1.4t-4 0.7q-2.3 0.1-4.2-0.5t-3.2-1.7-2.1-2.4-1.3-2.6-0.3-2.7v-12.1h-3.8v-4.8q1.6-0.6 2.9-1.6t2-2 1.3-2.2 0.8-2.3 0.3-1.9q0-0.1 0.1-0.2t0.2-0.1h5.4v9.5h7.5v5.6h-7.5v11.5q0 0.7 0.2 1.3t0.5 1.2 1.1 0.9 1.8 0.3q1.7 0 3-0.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconTumblr.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconTumblr;
//# sourceMappingURL=IconTumblr.js.map