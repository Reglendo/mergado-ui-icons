import * as React from "react";
class IconRegistered extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--registered ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M23.3 15.7q0-2-1.4-2.7-.7-.4-2.6-.4h-2.7v6.3h3.6q1.5 0 2.3-.9t.8-2.3zm1.1 6.4l4.6 8.3q.2.4 0 .7-.2.3-.6.3H25q-.5 0-.6-.4L20 22.9h-3.4v7.8q0 .3-.2.5t-.5.2h-3q-.4 0-.6-.2t-.2-.5V9.3q0-.3.2-.5t.6-.2h6.5q2.9 0 4.3.5 1.9.7 3 2.4t1 4.1q0 2-.9 3.7t-2.6 2.4q.2.2.2.4zM20 3.6q-3.3 0-6.4 1.3T8.4 8.4t-3.5 5.2T3.6 20t1.3 6.4 3.5 5.2 5.2 3.5 6.4 1.3 6.4-1.3 5.2-3.5 3.5-5.2 1.3-6.4-1.3-6.4-3.5-5.2-5.2-3.5T20 3.6zM40 20q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0t7.8 1.6 6.4 4.2 4.2 6.4T40 20z" }))),
            !p.textFirst && textEl));
    }
}
IconRegistered.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconRegistered;
//# sourceMappingURL=IconRegistered.js.map