import * as React from "react";
class IconTrash extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--trash ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M15.9 30.7V15q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5v15.7q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm5.7 0V15q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5v15.7q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm5.8 0V15q0-.3-.2-.5t-.6-.2h-1.4q-.3 0-.5.2t-.2.5v15.7q0 .3.2.5t.5.2h1.4q.4 0 .6-.2t.2-.5zM15.2 8.6h10L24.1 6q-.1-.2-.3-.3h-7.1q-.2.1-.4.3zm20.7.7v1.4q0 .3-.2.5t-.5.2h-2.1v21.2q0 1.8-1.1 3.2t-2.5 1.3H10.9q-1.4 0-2.5-1.3t-1-3.1V11.4H5.2q-.3 0-.5-.2t-.2-.5V9.3q0-.3.2-.5t.5-.2h6.9l1.6-3.8q.3-.8 1.2-1.4t1.7-.5h7.2q.9 0 1.8.5t1.2 1.4l1.5 3.8h6.9q.3 0 .5.2t.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconTrash.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTrash;
//# sourceMappingURL=IconTrash.js.map