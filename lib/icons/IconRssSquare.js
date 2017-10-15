import * as React from "react";
class IconRssSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--rss-square ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M14.4 28.6q0-1.2-.8-2t-2-.9-2 .9-.9 2 .9 2 2 .8 2-.8.8-2zm7.9 2.1q-.3-5.2-4-8.9t-8.8-3.9q-.3 0-.6.2t-.2.5v2.9q0 .2.2.4t.5.3q3.4.2 5.9 2.7t2.7 5.9q0 .2.2.4t.5.2h2.8q.3 0 .6-.2t.2-.5zm8.5 0q-.1-3.4-1.2-6.6t-3.1-5.9-4.6-4.5-5.8-3.1-6.6-1.3q-.4 0-.6.2-.2.2-.2.5v2.9q0 .3.2.5t.5.2q4.6.2 8.4 2.5t6.3 6.2 2.5 8.4q0 .3.2.5t.5.2h2.8q.3 0 .5-.2.3-.2.2-.5zm6.5-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconRssSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconRssSquare;
//# sourceMappingURL=IconRssSquare.js.map