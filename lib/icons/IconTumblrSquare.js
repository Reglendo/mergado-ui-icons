import * as React from "react";
class IconTumblrSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--tumblr-square ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.4 32.6l-1.4-4.1q-1 0.5-2.3 0.5-0.8 0-1.4-0.2t-0.9-0.7-0.4-0.9-0.1-1v-8.9h5.8v-4.3h-5.8v-7.3h-4.1q-0.2 0-0.2 0.2-0.2 1-0.4 2t-0.9 2.1-1.7 2.1-2.7 1.5v3.7h2.9v9.4q0 1.2 0.5 2.5t1.5 2.5 2.7 1.9 3.9 0.7q1.5 0 3-0.6t2-1.1z m8.9-23.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconTumblrSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconTumblrSquare;
//# sourceMappingURL=IconTumblrSquare.js.map