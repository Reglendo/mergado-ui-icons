import * as React from "react";
export const IconInfoCircle = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--info-circle ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M25.9 30.7v-3.6q0-.3-.2-.5t-.6-.2H23V15q0-.3-.2-.5t-.5-.2h-7.2q-.3 0-.5.2t-.2.5v3.6q0 .3.2.5t.5.2h2.2v7.1h-2.2q-.3 0-.5.2t-.2.5v3.6q0 .3.2.5t.5.2h10q.4 0 .6-.2t.2-.5zm-2.9-20V7.1q0-.3-.2-.5t-.5-.2H18q-.3 0-.5.2t-.2.5v3.6q0 .3.2.5t.5.2h4.3q.3 0 .5-.2t.2-.5zM37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
        !props.textFirst && textEl));
};
IconInfoCircle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconInfoCircle;
//# sourceMappingURL=IconInfoCircle.js.map