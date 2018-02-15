import * as React from "react";
export const IconFlipVertical = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--flip-vertical ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { style: { "lineHeight": "normal", "fontVariantLigatures": "normal", "fontVariantPosition": "normal", "fontVariantCaps": "normal", "fontVariantNumeric": "normal", "fontVariantAlternates": "normal", "fontFeatureSettings": "normal", "textIndent": 0, "textAlign": "start", "textDecorationLine": "none", "textDecorationStyle": "solid", "textDecorationColor": "#000", "textTransform": "none", "textOrientation": "mixed", "shapePadding": 0, "isolation": "auto", "mixBlendMode": "normal" }, d: "M33.851 1.965l-1.047.637L5.71 19.098h28.141zm-1.377 2.45V17.72H10.617zM5.71 20.961l2.565 1.563 25.576 15.57V20.96z", color: "#000", "font-weight": "400", "font-family": "sans-serif", "white-space": "normal", overflow: "visible", "fill-rule": "evenodd" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconFlipVertical.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconFlipVertical.js.map