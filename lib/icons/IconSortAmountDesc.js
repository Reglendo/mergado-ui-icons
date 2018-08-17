import * as React from "react";
class IconSortAmountDesc extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--sort-amount-desc ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M26.5 34.6v4.2q0 .3-.2.5t-.5.2h-5.6q-.3 0-.5-.2t-.2-.5v-4.2q0-.3.2-.5t.5-.2h5.6q.3 0 .5.2t.2.5zM16 31.8q0 .3-.2.6l-6.9 6.9q-.3.2-.5.2-.3 0-.5-.2l-7-7q-.3-.3-.2-.7.2-.4.7-.4h4.2v-30q0-.3.2-.5t.5-.2h4.2q.3 0 .5.2t.2.5v30h4.1q.3 0 .5.1t.2.5zm14.7-8.3v4.2q0 .3-.2.5t-.5.2h-9.8q-.3 0-.5-.2t-.2-.5v-4.2q0-.3.2-.5t.5-.2H30q.3 0 .5.2t.2.5zm4.1-11.2v4.2q0 .3-.2.5t-.5.2H20.2q-.3 0-.5-.2t-.2-.5v-4.2q0-.3.2-.5t.5-.2h13.9q.4 0 .5.2t.2.5zM39 1.2v4.2q0 .3-.2.5t-.5.2H20.2q-.3 0-.5-.2t-.2-.5V1.2q0-.3.2-.5t.5-.2h18.1q.3 0 .5.2t.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconSortAmountDesc.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSortAmountDesc;
//# sourceMappingURL=IconSortAmountDesc.js.map