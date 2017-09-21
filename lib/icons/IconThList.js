import * as React from "react";
class IconThList extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--th-list ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.4 27.9v4.2q0 0.9-0.6 1.6t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.6v-4.2q0-0.9 0.6-1.6t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.6z m0-11.5v4.3q0 0.9-0.6 1.5t-1.5 0.7h-7.2q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z m28.6 11.5v4.2q0 0.9-0.6 1.6t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.6v-4.2q0-0.9 0.6-1.6t1.5-0.6h21.5q0.9 0 1.5 0.6t0.6 1.6z m-28.6-22.9v4.3q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5z m28.6 11.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-21.5q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h21.5q0.9 0 1.5 0.6t0.6 1.5z m0-11.4v4.3q0 0.9-0.6 1.5t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h21.5q0.9 0 1.5 0.6t0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconThList.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconThList;
//# sourceMappingURL=IconThList.js.map