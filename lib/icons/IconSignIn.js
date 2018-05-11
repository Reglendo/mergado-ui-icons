import * as React from "react";
class IconSignIn extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--sign-in ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M29.4 20q0 .6-.4 1L16.9 33.1q-.5.5-1 .5t-1-.5-.5-1v-6.4h-10q-.5 0-1-.4t-.4-1v-8.6q0-.6.4-1t1-.4h10V7.9q0-.6.5-1t1-.5 1 .5L29 19q.4.4.4 1zm7.9-7.9v15.8q0 2.6-1.9 4.5t-4.5 1.9h-7.2q-.3 0-.5-.2t-.2-.5V32q0-.3.3-.4t.4-.2h7.2q1.4 0 2.5-1t1-2.5V12.1q0-1.4-1-2.5t-2.5-1h-7l-.3-.1h-.2l-.2-.1-.2-.2V6.3q0-.3.3-.4t.4-.2h7.2q2.6 0 4.5 1.9t1.9 4.5z" }))),
            !p.textFirst && textEl));
    }
}
IconSignIn.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSignIn;
//# sourceMappingURL=IconSignIn.js.map