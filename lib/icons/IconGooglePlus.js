import * as React from "react";
class IconGooglePlus extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--google-plus ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M25.2 20.3q0 3.6-1.6 6.5t-4.3 4.4-6.5 1.6q-2.6 0-5-1t-4.1-2.7T1 25t-1-5 1-5 2.7-4.1 4.1-2.7 5-1q5 0 8.6 3.3l-3.5 3.4q-2-2-5.1-2-2.1 0-4 1.1T6 15.9 4.9 20 6 24.1 8.8 27t4 1.1q1.5 0 2.7-.4t2-1 1.4-1.4.8-1.4.4-1.3h-7.3v-4.4h12.1q.3 1.1.3 2.1zm15.1-2.1v3.6h-3.6v3.7H33v-3.7h-3.7v-3.6H33v-3.7h3.7v3.7h3.6z" }))),
            !p.textFirst && textEl));
    }
}
IconGooglePlus.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGooglePlus;
//# sourceMappingURL=IconGooglePlus.js.map