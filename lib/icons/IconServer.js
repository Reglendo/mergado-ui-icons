import * as React from "react";
class IconServer extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--server ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m2.9 31.4h22.8v-2.8h-22.8v2.8z m0-11.4h22.8v-2.9h-22.8v2.9z m35 10q0-0.9-0.7-1.5t-1.5-0.6-1.5 0.6-0.6 1.5 0.6 1.5 1.5 0.6 1.5-0.6 0.7-1.5z m-35-21.4h22.8v-2.9h-22.8v2.9z m35 10q0-0.9-0.7-1.5t-1.5-0.7-1.5 0.7-0.6 1.5 0.6 1.5 1.5 0.6 1.5-0.6 0.7-1.5z m0-11.5q0-0.8-0.7-1.5t-1.5-0.6-1.5 0.6-0.6 1.5 0.6 1.6 1.5 0.6 1.5-0.6 0.7-1.6z m2.1 18.6v8.6h-40v-8.6h40z m0-11.4v8.6h-40v-8.6h40z m0-11.4v8.5h-40v-8.5h40z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconServer.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconServer;
//# sourceMappingURL=IconServer.js.map