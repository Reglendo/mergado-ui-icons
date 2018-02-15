import * as React from "react";
export const IconExternalLink = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--external-link ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.4 20.7v7.2q0 2.6-1.9 4.5T25 34.3H6.4q-2.6 0-4.5-1.9T0 27.9V9.3q0-2.7 1.9-4.6t4.5-1.8h15.7q.4 0 .6.2t.2.5V5q0 .3-.2.5t-.6.2H6.4Q5 5.7 3.9 6.8t-1 2.5v18.6q0 1.4 1 2.5t2.5 1H25q1.5 0 2.5-1t1.1-2.5v-7.2q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zM40 1.4v11.5q0 .5-.4 1t-1 .4-1-.4l-4-4-14.5 14.6q-.2.2-.5.2t-.5-.2l-2.6-2.6q-.2-.2-.2-.5t.2-.5L30.1 6.4l-4-4q-.4-.4-.4-1t.4-1 1-.4h11.5q.6 0 1 .4t.4 1z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconExternalLink.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconExternalLink.js.map