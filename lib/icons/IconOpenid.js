import * as React from "react";
class IconOpenid extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--openid ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M24.2 0v34.3l-6 2.8q-5.1-.4-9.3-2.2t-6.5-4.7T0 24.1q0-3.1 2.2-5.9t6.2-4.5 8.7-2.4v3.8q-4.8.8-7.9 3.3T6 24.1q0 3.4 3.5 6t8.7 3.2V3zm15 13l.8 8.7-11.7-2.6 3.3-1.8q-2.7-1.6-6.3-2.2v-3.9q6.2.8 10.7 3.6z" }))),
            !p.textFirst && textEl));
    }
}
IconOpenid.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconOpenid;
//# sourceMappingURL=IconOpenid.js.map