import * as React from "react";
class IconFeedimageeditor extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--feedimageeditor ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M5.748 0A5.748 5.748 0 0 0 0 5.748v28.504A5.748 5.748 0 0 0 5.748 40h28.504A5.748 5.748 0 0 0 40 34.252V5.748A5.748 5.748 0 0 0 34.252 0H5.748zm.25 8.611h28.004V31.39H5.998V8.61zm32.63 3.535z", fill: "#364b7b" }),
                    React.createElement("path", { d: "M30.43 21.134v6.718H9.57v-1.705a75.368 75.368 0 0 1-3.573.6v4.642h28.004V15.987a51.701 51.701 0 0 1-5.034 3.213l1.462 1.934z", fill: "#ededed" }),
                    React.createElement("path", { d: "M30.43 27.852v-6.718L28.968 19.2c-5.628 3.16-12.207 5.553-19.397 6.946v1.706H30.43z", fill: "#3f5b9b" }),
                    React.createElement("path", { d: "M5.998 8.611v18.136a74.162 74.162 0 0 0 3.573-.6v-5.013l6.126-8.16 5.35 7.358 5.118-4.847 2.803 3.714a51.701 51.701 0 0 0 5.034-3.213V8.611H5.998z", fill: "#fff" }),
                    React.createElement("path", { d: "M26.164 15.485l-5.117 4.846-5.35-7.357-6.126 8.16v5.013c7.19-1.393 13.769-3.787 19.398-6.947l-2.805-3.715z", fill: "#6181b7" }))),
            !p.textFirst && textEl));
    }
}
IconFeedimageeditor.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFeedimageeditor;
//# sourceMappingURL=IconFeedimageeditor.js.map