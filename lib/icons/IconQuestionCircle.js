import * as React from "react";
class IconQuestionCircle extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--question-circle ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M23 30.7v-4.3q0-.3-.2-.5t-.5-.2H18q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h4.3q.3 0 .5-.2t.2-.5zm5.7-15q0-2-1.2-3.6t-3.1-2.6-3.8-.9q-5.4 0-8.3 4.7-.3.6.2 1l2.9 2.2q.2.1.5.1t.5-.2q1.2-1.6 1.9-2.1.8-.5 2-.5 1 0 1.9.6t.8 1.3q0 .8-.4 1.3T21 18q-1.4.7-2.5 2t-1.2 2.8v.8q0 .3.2.5t.5.2h4.3q.3 0 .5-.2t.2-.5q0-.5.5-1.1t1.2-1.1q.7-.4 1.1-.7t1-.8 1-1 .6-1.4.3-1.8zm8.6 4.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconQuestionCircle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconQuestionCircle;
//# sourceMappingURL=IconQuestionCircle.js.map