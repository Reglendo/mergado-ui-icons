import * as React from "react";
class IconTumblrSquare extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--tumblr-square ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M28.4 32.6L27 28.5q-1 .5-2.3.5-.8 0-1.4-.2t-.9-.7-.4-.9-.1-1v-8.9h5.8V13h-5.8V5.7h-4.1q-.2 0-.2.2l-.4 2q-.2 1-.9 2.1t-1.7 2.1-2.7 1.5v3.7h2.9v9.4q0 1.2.5 2.5t1.5 2.5 2.7 1.9 3.9.7q1.5 0 3-.6t2-1.1zm8.9-23.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            !p.textFirst && textEl));
    }
}
IconTumblrSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTumblrSquare;
//# sourceMappingURL=IconTumblrSquare.js.map