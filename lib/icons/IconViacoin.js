import * as React from "react";
class IconViacoin extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--viacoin ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 0l-4.3 10h4.3v4.3h-6.1l-1.3 2.8h7.4v4.3h-9.2l-8 18.6-7.9-18.6h-9.2v-4.3h7.3l-1.2-2.8h-6.1v-4.3h4.3l-4.3-10h5.7l7.2 17.1h8.5l7.2-17.1h5.7z m-17.2 27.1l2.5-5.7h-4.9z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconViacoin.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconViacoin;
//# sourceMappingURL=IconViacoin.js.map