import * as React from "react";
import shallowCompare from "shallow-compare";
class IconHeartbeat extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--heartbeat ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M28.6 22.9h6.8l-.2.2-.2.2h-.1L21 36.7q-.4.4-1 .4t-1-.4L5.1 23.3q-.1 0-.5-.4h8.3q.4 0 .8-.3t.5-.8l1.6-6.3L20 30.4q.2.4.6.7t.8.3q.5 0 .9-.3t.5-.7L26 19.6l1.3 2.5q.4.8 1.3.8zM40 13.3q0 3.2-2.3 6.7h-8.2L27 15.1q-.2-.4-.6-.6t-.8-.2q-1 .1-1.2 1l-2.9 9.6-4.4-15.3q-.1-.4-.5-.7t-.9-.3-.9.3-.5.7L11.7 20H2.3Q0 16.5 0 13.3q0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8.4t2.7 1.3 2.1 1.6T20 7.7q.8-.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-.4q5 0 7.9 2.7t2.8 7.7z" }))),
            !p.textFirst && textEl));
    }
}
IconHeartbeat.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHeartbeat;
//# sourceMappingURL=IconHeartbeat.js.map