import * as React from "react";
class IconFlipHorizontal extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--flip-horizontal ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M38.064 34.07l-.636-1.047L20.932 5.93v28.14zm-2.449-1.377H22.31V10.836zM19.068 5.93l-1.562 2.564L1.936 34.07h17.132z", color: "#000" }))),
            !p.textFirst && textEl));
    }
}
IconFlipHorizontal.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFlipHorizontal;
//# sourceMappingURL=IconFlipHorizontal.js.map