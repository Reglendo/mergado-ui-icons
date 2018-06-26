import * as React from "react";
class IconDashcube extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--dashcube ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M4.5 15.2q0-2.9 2-5.1t5-2.1h16.6l7.8-8v32.8q0 3-2 5.1t-5 2.1H11.5q-2.9 0-5-2.1t-2-5.1V15.2zM32 32l-3.9-4v-9.5q0-1-.7-1.8t-1.8-.7H14.8q-1 0-1.7.7t-.7 1.8v11q0 1 .7 1.8t1.7.7H32z" }))),
            !p.textFirst && textEl));
    }
}
IconDashcube.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconDashcube;
//# sourceMappingURL=IconDashcube.js.map