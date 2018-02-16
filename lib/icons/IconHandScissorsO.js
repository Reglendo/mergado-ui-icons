import * as React from "react";
class IconHandScissorsO extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--hand-scissors-o ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M23.9 37.1H20q-3.6 0-5-3.1-.6-1.1-.6-2.3v-.1q-1.3-.7-2.2-2t-.8-2.8q0-.9.1-1.1H5.7q-2.4 0-4-1.7T0 20t1.7-4 4-1.7h2.5l-.9-.4q-1.7-.6-2.7-2.1t-1-3.2q0-2.4 1.6-4.1t4.1-1.6q1 0 2 .3l14 5.4h9q2.4 0 4 1.6t1.7 4.1v14.9q0 2-1.2 3.5t-3.1 2l-7.6 1.9q-2.1.5-4.2.5zm-1-15.8l-3.5 1.6-3.6 1.6q-.7.3-1.1.9t-.4 1.4q0 1 .7 1.7t1.8.8q.6 0 1-.2l7.6-3.5q-1.1-.2-1.8-1.1t-.7-2v-1.2zm7.1 6.9q0-1-.7-1.8t-1.8-.7q-.6 0-1 .2l-6.5 3-.8.4q-.2.1-.7.3t-.7.6-.3.6-.2.9q0 1.1.7 1.8t1.8.8q.5 0 .9-.2l7.8-3.6q.7-.3 1.1-.9t.4-1.4zm-5.2-16.8L10.3 5.9q-.5-.2-1-.2-1.2 0-2 .9t-.9 2q0 .9.5 1.6t1.4 1.1L20 15.7v1.4H5.7q-1.2 0-2 .9t-.8 2 .8 2 2 .9h12l5.2-2.4v-4.4q0-1.4 1-2.4l2.5-2.3h-1.6zm-.9 22.9q1.9 0 3.5-.4L35 32q.9-.3 1.5-1.1t.6-1.7V14.3q0-1.2-.8-2t-2-.9h-6.9l-3 2.8q-.8.8-.8 1.9v6.6q0 1 .7 1.7t1.8.7 1.7-.8.8-1.8v-4.6h.7v4.6q0 1.6-1.3 2.5 1.2.2 1.9 1.1t.8 2.1q0 1-.5 1.8t-1.4 1.1l-6.9 3.2H24z" }))),
            !p.textFirst && textEl));
    }
}
IconHandScissorsO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHandScissorsO;
//# sourceMappingURL=IconHandScissorsO.js.map