import * as React from "react";
class IconBadgeThird extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--badge-third ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M34.539 18.667A14.576 14.576 0 0 0 21.333 5.47V0h-2.666v5.47A14.576 14.576 0 0 0 5.46 18.667H0v2.666h5.46a14.583 14.583 0 0 0 13.207 13.198V40h2.666v-5.469A14.583 14.583 0 0 0 34.54 21.333H40v-2.666h-5.461zM20 32c-6.625 0-12-5.375-12-12 0-6.626 5.375-12 12-12 6.628 0 12 5.374 12 12 0 6.625-5.372 12-12 12z" }),
                    React.createElement("path", { d: "M24.406 16.16q0 1.304-.79 2.218-.79.913-2.217 1.256v.057q1.684.21 2.55 1.027.866.81.866 2.189 0 2.008-1.456 3.13-1.456 1.114-4.158 1.114-2.265 0-4.016-.752v-2.502q.81.409 1.78.666.97.256 1.922.256 1.456 0 2.15-.494.695-.495.695-1.59 0-.98-.8-1.389-.799-.409-2.55-.409h-1.056v-2.255h1.075q1.618 0 2.36-.418.752-.429.752-1.456 0-1.58-1.98-1.58-.684 0-1.398.229-.704.228-1.57.79l-1.36-2.027q1.902-1.37 4.538-1.37 2.16 0 3.407.875 1.256.875 1.256 2.436z", "word-spacing": "0" }))),
            !p.textFirst && textEl));
    }
}
IconBadgeThird.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBadgeThird;
//# sourceMappingURL=IconBadgeThird.js.map