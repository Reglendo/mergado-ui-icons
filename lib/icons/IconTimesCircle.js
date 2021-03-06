import * as React from "react";
class IconTimesCircle extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--times-circle ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M28.6 25q0-.5-.4-1l-4-4 4-4q.4-.5.4-1 0-.6-.4-1.1l-2-2q-.4-.4-1-.4t-1 .4L20.1 16l-4-4.1q-.4-.4-1-.4t-1 .4l-2 2q-.5.5-.5 1.1 0 .5.5 1l4 4-4 4q-.5.5-.5 1 0 .7.5 1.1l2 2q.4.4 1 .4t1-.4l4-4.1 4.1 4.1q.4.4 1 .4t1-.4l2-2q.4-.4.4-1zm8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconTimesCircle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTimesCircle;
//# sourceMappingURL=IconTimesCircle.js.map