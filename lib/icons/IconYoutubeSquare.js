import * as React from "react";
export const IconYoutubeSquare = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--youtube-square ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M23.5 29.1v-3.5q0-1.1-.6-1.1-.4 0-.8.3v5q.4.4.8.4.6 0 .6-1.1zm4.1-2.7h1.5v-.8q0-1.1-.7-1.1t-.8 1.1v.8zm-12.7-6V22h-1.8v9.4h-1.7V22H9.7v-1.6h5.2zm4.5 2.8v8.2h-1.5v-.9q-.9 1-1.7 1-.8 0-1-.6-.1-.3-.1-1.2v-6.5h1.5v6.6q0 .4.3.4.5 0 1-.7v-6.3h1.5zm5.6 2.5V29q0 1.1-.2 1.6-.2.9-1.1.9-.8 0-1.6-.9v.8h-1.5v-11h1.5V24q.7-.9 1.6-.9.9 0 1.1 1 .2.4.2 1.6zm5.6 2.9v.2q0 .6-.1 1 0 .4-.3.8-.6.9-1.8.9-1.1 0-1.8-.8-.5-.6-.5-1.9v-2.9q0-1.3.5-1.9.6-.9 1.8-.9t1.7.9q.5.6.5 1.9v1.7h-3V29q0 1.2.8 1.2.5 0 .6-.6l.1-.2q.1-.2 0-.3v-.5h1.5zM20.5 10.2v3.5q0 1.1-.7 1.1t-.7-1.1v-3.5q0-1.2.7-1.2t.7 1.2zm11.9 15.9q0-3.9-.4-5.8-.2-1-1-1.6t-1.7-.8q-3-.3-9.2-.3-6.1 0-9.1.3-1 .1-1.7.8t-1 1.6q-.4 2-.4 5.8 0 3.9.4 5.8.2 1 1 1.7t1.6.7q3.1.4 9.2.4t9.2-.4q1-.1 1.7-.7t1-1.7q.4-1.9.4-5.8zM15.6 11.6l2-6.6h-1.7l-1.1 4.3L13.6 5h-1.8l.6 1.5.5 1.6q.8 2.3 1 3.5v4.5h1.7v-4.5zm6.4 1.8v-2.9q0-1.3-.5-1.9-.6-.9-1.7-.9t-1.7.9q-.5.6-.5 1.9v2.9q0 1.3.5 1.9.6.9 1.7.9t1.7-.9q.5-.6.5-1.9zm4.1 2.7h1.5V7.8h-1.5v6.3q-.5.7-1 .7-.3 0-.3-.3-.1-.1-.1-.6V7.8h-1.5v6.6q0 .8.2 1.2.2.6.9.6.8 0 1.8-1v.9zm11.2-6.8v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconYoutubeSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconYoutubeSquare.js.map