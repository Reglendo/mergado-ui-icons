import * as React from "react";
class IconCalendarTimesO extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--calendar-times-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M26.3 30.9l-1 1q-.2.2-.5.2t-.5-.2l-4.2-4.2-4.2 4.2q-.2.2-.5.2t-.5-.2l-1.1-1q-.2-.2-.2-.5t.2-.5l4.3-4.2-4.3-4.2q-.2-.2-.2-.5t.2-.5l1.1-1q.2-.2.5-.2t.5.2l4.2 4.2 4.2-4.2q.2-.2.5-.2t.5.2l1 1q.2.2.2.5t-.2.5l-4.2 4.2 4.2 4.2q.2.2.2.5t-.2.5zM4.4 37.1h31.4V14.3H4.4v22.8zM12.9 10V3.6q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5V10q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm17.2 0V3.6q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5V10q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5zm8.5-1.4v28.5q0 1.2-.8 2.1t-2 .8H4.4q-1.2 0-2.1-.9t-.8-2V8.6q0-1.2.8-2t2.1-.9h2.8V3.6q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6V3.6q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9q1.1 0 2 .9t.8 2z" }))),
            !p.textFirst && textEl));
    }
}
IconCalendarTimesO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCalendarTimesO;
//# sourceMappingURL=IconCalendarTimesO.js.map