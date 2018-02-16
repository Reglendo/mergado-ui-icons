import * as React from "react";
export const IconMapMarker = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--map-marker ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M25.6 14.3q0-2.4-1.6-4.1t-4.1-1.6-4 1.6-1.7 4.1 1.7 4 4 1.7 4.1-1.7 1.6-4zm5.8 0q0 2.4-.8 4l-8.1 17.3q-.4.7-1.1 1.1t-1.5.4-1.5-.4-1-1.1L9.2 18.3q-.7-1.6-.7-4 0-4.7 3.3-8.1t8.1-3.3T28 6.2t3.4 8.1z" }))),
        !props.textFirst && textEl));
};
IconMapMarker.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMapMarker;
//# sourceMappingURL=IconMapMarker.js.map