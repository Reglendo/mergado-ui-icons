import * as React from "react";
class IconBan extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--ban ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M32.3 19.9q0-3.6-2-6.6L13.5 30.2q3.1 1.9 6.6 1.9 2.5 0 4.8-.9t3.8-2.6 2.6-3.9 1-4.8zM10 26.6L26.8 9.8q-3-2.1-6.7-2.1-3.3 0-6.1 1.7t-4.4 4.4T8 19.9q0 3.6 2 6.7zm27.3-6.7q0 3.5-1.4 6.7t-3.6 5.5-5.5 3.7-6.7 1.3-6.6-1.3T8 32.1t-3.6-5.5T3 19.9t1.4-6.7T8 7.8t5.5-3.7 6.6-1.4 6.7 1.4 5.5 3.7 3.6 5.4 1.4 6.7z" }))),
            !p.textFirst && textEl));
    }
}
IconBan.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBan;
//# sourceMappingURL=IconBan.js.map