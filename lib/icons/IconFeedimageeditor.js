import * as React from "react";
class IconFeedimageeditor extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M5.748 0A5.748 5.748 0 0 0 0 5.748v28.504A5.748 5.748 0 0 0 5.748 40h28.504A5.748 5.748 0 0 0 40 34.252V5.748A5.748 5.748 0 0 0 34.252 0H5.748zm.25 8.611h28.004V31.39H5.998V8.61zm32.63 3.535z", fill: "#364b7b" }),
                    React.createElement("path", { d: "M30.43 21.134v6.718H9.57v-1.705a75.368 75.368 0 0 1-3.573.6v4.642h28.004V15.987a51.701 51.701 0 0 1-5.034 3.213l1.462 1.934z", fill: "#ededed" }),
                    React.createElement("path", { d: "M30.43 27.852v-6.718L28.968 19.2c-5.628 3.16-12.207 5.553-19.397 6.946v1.706H30.43z", fill: "#3f5b9b" }),
                    React.createElement("path", { d: "M5.998 8.611v18.136a74.162 74.162 0 0 0 3.573-.6v-5.013l6.126-8.16 5.35 7.358 5.118-4.847 2.803 3.714a51.701 51.701 0 0 0 5.034-3.213V8.611H5.998z", fill: "#fff" }),
                    React.createElement("path", { d: "M26.164 15.485l-5.117 4.846-5.35-7.357-6.126 8.16v5.013c7.19-1.393 13.769-3.787 19.398-6.947l-2.805-3.715z", fill: "#6181b7" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFeedimageeditor.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40.000002 39.999999",
    color: 'currentColor',
    textFirst: false,
};
export default IconFeedimageeditor;
//# sourceMappingURL=IconFeedimageeditor.js.map