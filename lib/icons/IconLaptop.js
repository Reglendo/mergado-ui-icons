import * as React from "react";
export const IconLaptop = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--laptop ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M8.6 28q-1.3 0-2.3-1t-1-2.3V10q0-1.3 1-2.3t2.3-1h22.6q1.4 0 2.4 1t1 2.3v14.7q0 1.3-1 2.3t-2.4 1H8.6zM8 10v14.7q0 .2.2.4t.4.2h22.6q.3 0 .5-.2t.2-.4V10q0-.2-.2-.4t-.5-.2H8.6q-.2 0-.4.2T8 10zm28.5 19.3h3.4v2q0 .8-1 1.4t-2.4.6H3.3q-1.3 0-2.3-.6t-1-1.4v-2h36.5zm-14.9 2q.3 0 .3-.3t-.3-.4h-3.3q-.4 0-.4.4t.4.3h3.3z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconLaptop.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconLaptop.js.map