import * as React from "react";
class IconDatabase extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--database ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M20.1 17.1q5.3 0 9.9-.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6.8-8.6-.8T5.3 20 3 17.1v-3.8q2.7 1.9 7.3 2.9t9.8.9zm0 17.2q5.3 0 9.9-1t7.3-2.8v3.8q0 1.5-2.3 2.8t-6.3 2.1-8.6.8-8.6-.8-6.2-2.1T3 34.3v-3.8q2.7 1.9 7.3 2.8t9.8 1zm0-8.6q5.3 0 9.9-.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6.7-8.6-.7-6.2-2.1T3 25.7v-3.8q2.7 1.9 7.3 2.9t9.8.9zm0-25.7q4.7 0 8.6.8T35 2.9t2.3 2.8v2.9q0 1.5-2.3 2.8t-6.3 2.1-8.6.8-8.6-.8-6.2-2.1T3 8.6V5.7q0-1.5 2.3-2.8T11.6.8t8.5-.8z" }))),
            !p.textFirst && textEl));
    }
}
IconDatabase.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconDatabase;
//# sourceMappingURL=IconDatabase.js.map