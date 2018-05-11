import * as React from "react";
class IconThumbsODown extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--thumbs-o-down ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M8.7 10q0-.6-.4-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.4-1zm25.7 12.9q0-.8-.4-1.9t-1.2-1q.3-.4.5-1.1t.2-1.2q0-1.5-1.1-2.7.4-.7.4-1.5t-.4-1.6-1.1-1.2q.1-.7.1-1.3 0-1.9-1.1-2.8t-3-.9h-2.9q-2.9 0-7.6 1.6-.1.1-.7.3t-.7.3-.8.2-.9.3-.7.1-.7.1h-.7v14.3h.7q.3 0 .8.2t.9.6.8.8.9.9.8 1 .7.9.5.7q1.2 1.5 1.7 2 .9 1 1.4 2.4t.6 2.8.9 1.9q2.1 0 2.8-1t.8-3.2q0-1.4-1.1-3.6t-1.1-3.6h7.9q1.1 0 2-.8t.8-2zm2.9 0q0 2.3-1.7 4t-4 1.7h-4q1.1 2.2 1.1 4.3 0 2.6-.8 4.1-.7 1.5-2.2 2.3t-3.4.7q-1.2 0-2-.8t-1.2-1.9-.6-2-.4-1.9-.7-1.4q-1.1-1.1-2.4-2.8-2.2-3-3-3.5H5.9q-1.2 0-2.1-.8t-.8-2V8.6q0-1.2.8-2.1t2.1-.8h6.4q.5 0 3.1-.9 2.8-1 4.9-1.5t4.5-.4h2.5q3.1 0 5.1 1.7t1.9 4.8v.2q1.3 1.7 1.3 3.9 0 .5-.1 1 .9 1.5.9 3.2 0 .8-.2 1.5 1.1 1.7 1.1 3.7z" }))),
            !p.textFirst && textEl));
    }
}
IconThumbsODown.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconThumbsODown;
//# sourceMappingURL=IconThumbsODown.js.map