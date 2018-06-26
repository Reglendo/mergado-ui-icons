import * as React from "react";
class IconArrowUp extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--arrow-up ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M37.5 21.7q0 1.1-.9 2L35 25.4q-.9.8-2.1.8-1.2 0-2-.8l-6.5-6.6v15.7q0 1.2-.9 1.9t-2 .7h-2.9q-1.1 0-2-.7t-.8-1.9V18.8l-6.6 6.6q-.8.8-2 .8t-2-.8l-1.7-1.7q-.8-.9-.8-2 0-1.2.8-2.1L18.1 5.1q.7-.8 2-.8 1.2 0 2 .8l14.5 14.5q.9.9.9 2.1z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowUp;
//# sourceMappingURL=IconArrowUp.js.map