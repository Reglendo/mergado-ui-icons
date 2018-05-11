import * as React from "react";
class IconLock extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--lock ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M14.1 17.1h11.5v-4.2q0-2.4-1.7-4.1t-4-1.7-4.1 1.7-1.7 4.1v4.2zm18.6 2.2v12.8q0 .9-.6 1.6t-1.5.6H9.1q-.8 0-1.5-.6T7 32.1V19.3q0-.9.6-1.5t1.5-.7h.8v-4.2q0-4.1 2.9-7.1t7.1-2.9 7 2.9 3 7.1v4.2h.7q.9 0 1.5.7t.6 1.5z" }))),
            !p.textFirst && textEl));
    }
}
IconLock.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconLock;
//# sourceMappingURL=IconLock.js.map