import * as React from "react";
export const IconDigg = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--digg ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M6.4 8.1h3.9v19.1H0V13.6h6.4V8.1zm0 15.9v-7.2H4V24h2.4zm5.5-10.4v13.6h4V13.6h-4zm0-5.5V12h4V8.1h-4zm5.6 5.5h10.3v18.3H17.5v-3.1h6.4v-1.6h-6.4V13.6zM23.9 24v-7.2h-2.4V24h2.4zm5.5-10.4h10.4v18.3H29.4v-3.1h6.4v-1.6h-6.4V13.6zM35.8 24v-7.2h-2.4V24h2.4z" }))),
        !props.textFirst && textEl));
};
IconDigg.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconDigg;
//# sourceMappingURL=IconDigg.js.map