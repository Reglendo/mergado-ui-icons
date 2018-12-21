import * as React from "react";
class IconFlipVertical extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--flip-vertical ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M33.851 1.965l-1.047.637L5.71 19.098h28.141zm-1.377 2.45V17.72H10.617zM5.71 20.961l2.565 1.563 25.576 15.57V20.96z", color: "#000" }))),
            !p.textFirst && textEl));
    }
}
IconFlipVertical.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFlipVertical;
//# sourceMappingURL=IconFlipVertical.js.map