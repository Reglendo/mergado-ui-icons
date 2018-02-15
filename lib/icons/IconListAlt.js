import * as React from "react";
export const IconListAlt = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--list-alt ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M8.6 26.4v1.5q0 .2-.2.5t-.5.2H6.4q-.3 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm0-5.7v1.4q0 .3-.2.5t-.5.3H6.4q-.3 0-.5-.3t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm0-5.7v1.4q0 .3-.2.5t-.5.2H6.4q-.3 0-.5-.2t-.2-.5V15q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm25.7 11.4v1.5q0 .2-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h21.5q.3 0 .5.2t.2.5zm0-5.7v1.4q0 .3-.2.5t-.5.3H12.1q-.2 0-.5-.3t-.2-.5v-1.4q0-.3.2-.5t.5-.2h21.5q.3 0 .5.2t.2.5zm0-5.7v1.4q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5V15q0-.3.2-.5t.5-.2h21.5q.3 0 .5.2t.2.5zm2.8 15.7V12.1q0-.2-.2-.5t-.5-.2H3.6q-.3 0-.5.2t-.2.5v18.6q0 .3.2.5t.5.2h32.8q.3 0 .5-.2t.2-.5zM40 6.4v24.3q0 1.5-1 2.5t-2.6 1.1H3.6q-1.5 0-2.6-1.1t-1-2.5V6.4Q0 5 1.1 3.9t2.5-1h32.8q1.5 0 2.6 1t1 2.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconListAlt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconListAlt.js.map