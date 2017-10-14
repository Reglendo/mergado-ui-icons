import * as React from "react";
class IconSlideshare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M19.5 16.5q0 1.9-1.4 3.2T14.7 21t-3.4-1.3-1.5-3.2q0-1.9 1.5-3.2t3.4-1.3 3.4 1.3 1.4 3.2zm11.2 0q0 1.9-1.4 3.2T25.9 21q-2 0-3.4-1.3t-1.4-3.2q0-1.9 1.4-3.2t3.4-1.3q2 0 3.4 1.3t1.4 3.2zm5 4V5.6q0-1.9-.7-2.7t-2.5-.8H7.7q-1.9 0-2.5.7t-.7 2.8v15.1q1 .5 2 .9t1.8.6 1.8.4 1.6.2 1.6.1 1.3 0 1.2 0 1 0q1.6-.1 2.2.6l.2.2q.6.5 1.3 1.1.2-2 2.7-1.9h1.7q.2 0 1.1.1t1.1-.1 1.3-.1 1.3-.2 1.4-.3 1.5-.4 1.5-.6 1.6-.8zm3.7-.1Q36.7 23.8 31 26q1.9 6.4-.5 10.4-1.4 2.5-4.1 3.3-2.3.7-4-.3-1.9-1.1-1.8-3.7l-.1-7.2v-.1q-.1 0-.5-.1t-.5-.1l-.1 7.5q.1 2.6-1.8 3.7-1.8 1-4.1.3-2.6-.8-4.1-3.3-2.3-4-.5-10.4-5.6-2.3-8.3-5.6-.5-.8 0-1.4t1.3 0l.2.2q.1.1.3.2V3.9q0-1.6 1-2.8T6 0h28q1.5 0 2.6 1.1t1 2.8v15.5l.5-.4q.9-.6 1.3 0t0 1.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconSlideshare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconSlideshare;
//# sourceMappingURL=IconSlideshare.js.map