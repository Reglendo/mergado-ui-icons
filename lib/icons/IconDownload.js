import * as React from "react";
class IconDownload extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--download ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M30.1 30q0-.6-.5-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.5-1zm5.7 0q0-.6-.4-1t-1-.4-1 .4-.5 1 .5 1 1 .4 1-.4.4-1zm2.8-5v7.1q0 .9-.6 1.6t-1.5.6H3.6q-.8 0-1.5-.6t-.6-1.6V25q0-.9.6-1.5t1.5-.6H14l3 3q1.3 1.2 3.1 1.2t3-1.2l3-3h10.4q.9 0 1.5.6t.6 1.5zm-7.2-12.7q.4.9-.3 1.6l-10 10q-.4.4-1 .4t-1-.4l-10-10q-.7-.7-.3-1.6.3-.9 1.3-.9h5.7v-10q0-.6.4-1t1-.4h5.7q.6 0 1 .4t.5 1v10h5.7q.9 0 1.3.9z" }))),
            !p.textFirst && textEl));
    }
}
IconDownload.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconDownload;
//# sourceMappingURL=IconDownload.js.map