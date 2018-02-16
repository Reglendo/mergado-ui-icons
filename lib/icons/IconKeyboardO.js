import * as React from "react";
class IconKeyboardO extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--keyboard-o ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M8 25.6v2q0 .4-.4.4h-2q-.3 0-.3-.4v-2q0-.3.3-.3h2q.4 0 .4.3zm2.6-5.3v2q0 .4-.3.4H5.6q-.3 0-.3-.4v-2q0-.3.3-.3h4.7q.3 0 .3.3zM8 15v2q0 .3-.4.3h-2q-.3 0-.3-.3v-2q0-.3.3-.3h2q.4 0 .4.3zm21.2 10.6v2q0 .4-.3.4H11q-.4 0-.4-.4v-2q0-.3.4-.3h17.9q.3 0 .3.3zm-13.3-5.3v2q0 .4-.3.4h-2q-.3 0-.3-.4v-2q0-.3.3-.3h2q.3 0 .3.3zM13.3 15v2q0 .3-.3.3h-2q-.4 0-.4-.3v-2q0-.3.4-.3h2q.3 0 .3.3zm8 5.3v2q0 .4-.4.4h-2q-.3 0-.3-.4v-2q0-.3.3-.3h2q.4 0 .4.3zM18.6 15v2q0 .3-.3.3h-2q-.4 0-.4-.3v-2q0-.3.4-.3h2q.3 0 .3.3zm8 5.3v2q0 .4-.4.4h-1.9q-.4 0-.4-.4v-2q0-.3.4-.3h1.9q.4 0 .4.3zm8 5.3v2q0 .4-.4.4h-2q-.3 0-.3-.4v-2q0-.3.3-.3h2q.4 0 .4.3zM23.9 15v2q0 .3-.3.3h-2q-.3 0-.3-.3v-2q0-.3.3-.3h2q.3 0 .3.3zm5.3 0v2q0 .3-.3.3h-2q-.3 0-.3-.3v-2q0-.3.3-.3h2q.3 0 .3.3zm5.4 0v7.3q0 .4-.4.4h-4.6q-.4 0-.4-.4v-2q0-.3.4-.3h2.3v-5q0-.3.3-.3h2q.3 0 .3.3zm2.6 15.6V12H2.7v18.6h34.5zM39.9 12v18.6q0 1.1-.8 1.9t-1.9.8H2.7q-1.1 0-1.9-.8T0 30.6V12q0-1.1.8-1.9t1.9-.7h34.5q1.1 0 1.9.7t.8 1.9z" }))),
            !p.textFirst && textEl));
    }
}
IconKeyboardO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconKeyboardO;
//# sourceMappingURL=IconKeyboardO.js.map