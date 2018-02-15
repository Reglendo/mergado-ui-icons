import * as React from "react";
export const IconMusic = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--music ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M37.3 5v25q0 1.1-.8 2t-1.9 1.3-2.3.8-2.2.2-2.1-.2-2.3-.8-1.9-1.3-.8-2 .8-2 1.9-1.3 2.3-.8 2.1-.2q2.4 0 4.3.9v-12l-17.1 5.3v15.8q0 1.1-.8 2t-1.9 1.4-2.3.7-2.2.2-2.1-.2-2.3-.7-1.9-1.4-.8-2 .8-2 1.9-1.3 2.3-.7 2.1-.3q2.4 0 4.3.9V10.7q0-.7.5-1.2t1-.8L34.5 3q.3-.1.6-.1.9 0 1.6.6t.6 1.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconMusic.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconMusic.js.map