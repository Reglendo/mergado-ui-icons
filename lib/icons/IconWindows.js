import * as React from "react";
class IconWindows extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--windows ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M16.7 22.5V37L1.5 34.9V22.5h15.2zm0-16.6v14.7H1.5V8zm21.9 16.6V40l-20.2-2.8V22.5h20.2zm0-19.6v17.7H18.4v-15z" }))),
            !p.textFirst && textEl));
    }
}
IconWindows.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconWindows;
//# sourceMappingURL=IconWindows.js.map