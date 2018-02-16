import * as React from "react";
export const IconAssistiveListeningSystems = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--assistive-listening-systems ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M2.9 38.6q0 .5-.5 1t-1 .4-1-.4-.4-1 .4-1 1-.5 1 .5.5 1zm4.2-4.3q0 .6-.4 1t-1 .4-1-.4-.4-1 .4-1 1-.4 1 .4.4 1zm1-8.2l5.8 5.8-2 2-5.8-5.8zm7.6-.4q0 .6-.4 1t-1 .4-1-.4-.4-1 .4-1 1-.4 1 .4.4 1zm15.8-7.1q0 1.3-.3 2.4t-.8 2.1-1 1.5-1.2 1.4q-.7.8-1 1.2t-.7 1.1-.6 1.5-.2 1.6q0 3.6-2.5 6.1T17.1 40q-.5 0-1-.4t-.4-1 .4-1 1-.5q2.4 0 4.1-1.6t1.7-4.1q0-1.2.2-2.3t.8-2.1 1-1.4 1.2-1.4q.9-1.1 1.3-1.7t.8-1.6.4-2.3q0-4.2-2.9-7.1t-7.1-2.9-7 2.9-3 7.1q0 .6-.4 1t-1 .4-1-.4-.4-1q0-2.6 1-5t2.7-4.1 4.2-2.8 4.9-1 5 1 4.1 2.8 2.8 4.1 1 5zM20 21.4q0 .6-.4 1t-1 .5-1-.5-.5-1 .5-1 1-.4 1 .4.4 1zm6.4-2.8q0 .5-.4 1t-1 .4-1-.4-.4-1q0-2.1-1.5-3.6t-3.5-1.4q-2.1 0-3.6 1.4t-1.4 3.6q0 .6-.4 1t-1.1.4-1-.4-.4-1q0-3.3 2.3-5.6t5.6-2.3 5.5 2.3 2.3 5.6zm8.8-6.5q.2.6 0 1.1t-.8.8q-.2.1-.5.1-.4 0-.8-.3t-.5-.7q-1.5-3.9-5-6.5-.5-.4-.6-1t.3-1q.4-.5.9-.6t1.1.3q4.1 3 5.9 7.8zm4.7-1.8q.2.6 0 1.1t-.8.8q-.3.1-.5.1-1 0-1.4-1-2-5.3-6.6-8.7-.5-.4-.6-1t.3-1q.4-.5 1-.6t1 .3q5.2 3.9 7.6 10z" }))),
        !props.textFirst && textEl));
};
IconAssistiveListeningSystems.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconAssistiveListeningSystems;
//# sourceMappingURL=IconAssistiveListeningSystems.js.map