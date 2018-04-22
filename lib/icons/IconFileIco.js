import * as React from "react";
import shallowCompare from "shallow-compare";
class IconFileIco extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return shallowCompare(this, this.props, nextProps); }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon m--file-ico ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M35.8 8.5c.4.4.733.967 1 1.7s.433 1.367.5 1.9v25.8c0 .533-.2 1.033-.6 1.5-.4.467-.933.667-1.6.6h-30c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5V2.1c0-.533.2-1.033.6-1.5.4-.467.9-.667 1.5-.6h20c.6 0 1.267.133 2 .4.733.267 1.3.633 1.7 1.1zM25.9 3v8.4h8.4c-.2-.4-.367-.7-.5-.9l-7-7c-.2-.133-.5-.3-.9-.5zm8.5 34.1V14.3h-9.3c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.933-.6-1.6V2.9H5.9v34.2z" }),
                    React.createElement("path", { d: "M8.757 26.37h2.861v8.95h-2.86v-8.95zm0-3.485h2.861v2.333h-2.86v-2.333zm12.859 3.764v2.333q-.583-.4-1.175-.59-.583-.193-1.215-.193-1.198 0-1.87.704-.663.695-.663 1.95 0 1.254.663 1.958.672.695 1.87.695.672 0 1.271-.2.608-.2 1.119-.591v2.341q-.671.248-1.367.368-.687.128-1.382.128-2.422 0-3.788-1.239-1.367-1.247-1.367-3.46 0-2.214 1.367-3.453 1.366-1.247 3.788-1.247.703 0 1.382.128.688.12 1.367.368zm6.745 1.551q-.95 0-1.454.687-.496.679-.496 1.966 0 1.286.496 1.974.503.679 1.454.679.935 0 1.43-.68.496-.687.496-1.973 0-1.287-.495-1.966-.496-.688-1.43-.688zm0-2.047q2.31 0 3.604 1.247 1.303 1.247 1.303 3.453 0 2.205-1.303 3.452-1.294 1.247-3.604 1.247-2.318 0-3.628-1.247-1.303-1.247-1.303-3.452 0-2.206 1.303-3.453 1.31-1.247 3.628-1.247z", style: { "lineHeight": "125%", "textAlign": "end" }, "font-weight": "400", "font-size": "58.922", "font-family": "sans-serif", "letter-spacing": "0", "word-spacing": "0", "text-anchor": "end" }))),
            !p.textFirst && textEl));
    }
}
IconFileIco.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFileIco;
//# sourceMappingURL=IconFileIco.js.map