import * as React from "react";
class IconImage extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--image ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M13.3 13.4q0 1.6-1.2 2.8t-2.8 1.1-2.8-1.1-1.2-2.8 1.2-2.9 2.8-1.1 2.8 1.1 1.2 2.9zm21.3 7.9v9.3H5.3v-4L12 20l3.3 3.3 10.6-10.6zm1.9-14.6H3.3q-.2 0-.4.2t-.2.5v25.2q0 .3.2.5t.4.2h33.2q.3 0 .5-.2t.2-.5V7.4q0-.3-.2-.5t-.5-.2zm3.4.7v25.2q0 1.4-1 2.4t-2.4.9H3.3Q2 35.9 1 35t-1-2.4V7.4Q0 6 1 5t2.3-.9h33.2q1.4 0 2.4.9t1 2.4z" }))),
            !p.textFirst && textEl));
    }
}
IconImage.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconImage;
//# sourceMappingURL=IconImage.js.map