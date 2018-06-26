import * as React from "react";
class IconArrowCircleOUp extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--arrow-circle-o-up ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M28 19.6q-.2.4-.7.4H23v7.9q0 .3-.2.5t-.5.2H18q-.3 0-.5-.2t-.2-.5V20H13q-.3 0-.5-.2t-.2-.5q0-.3.2-.5l7.1-7.2q.3-.2.5-.2t.6.2l7.1 7.2q.3.3.2.8zM20.1 7.9q-3.3 0-6.1 1.6t-4.4 4.4T8 20t1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1-1.6-6.1-4.5-4.4-6.1-1.6zM37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconArrowCircleOUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArrowCircleOUp;
//# sourceMappingURL=IconArrowCircleOUp.js.map