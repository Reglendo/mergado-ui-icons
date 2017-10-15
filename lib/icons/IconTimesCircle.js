import * as React from "react";
class IconTimesCircle extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--times-circle ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M28.6 25q0-.5-.4-1l-4-4 4-4q.4-.5.4-1 0-.6-.4-1.1l-2-2q-.4-.4-1-.4t-1 .4L20.1 16l-4-4.1q-.4-.4-1-.4t-1 .4l-2 2q-.5.5-.5 1.1 0 .5.5 1l4 4-4 4q-.5.5-.5 1 0 .7.5 1.1l2 2q.4.4 1 .4t1-.4l4-4.1 4.1 4.1q.4.4 1 .4t1-.4l2-2q.4-.4.4-1zm8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTimesCircle.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTimesCircle;
//# sourceMappingURL=IconTimesCircle.js.map