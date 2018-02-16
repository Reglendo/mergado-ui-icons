import * as React from "react";
export const IconCcMastercard = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--cc-mastercard ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M11.7 20.6h-.2q-.8 0-.8.6 0 .4.3.4t.5-.3.2-.7zm7-.6h1l.1-.1-.1-.2q-.1-.2 0-.1t-.1-.1-.1-.1-.2 0q-.5 0-.6.6zm9.4.6h-.2q-.8 0-.8.6 0 .4.3.4t.5-.3.2-.7zm5.6-.4q0-.7-.5-.7-.4 0-.6.3t-.2.9q0 .8.5.8.4 0 .6-.4t.2-.9zM8.4 17.7h1.5l-.7 4.6h-1l.5-3.5-1.2 3.5h-.7l-.1-3.5-.6 3.5h-.9l.8-4.6h1.4v2.9zm4.4 1.9v.7q-.3 1.8-.3 2h-.9l.1-.4q-.4.5-1.1.5-.4 0-.6-.3t-.3-.7q0-.7.5-1.1t1.3-.4h.4v-.2q0-.3-.6-.3-.5 0-1.1.1l.2-.8q.6-.2 1.1-.2 1.3 0 1.3 1.1zm2.8-1l-.2.8h-.7q-.5 0-.5.3 0 .1.1.2t.4.2q.7.3.7 1 0 1.3-1.5 1.3-.6 0-1.1-.1 0-.1.2-.9.5.2.9.2.5 0 .5-.4 0-.1-.1-.2t-.3-.2q-.8-.3-.8-1 0-1.3 1.5-1.3.5 0 .9.1zm1.5 0h.5l-.1.9H17q-.1.3-.1.7t-.2.7 0 .3q0 .3.3.3.2 0 .3-.1l-.1.9q-.4.1-.7.1-.8 0-.8-.8 0-.3.1-1 .1-.4.4-2.6h1zm3.6 1.3q0 .4-.2.9h-1.9q-.1.4.2.5t.6.2q.6 0 1-.2l-.1.9q-.5.2-1 .2-1.7 0-1.7-1.7 0-.9.5-1.6t1.2-.6q.6 0 1 .4t.4 1zm2.4-1.3q-.2.4-.4 1.1-.4-.1-.5.4t-.5 2.2h-1l.1-.2q.4-2.3.5-3.5h.9l-.1.6q.3-.4.5-.6t.5 0zm3.3-.8l-.2 1q-.5-.2-.9-.2-.5 0-.9.5t-.3 1.2q0 .5.2.8t.7.3q.4 0 .8-.2l-.1 1q-.5.2-.9.2-.8 0-1.3-.6t-.4-1.4q0-1.2.6-2t1.6-.8q.5 0 1.1.2zm2.8 1.8q0 .3-.1.7-.2 1.4-.3 2H28v-.4q-.3.5-1 .5-.4 0-.6-.3t-.3-.7q0-.7.5-1.1t1.2-.4h.4q.1-.1.1-.2 0-.3-.7-.3-.5 0-1 .1l.1-.8q.7-.2 1.2-.2 1.3 0 1.3 1.1zm2.5-1q-.3.4-.4 1.1-.4-.1-.6.4t-.4 2.2h-1l.1-.2q.3-1.9.5-3.5h.9q0 .2-.1.6.3-.4.5-.6t.5 0zm2.4-.9h1l-.7 4.6h-1l.1-.3q-.4.4-.9.4-.6 0-.9-.4t-.3-1.2q0-.9.5-1.6t1.1-.7q.5 0 .9.6zm2 2.3q0-2.6-1.3-4.8t-3.5-3.4-4.7-1.3q-3.2 0-5.8 1.9 2.2 2 3 5h-.9q-.7-2.7-2.7-4.5-2 1.8-2.8 4.5h-.9q.8-3 3-5-2.6-1.9-5.7-1.9-2.6 0-4.8 1.3t-3.5 3.4T4.3 20t1.2 4.8T9 28.2t4.8 1.3q3.1 0 5.7-1.9-2.1-1.9-2.9-4.6h.9q.8 2.4 2.7 4.1 1.8-1.7 2.6-4.1h.9q-.8 2.7-2.9 4.6 2.6 1.9 5.8 1.9 2.5 0 4.7-1.3t3.5-3.4 1.3-4.8zm4.2-11.2v22.4q0 .9-.6 1.6t-1.6.6H2.2q-.9 0-1.5-.6T0 31.2V8.8q0-.9.7-1.6t1.5-.6h35.9q.9 0 1.6.6t.6 1.6z" }))),
        !props.textFirst && textEl));
};
IconCcMastercard.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCcMastercard;
//# sourceMappingURL=IconCcMastercard.js.map