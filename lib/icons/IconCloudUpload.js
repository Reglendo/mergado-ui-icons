import * as React from "react";
export const IconCloudUpload = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--cloud-upload ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M26.6 19.3q0-.3-.2-.4l-7.3-7.4q-.2-.1-.5-.1t-.5.1l-7.3 7.3q-.2.3-.2.5 0 .3.2.5t.5.2h4.6v7.3q0 .3.2.5t.5.2h4q.3 0 .5-.2t.2-.5V20h4.6q.3 0 .5-.2t.2-.5zm13.3 6q0 3.3-2.4 5.7t-5.6 2.3H9.3q-3.8 0-6.6-2.7T0 24q0-2.7 1.5-5t3.9-3.4q-.1-.6-.1-.9 0-4.4 3.1-7.5t7.5-3.1q3.3 0 6 1.8t3.9 4.8q1.5-1.3 3.4-1.3 2.2 0 3.8 1.5t1.5 3.8q0 1.6-.8 2.8 2.7.7 4.4 2.9t1.8 4.9z" }))),
        !props.textFirst && textEl));
};
IconCloudUpload.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCloudUpload;
//# sourceMappingURL=IconCloudUpload.js.map