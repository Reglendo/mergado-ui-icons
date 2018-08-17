import * as React from "react";
class IconTarget2 extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--target-2 ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("g", { "aria-label": "2", id: "text5116-35" },
                        "    ",
                        React.createElement("path", { d: "m 18.96659,24.431821 h 6.415965 v 2.76365 h -10.59562 v -2.76365 l 5.322224,-4.697229 q 0.712885,-0.644527 1.054679,-1.259756 0.341794,-0.61523 0.341794,-1.279287 0,-1.025383 -0.693354,-1.650378 -0.683588,-0.624995 -1.826157,-0.624995 -0.8789,0 -1.923813,0.380857 -1.044914,0.37109 -2.236311,1.113272 v -3.2031 q 1.269521,-0.419918 2.509746,-0.63476 1.240225,-0.224608 2.431622,-0.224608 2.617167,0 4.062468,1.152335 1.455067,1.152334 1.455067,3.212865 0,1.191397 -0.61523,2.226545 -0.615229,1.025383 -2.58787,2.753885 z", id: "path6347" }),
                        "  "),
                    "  ",
                    React.createElement("path", { d: "M34.539 18.667A14.576 14.576 0 0 0 21.333 5.47V0h-2.666v5.47A14.576 14.576 0 0 0 5.46 18.667H0v2.666h5.46a14.583 14.583 0 0 0 13.207 13.198V40h2.666v-5.469A14.583 14.583 0 0 0 34.54 21.333H40v-2.666h-5.461zM20 32c-6.625 0-12-5.375-12-12 0-6.626 5.375-12 12-12 6.628 0 12 5.374 12 12 0 6.625-5.372 12-12 12z", id: "path4559" }))),
            !p.textFirst && textEl));
    }
}
IconTarget2.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTarget2;
//# sourceMappingURL=IconTarget2.js.map