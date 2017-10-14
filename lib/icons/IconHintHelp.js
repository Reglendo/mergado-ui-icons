import * as React from "react";
class IconHintHelp extends React.Component {
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
                    React.createElement("g", { id: "layer1", transform: "matrix(3.7795275,0,0,3.7795275,0,-1082.5197)", style: { "fillOpacity": 1 } },
                        "    ",
                        React.createElement("g", { id: "g151", transform: "matrix(0.02081203,0,0,0.02081203,0,286.41667)", style: { "fillOpacity": 1 } },
                            "      ",
                            React.createElement("g", { id: "g93", style: { "fillOpacity": 1 } },
                                "        ",
                                React.createElement("g", { id: "g91", style: { "fillOpacity": 1 } },
                                    "          ",
                                    React.createElement("g", { id: "g89", style: { "fillOpacity": 1 } },
                                        "            ",
                                        React.createElement("path", { id: "path87", d: "M 254.26,0 C 113.845,0 0,113.845 0,254.26 0,394.675 113.845,508.52 254.26,508.52 394.675,508.52 508.52,394.675 508.52,254.26 508.52,113.845 394.675,0 254.26,0 Z m 0,446.353 c -18.084,0 -32.736,-14.652 -32.736,-32.736 0,-18.052 14.652,-32.704 32.736,-32.704 18.052,0 32.704,14.652 32.704,32.704 0,18.084 -14.652,32.736 -32.704,32.736 z m 57.717,-156.306 c -13.349,7.342 -25.935,21.866 -25.935,27.778 0,17.544 -14.239,31.783 -31.782,31.783 -17.543,0 -31.782,-14.239 -31.782,-31.783 0,-40.364 36.995,-71.447 58.861,-83.461 32.164,-17.735 36.486,-37.058 36.486,-53.585 0,-46.688 -39.823,-53.649 -63.565,-53.649 -30.607,0 -63.565,20.087 -63.565,64.232 0,17.544 -14.239,31.782 -31.782,31.782 -17.543,0 -31.782,-14.239 -31.782,-31.782 0,-83.016 65.504,-127.797 127.13,-127.797 63.279,0 127.13,36.232 127.13,117.214 -0.001,47.133 -23.33,83.937 -69.414,109.268 z", style: { "fillOpacity": 1 } }),
                                        "          "),
                                    "        "),
                                "      "),
                            "      ",
                            React.createElement("g", { id: "g95", style: { "fillOpacity": 1 } },
                                "      ",
                                React.createElement("g", { id: "g97", style: { "fillOpacity": 1 } },
                                    "      ",
                                    React.createElement("g", { id: "g99", style: { "fillOpacity": 1 } },
                                        "      ",
                                        React.createElement("g", { id: "g101", style: { "fillOpacity": 1 } },
                                            "      ",
                                            React.createElement("g", { id: "g103", style: { "fillOpacity": 1 } },
                                                "      ",
                                                React.createElement("g", { id: "g105", style: { "fillOpacity": 1 } },
                                                    "      ",
                                                    React.createElement("g", { id: "g107", style: { "fillOpacity": 1 } },
                                                        "      ",
                                                        React.createElement("g", { id: "g109", style: { "fillOpacity": 1 } },
                                                            "      ",
                                                            React.createElement("g", { id: "g111", style: { "fillOpacity": 1 } },
                                                                "      ",
                                                                React.createElement("g", { id: "g113", style: { "fillOpacity": 1 } },
                                                                    "      ",
                                                                    React.createElement("g", { id: "g115", style: { "fillOpacity": 1 } },
                                                                        "      ",
                                                                        React.createElement("g", { id: "g117", style: { "fillOpacity": 1 } },
                                                                            "      ",
                                                                            React.createElement("g", { id: "g119", style: { "fillOpacity": 1 } },
                                                                                "      ",
                                                                                React.createElement("g", { id: "g121", style: { "fillOpacity": 1 } },
                                                                                    "      ",
                                                                                    React.createElement("g", { id: "g123", style: { "fillOpacity": 1 } }, "    "),
                                                                                    "  ")))))))))))))))))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconHintHelp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconHintHelp;
//# sourceMappingURL=IconHintHelp.js.map