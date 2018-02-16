import * as React from "react";
import shallowCompare from "shallow-compare";
class IconCommentingO extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--commenting-o ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M14.3 20q0 1.2-.9 2t-2 .9-2-.9-.8-2 .8-2 2-.9 2 .9.9 2zm8.6 0q0 1.2-.9 2t-2 .9-2-.9-.9-2 .9-2 2-.9 2 .9.9 2zm8.5 0q0 1.2-.8 2t-2 .9-2-.9-.9-2 .9-2 2-.9 2 .9.8 2zM20 8.6q-4.6 0-8.5 1.5t-6.3 4.2T2.9 20q0 2.5 1.6 4.8t4.4 3.9l2 1.1-.6 2.1q-.5 2.1-1.6 3.9 3.4-1.4 6.2-3.8l.9-.9 1.3.2q1.5.1 2.9.1 4.6 0 8.5-1.5t6.3-4.2 2.3-5.7-2.3-5.7-6.3-4.2T20 8.6zM40 20q0 3.9-2.7 7.2T30 32.4t-10 1.9q-1.6 0-3.2-.2-4.5 3.9-10.3 5.4-1.1.3-2.6.5h-.1q-.3 0-.6-.2t-.3-.6v-.1q-.1-.1 0-.2t0-.3.1-.2l.1-.2.2-.2.2-.2.7-.7q.6-.6.7-.9t.7-.9.8-1.1.6-1.3.5-1.7Q4 29.2 2 26.3T0 20q0-2.9 1.6-5.5t4.2-4.6 6.4-3.1T20 5.7t7.8 1.1 6.3 3.1 4.3 4.6T40 20z" }))),
            !p.textFirst && textEl));
    }
}
IconCommentingO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCommentingO;
//# sourceMappingURL=IconCommentingO.js.map