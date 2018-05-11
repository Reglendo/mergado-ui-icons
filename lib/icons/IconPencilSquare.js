import * as React from "react";
class IconPencilSquare extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--pencil-square ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M12 24.7l3.4 3.4-1.1 1.2H13v-2.2h-2.1v-1.2zm9.3-8.7q.3.3-.1.7l-6.5 6.5q-.4.4-.7.1-.3-.3.1-.7l6.5-6.5q.4-.4.7-.1zm-6.2 15.4l12.2-12.1-6.4-6.4L8.7 25v6.4h6.4zm13.6-13.5l2.1-2.1q.6-.6.6-1.5t-.6-1.5l-3.4-3.4q-.6-.7-1.5-.7t-1.6.7l-2 2zm8.6-8.6v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            !p.textFirst && textEl));
    }
}
IconPencilSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPencilSquare;
//# sourceMappingURL=IconPencilSquare.js.map