import * as React from "react";
class IconLevelUp extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--level-up ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.2 13.5q-.4.8-1.3.8h-4.3v19.3q0 .3-.2.5t-.5.2H9.2q-.5 0-.6-.4-.2-.5.1-.8l3.5-4.3q.2-.2.6-.2h7.1V14.3h-4.3q-.9 0-1.3-.8-.3-.9.2-1.6l7.2-8.5q.4-.5 1.1-.5t1.1.5l7.1 8.5q.6.8.2 1.6z" }))),
            !p.textFirst && textEl));
    }
}
IconLevelUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLevelUp;
//# sourceMappingURL=IconLevelUp.js.map