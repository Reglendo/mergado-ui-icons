import * as React from "react";
class IconInfoCircle extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--info-circle ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M25.9 30.7v-3.6q0-.3-.2-.5t-.6-.2H23V15q0-.3-.2-.5t-.5-.2h-7.2q-.3 0-.5.2t-.2.5v3.6q0 .3.2.5t.5.2h2.2v7.1h-2.2q-.3 0-.5.2t-.2.5v3.6q0 .3.2.5t.5.2h10q.4 0 .6-.2t.2-.5zm-2.9-20V7.1q0-.3-.2-.5t-.5-.2H18q-.3 0-.5.2t-.2.5v3.6q0 .3.2.5t.5.2h4.3q.3 0 .5-.2t.2-.5zM37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconInfoCircle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconInfoCircle;
//# sourceMappingURL=IconInfoCircle.js.map