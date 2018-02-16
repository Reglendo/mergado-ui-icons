import * as React from "react";
class IconList extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--list ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M5.7 29.3v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zm0-8.6V25q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2T0 25v-4.3q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2H5q.3 0 .5.2t.2.5zM40 29.3v4.3q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h30q.3 0 .5.2t.2.5zM5.7 3.6v4.3q0 .2-.2.5t-.5.2H.7q-.3 0-.5-.2T0 7.9V3.6q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zM40 20.7V25q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h30q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h30q.3 0 .5.2t.2.5zm0-8.5v4.3q0 .2-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5V3.6q0-.3.2-.5t.5-.2h30q.3 0 .5.2t.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconList.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconList;
//# sourceMappingURL=IconList.js.map