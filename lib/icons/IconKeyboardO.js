import * as React from "react";
class IconKeyboardO extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--keyboard-o ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8 25.6v2q0 0.4-0.4 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m2.6-5.3v2q0 0.4-0.3 0.4h-4.7q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h4.7q0.3 0 0.3 0.3z m-2.6-5.3v2q0 0.3-0.4 0.3h-2q-0.3 0-0.3-0.3v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m21.2 10.6v2q0 0.4-0.3 0.4h-17.9q-0.4 0-0.4-0.4v-2q0-0.3 0.4-0.3h17.9q0.3 0 0.3 0.3z m-13.3-5.3v2q0 0.4-0.3 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m-2.6-5.3v2q0 0.3-0.3 0.3h-2q-0.4 0-0.4-0.3v-2q0-0.3 0.4-0.3h2q0.3 0 0.3 0.3z m8 5.3v2q0 0.4-0.4 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m-2.7-5.3v2q0 0.3-0.3 0.3h-2q-0.4 0-0.4-0.3v-2q0-0.3 0.4-0.3h2q0.3 0 0.3 0.3z m8 5.3v2q0 0.4-0.4 0.4h-1.9q-0.4 0-0.4-0.4v-2q0-0.3 0.4-0.3h1.9q0.4 0 0.4 0.3z m8 5.3v2q0 0.4-0.4 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m-10.7-10.6v2q0 0.3-0.3 0.3h-2q-0.3 0-0.3-0.3v-2q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m5.3 0v2q0 0.3-0.3 0.3h-2q-0.3 0-0.3-0.3v-2q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m5.4 0v7.3q0 0.4-0.4 0.4h-4.6q-0.4 0-0.4-0.4v-2q0-0.3 0.4-0.3h2.3v-5q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m2.6 15.6v-18.6h-34.5v18.6h34.5z m2.7-18.6v18.6q0 1.1-0.8 1.9t-1.9 0.8h-34.5q-1.1 0-1.9-0.8t-0.8-1.9v-18.6q0-1.1 0.8-1.9t1.9-0.7h34.5q1.1 0 1.9 0.7t0.8 1.9z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconKeyboardO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconKeyboardO;
//# sourceMappingURL=IconKeyboardO.js.map