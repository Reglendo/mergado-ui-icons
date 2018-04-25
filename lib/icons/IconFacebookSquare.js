import * as React from "react";
class IconFacebookSquare extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--facebook-square ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-4.2V23.9h4.4l.7-5.2h-5.1v-3.3q0-1.3.5-1.9t2-.6H32V8.2Q30.5 8 28 8q-3.1 0-4.9 1.8t-1.8 5.1v3.8h-4.5v5.2h4.5v13.2H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5z" }))),
            !p.textFirst && textEl));
    }
}
IconFacebookSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFacebookSquare;
//# sourceMappingURL=IconFacebookSquare.js.map