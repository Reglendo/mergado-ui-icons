import * as React from "react";
export const IconExchange = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--exchange ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M40 26.4v4.3q0 .3-.2.5t-.5.2H8.6v4.3q0 .3-.2.5t-.5.2q-.3 0-.6-.2L.2 29.1q-.2-.2-.2-.5t.2-.5l7.1-7.2q.2-.2.6-.2.2 0 .5.2t.2.5v4.3h30.7q.3 0 .5.2t.2.5zm0-12.1q0 .3-.2.5l-7.1 7.1q-.2.2-.6.2-.2 0-.5-.2t-.2-.5v-4.3H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h30.7V7.1q0-.3.2-.5t.5-.2q.3 0 .6.3l7.1 7.1q.2.2.2.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconExchange.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconExchange.js.map