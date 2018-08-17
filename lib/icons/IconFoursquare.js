import * as React from "react";
class IconFoursquare extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--foursquare ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M27.8 9.7l.8-4.3q.2-.6-.2-.9t-.7-.4H11.8q-.5 0-.9.4t-.3.8v24.6q0 .1.1 0l6.5-7.9q.5-.5.8-.7t1.1-.2h5.4q.4 0 .8-.3t.4-.7q.5-2.9.8-4.2.1-.5-.3-.9t-.8-.4h-6.5q-.7 0-1.1-.5t-.4-1v-1q0-.6.4-1t1.1-.5h7.7q.4 0 .8-.3t.4-.6zm5.1-5q-.3 1.7-1.2 6t-1.6 7.8-.7 3.9q-.2.5-.2.7t-.4.7-.5.8-.9.4-1.3.2h-6q-.3 0-.5.3-.2.2-9.5 11-.5.6-1.3.6T7.7 37q-1.2-.5-1.2-2.2V3.4q0-1.3.8-2.3T10 0h19.8q2.1 0 2.9 1.2t.2 3.5zm0 0l-3.5 17.7q0-.4.7-3.9t1.6-7.8 1.2-6z" }))),
            !p.textFirst && textEl));
    }
}
IconFoursquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFoursquare;
//# sourceMappingURL=IconFoursquare.js.map