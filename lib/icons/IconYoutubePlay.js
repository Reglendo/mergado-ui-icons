import * as React from "react";
class IconYoutubePlay extends React.Component {
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
                    React.createElement("path", { d: "m28.6 20q0-0.8-0.7-1.2l-11.4-7.1q-0.7-0.5-1.5-0.1-0.7 0.4-0.7 1.3v14.2q0 0.9 0.7 1.3 0.4 0.2 0.7 0.2 0.5 0 0.8-0.3l11.4-7.1q0.7-0.4 0.7-1.2z m11.4 0q0 2.1 0 3.3t-0.2 3.1-0.5 3.3q-0.4 1.6-1.6 2.7t-2.7 1.3q-5 0.6-15 0.6t-15-0.6q-1.6-0.2-2.8-1.3t-1.5-2.7q-0.3-1.5-0.5-3.3t-0.2-3.1 0-3.3 0-3.3 0.2-3.1 0.5-3.3q0.4-1.6 1.6-2.7t2.7-1.3q5-0.6 15-0.6t15 0.6q1.6 0.2 2.8 1.3t1.5 2.7q0.3 1.5 0.5 3.3t0.2 3.1 0 3.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconYoutubePlay.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconYoutubePlay;
//# sourceMappingURL=IconYoutubePlay.js.map