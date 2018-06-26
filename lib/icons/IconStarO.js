import * as React from "react";
class IconStarO extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--star-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M26.9 22.4l6.8-6.6-9.4-1.4-4.2-8.5-4.2 8.5-9.5 1.4 6.9 6.6-1.7 9.4 8.5-4.4 8.4 4.4zm11.7-8q0 .5-.5 1.1L30 23.4l1.9 11.2v.4q0 1.1-.9 1.1-.4 0-.9-.2l-10-5.3-10 5.3q-.5.2-.9.2-.5 0-.7-.3t-.3-.8q0-.1.1-.4l1.9-11.2-8.1-7.9q-.6-.6-.6-1.1 0-.8 1.3-1L14 11.8l5-10.2q.4-.9 1.1-.9t1.1.9l5 10.2 11.2 1.6q1.2.2 1.2 1z" }))),
            !p.textFirst && textEl));
    }
}
IconStarO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconStarO;
//# sourceMappingURL=IconStarO.js.map