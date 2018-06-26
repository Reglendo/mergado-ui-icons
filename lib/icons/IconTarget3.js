import * as React from "react";
class IconTarget3 extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--target-3 ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("g", { "aria-label": "3", id: "text5116-3" },
                        "    ",
                        React.createElement("path", { d: "m 22.654823,19.41895 q 1.474598,0.380856 2.236311,1.328114 0.771478,0.937493 0.771478,2.39256 0,2.167951 -1.660143,3.300755 -1.660144,1.123038 -4.843712,1.123038 -1.123039,0 -2.255842,-0.185545 -1.123038,-0.17578 -2.226545,-0.537105 v -2.900368 q 1.054679,0.527339 2.089827,0.800775 1.044914,0.263669 2.050765,0.263669 1.494129,0 2.285139,-0.517574 0.800775,-0.517574 0.800775,-1.484363 0,-0.996086 -0.820306,-1.503895 -0.810541,-0.517574 -2.402325,-0.517574 H 17.17635 v -2.421856 h 1.582019 q 1.416005,0 2.109359,-0.439449 0.693353,-0.449216 0.693353,-1.357412 0,-0.839837 -0.673822,-1.298818 -0.673823,-0.45898 -1.904282,-0.45898 -0.908196,0 -1.835924,0.205076 -0.927727,0.205077 -1.845688,0.605464 v -2.753885 q 1.113272,-0.312497 2.207014,-0.468746 1.093741,-0.156249 2.14842,-0.156249 2.841775,0 4.248014,0.937493 1.416005,0.927727 1.416005,2.802712 0,1.279287 -0.673823,2.099593 -0.673823,0.810541 -1.992172,1.14257 z", id: "path5790" }),
                        "  "),
                    "  ",
                    React.createElement("path", { d: "M34.539 18.667A14.576 14.576 0 0 0 21.333 5.47V0h-2.666v5.47A14.576 14.576 0 0 0 5.46 18.667H0v2.666h5.46a14.583 14.583 0 0 0 13.207 13.198V40h2.666v-5.469A14.583 14.583 0 0 0 34.54 21.333H40v-2.666h-5.461zM20 32c-6.625 0-12-5.375-12-12 0-6.626 5.375-12 12-12 6.628 0 12 5.374 12 12 0 6.625-5.372 12-12 12z", id: "path4559" }))),
            !p.textFirst && textEl));
    }
}
IconTarget3.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTarget3;
//# sourceMappingURL=IconTarget3.js.map