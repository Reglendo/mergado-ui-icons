import * as React from "react";
class IconThumbsUp extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--thumbs-up ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M7.7 30q0-.6-.4-1t-1-.4q-.6 0-1 .4t-.4 1q0 .6.4 1t1 .4q.6 0 1-.4t.4-1zm3.6-11.4v14.3q0 .5-.4 1t-1 .4H3.4q-.6 0-1-.4t-.4-1V18.6q0-.6.4-1t1-.5h6.5q.5 0 1 .5t.4 1zm26.4 0q0 1.9-1.2 3.3.3 1 .3 1.7.1 1.7-.9 3.1.3 1.2 0 2.6-.4 1.2-1.2 2.1.2 2.5-1.1 4-1.5 1.7-4.4 1.7h-2.9q-1.5 0-3.2-.3t-2.7-.6-2.7-.9q-2.8-1-3.6-1-.5 0-1-.4t-.4-1V18.6q0-.6.4-1t1-.5q.5 0 1.7-1.3t2.2-2.7q1.5-1.9 2.3-2.7.4-.4.7-1t.4-1.1.3-1.4q.1-.9.2-1.3t.5-1.2.7-1.1q.5-.4 1-.4 1.1 0 1.9.2t1.3.6.9.9.6 1 .2 1.1.1 1 0 .9q0 .8-.2 1.7t-.4 1.3-.6 1.3q-.1.1-.2.4t-.3.4-.2.6h6.2q1.8 0 3 1.3t1.3 3z" }))),
            !p.textFirst && textEl));
    }
}
IconThumbsUp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconThumbsUp;
//# sourceMappingURL=IconThumbsUp.js.map