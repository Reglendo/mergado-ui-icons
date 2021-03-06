import * as React from "react";
class IconBadgePno extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--badge-pno ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M34.539 18.667A14.576 14.576 0 0 0 21.333 5.47V0h-2.666v5.47A14.576 14.576 0 0 0 5.46 18.667H0v2.666h5.46a14.583 14.583 0 0 0 13.207 13.198V40h2.666v-5.469A14.583 14.583 0 0 0 34.54 21.333H40v-2.666h-5.461zM20 32c-6.625 0-12-5.375-12-12 0-6.626 5.375-12 12-12 6.628 0 12 5.374 12 12 0 6.625-5.372 12-12 12z" }),
                    React.createElement("path", { d: "M14.22 17.226q0 1.209.209 1.808.219.59.694.59.914 0 .914-2.398 0-2.378-.914-2.378-.475 0-.694.59-.21.58-.21 1.788zm4.215-.019q0 2.189-.847 3.293-.847 1.094-2.484 1.094-1.57 0-2.426-1.123-.856-1.132-.856-3.264 0-4.348 3.282-4.348 1.609 0 2.465 1.132.866 1.123.866 3.216zm6.546-4.148L17.264 26.97h-2.283l7.717-13.911h2.283zm-1.018 9.724q0 1.209.21 1.808.218.59.694.59.913 0 .913-2.398 0-2.379-.913-2.379-.476 0-.695.59-.209.58-.209 1.79zm4.215-.019q0 2.18-.847 3.283-.846 1.094-2.483 1.094-1.57 0-2.426-1.123-.857-1.132-.857-3.254 0-4.348 3.283-4.348 1.608 0 2.464 1.132.866 1.123.866 3.216z" }))),
            !p.textFirst && textEl));
    }
}
IconBadgePno.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBadgePno;
//# sourceMappingURL=IconBadgePno.js.map