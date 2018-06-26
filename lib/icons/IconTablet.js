import * as React from "react";
class IconTablet extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--tablet ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M21.3 31.4q0-.5-.4-1t-1-.4-1 .4-.5 1 .5 1 1 .5 1-.5.4-1zm8.6-3.5V6.4q0-.3-.3-.5t-.5-.2H10.6q-.3 0-.5.2t-.2.5v21.5q0 .2.2.5t.5.2h18.5q.3 0 .5-.2t.3-.5zm2.8-21.5v24.3q0 1.5-1 2.5t-2.6 1.1H10.6q-1.5 0-2.6-1.1t-1-2.5V6.4Q7 5 8.1 3.9t2.5-1h18.5q1.5 0 2.6 1t1 2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconTablet.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTablet;
//# sourceMappingURL=IconTablet.js.map