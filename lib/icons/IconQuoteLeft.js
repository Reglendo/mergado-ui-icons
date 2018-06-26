import * as React from "react";
class IconQuoteLeft extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--quote-left ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M18.6 21.4V30q0 1.8-1.2 3t-3 1.3H5.8q-1.8 0-3-1.3t-1.3-3V14.3q0-2.3.9-4.4t2.4-3.7 3.7-2.4 4.4-.9h1.5q.5 0 1 .4t.4 1v2.8q0 .6-.4 1t-1 .5h-1.5q-2.3 0-4 1.6t-1.7 4.1v.7q0 .9.6 1.5t1.6.6h5q1.7 0 3 1.3t1.2 3zm20 0V30q0 1.8-1.2 3t-3 1.3h-8.6q-1.8 0-3-1.3t-1.3-3V14.3q0-2.3.9-4.4t2.4-3.7 3.7-2.4 4.4-.9h1.5q.5 0 1 .4t.4 1v2.8q0 .6-.4 1t-1 .5h-1.5q-2.3 0-4 1.6t-1.7 4.1v.7q0 .9.6 1.5t1.6.6h5q1.7 0 3 1.3t1.2 3z" }))),
            !p.textFirst && textEl));
    }
}
IconQuoteLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconQuoteLeft;
//# sourceMappingURL=IconQuoteLeft.js.map