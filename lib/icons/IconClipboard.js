import * as React from "react";
class IconClipboard extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--clipboard ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M17.1 37.1h20V22.9h-9.2q-.9 0-1.6-.7t-.6-1.5v-9.3h-8.6v25.7zM22.9 5V3.6q0-.3-.3-.5t-.5-.2H6.4q-.3 0-.5.2t-.2.5V5q0 .3.2.5t.5.2h15.7q.3 0 .5-.2t.3-.5zm5.7 15h6.6l-6.6-6.7V20zM40 22.9v15q0 .9-.6 1.5t-1.5.6H16.4q-.9 0-1.5-.6t-.6-1.5v-3.6H2.1q-.9 0-1.5-.6T0 32.1v-30Q0 1.3.6.6T2.1 0h24.3q.9 0 1.5.6t.7 1.5v7.4l.8.6 9.1 9.1q.6.6 1.1 1.7t.4 2z" }))),
            !p.textFirst && textEl));
    }
}
IconClipboard.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconClipboard;
//# sourceMappingURL=IconClipboard.js.map