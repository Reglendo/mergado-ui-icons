import * as React from "react";
class IconSitemap extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--sitemap ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40 27.9v7.1q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-7.1q0-0.9 0.6-1.6t1.5-0.6h2.2v-4.3h-11.5v4.3h2.2q0.9 0 1.5 0.6t0.6 1.6v7.1q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-7.1q0-0.9 0.6-1.6t1.5-0.6h2.2v-4.3h-11.5v4.3h2.2q0.9 0 1.5 0.6t0.6 1.6v7.1q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-7.1q0-0.9 0.6-1.6t1.5-0.6h2.2v-4.3q0-1.1 0.8-2t2-0.8h11.5v-4.3h-2.2q-0.9 0-1.5-0.6t-0.6-1.6v-7.1q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5v7.1q0 0.9-0.6 1.6t-1.5 0.6h-2.2v4.3h11.5q1.1 0 2 0.8t0.8 2v4.3h2.2q0.9 0 1.5 0.6t0.6 1.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconSitemap.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconSitemap;
//# sourceMappingURL=IconSitemap.js.map