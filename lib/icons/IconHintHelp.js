import * as React from "react";
class IconHintHelp extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--hint-help ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M20 0C8.955 0 0 8.955 0 20s8.955 20 20 20 20-8.955 20-20S31.045 0 20 0zm0 35.11a2.575 2.575 0 1 1 0-5.15 2.575 2.575 0 0 1 0 5.15zm4.54-12.295c-1.05.577-2.04 1.72-2.04 2.185a2.501 2.501 0 0 1-5 0c0-3.175 2.91-5.62 4.63-6.565C24.66 17.04 25 15.52 25 14.22c0-3.672-3.132-4.22-5-4.22-2.408 0-5 1.58-5 5.052a2.5 2.5 0 0 1-5 0C10 8.522 15.153 5 20 5c4.978 0 10 2.85 10 9.22 0 3.707-1.835 6.602-5.46 8.595z" }))),
            !p.textFirst && textEl));
    }
}
IconHintHelp.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHintHelp;
//# sourceMappingURL=IconHintHelp.js.map