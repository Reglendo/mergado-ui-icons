import * as React from "react";
export const IconUpload = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--upload ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M30.1 32.9q0-.6-.5-1t-1-.5-1 .5-.4 1 .4 1 1 .4 1-.4.5-1zm5.7 0q0-.6-.4-1t-1-.5-1 .5-.5 1 .5 1 1 .4 1-.4.4-1zm2.8-5V35q0 .9-.6 1.5t-1.5.6H3.6q-.8 0-1.5-.6T1.5 35v-7.1q0-.9.6-1.6t1.5-.6h9.6q.4 1.3 1.5 2.1t2.5.8h5.7q1.4 0 2.5-.8t1.6-2.1h9.5q.9 0 1.5.6t.6 1.6zm-7.2-14.5q-.4.9-1.3.9h-5.7v10q0 .6-.5 1t-1 .4h-5.7q-.6 0-1-.4t-.4-1v-10h-5.7q-1 0-1.3-.9-.4-.9.3-1.5l10-10q.4-.5 1-.5t1 .5l10 10q.7.6.3 1.5z" }))),
        !props.textFirst && textEl));
};
IconUpload.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconUpload;
//# sourceMappingURL=IconUpload.js.map