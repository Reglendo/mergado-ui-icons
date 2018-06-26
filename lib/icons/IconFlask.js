import * as React from "react";
class IconFlask extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--flask ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M35.6 32.3q1.2 2 .5 3.4t-3.2 1.4H7.2q-2.4 0-3.1-1.4t.5-3.4l11.2-17.7V5.7h-1.4q-.6 0-1-.4t-.5-1 .5-1 1-.4h11.4q.6 0 1 .4t.4 1-.4 1-1 .4h-1.4v8.9zM18.2 16.1l-6.1 9.6H28l-6.1-9.6-.4-.7V5.7h-2.9v9.7z" }))),
            !p.textFirst && textEl));
    }
}
IconFlask.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFlask;
//# sourceMappingURL=IconFlask.js.map