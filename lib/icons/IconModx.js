import * as React from "react";
export const IconModx = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--modx ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M31.9 15.8L18.1 7.2l2.1-3.4h19.1zM9 21.7l-4.1-2.5V0l26.4 16.6zm22.8-3l3.3 2.1V40l-11.9-7.5zm-.8-.4L19.8 36.2H.7l8-12.8z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconModx.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconModx.js.map