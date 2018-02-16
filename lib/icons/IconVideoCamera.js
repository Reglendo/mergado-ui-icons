import * as React from "react";
export const IconVideoCamera = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--video-camera ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M40 7.9v24.2q0 1-.9 1.4-.3.1-.5.1-.6 0-1-.5l-9-8.9v3.7q0 2.6-1.9 4.5t-4.6 1.9H6.4q-2.6 0-4.5-1.9T0 27.9V12.1q0-2.6 1.9-4.5t4.5-1.9h15.7q2.7 0 4.6 1.9t1.9 4.5v3.7l9-8.9q.4-.5 1-.5.2 0 .5.1.9.4.9 1.4z" }))),
        !props.textFirst && textEl));
};
IconVideoCamera.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconVideoCamera;
//# sourceMappingURL=IconVideoCamera.js.map