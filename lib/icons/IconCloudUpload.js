import * as React from "react";
class IconCloudUpload extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--cloud-upload ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M26.6 19.3q0-.3-.2-.4l-7.3-7.4q-.2-.1-.5-.1t-.5.1l-7.3 7.3q-.2.3-.2.5 0 .3.2.5t.5.2h4.6v7.3q0 .3.2.5t.5.2h4q.3 0 .5-.2t.2-.5V20h4.6q.3 0 .5-.2t.2-.5zm13.3 6q0 3.3-2.4 5.7t-5.6 2.3H9.3q-3.8 0-6.6-2.7T0 24q0-2.7 1.5-5t3.9-3.4q-.1-.6-.1-.9 0-4.4 3.1-7.5t7.5-3.1q3.3 0 6 1.8t3.9 4.8q1.5-1.3 3.4-1.3 2.2 0 3.8 1.5t1.5 3.8q0 1.6-.8 2.8 2.7.7 4.4 2.9t1.8 4.9z" }))),
            !p.textFirst && textEl));
    }
}
IconCloudUpload.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCloudUpload;
//# sourceMappingURL=IconCloudUpload.js.map