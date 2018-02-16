import * as React from "react";
export const IconCamera = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--camera ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M19.9 15.3q2.5 0 4.3 1.8t1.7 4.2-1.7 4.3-4.3 1.7-4.2-1.7-1.7-4.3 1.7-4.2 4.2-1.8zm14.7-8.6q2.2 0 3.7 1.6t1.6 3.7v18.6q0 2.2-1.6 3.8t-3.7 1.5H5.3q-2.2 0-3.7-1.5T0 30.6V12q0-2.2 1.6-3.7t3.7-1.6H10l1-2.8q.4-1 1.5-1.8t2.1-.7h10.6q1.1 0 2.2.7t1.4 1.8l1.1 2.8h4.7zM19.9 30.6q3.9 0 6.6-2.7t2.7-6.6-2.7-6.5-6.6-2.8-6.5 2.8-2.8 6.5 2.8 6.6 6.5 2.7z" }))),
        !props.textFirst && textEl));
};
IconCamera.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCamera;
//# sourceMappingURL=IconCamera.js.map