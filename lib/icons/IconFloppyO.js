import * as React from "react";
class IconFloppyO extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--floppy-o ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M11.6 34.3h17.1v-8.6H11.6v8.6zm20 0h2.8v-20q0-.3-.2-.9t-.4-.7l-6.3-6.3q-.2-.2-.8-.5t-.8-.2V15q0 .9-.7 1.5t-1.5.6H10.9q-.9 0-1.6-.6T8.7 15V5.7H5.9v28.6h2.8V25q0-.9.6-1.5t1.6-.6h18.5q.9 0 1.5.6t.7 1.5v9.3zM23 13.6V6.4q0-.3-.2-.5t-.5-.2H18q-.3 0-.5.2t-.2.5v7.2q0 .3.2.5t.5.2h4.3q.3 0 .5-.2t.2-.5zm14.3.7V35q0 .9-.6 1.5t-1.6.6h-30q-.8 0-1.5-.6T3 35V5q0-.9.6-1.5t1.5-.6h20.8q.9 0 1.9.4t1.7 1.1l6.3 6.2q.6.6 1 1.7t.5 2z" }))),
            !p.textFirst && textEl));
    }
}
IconFloppyO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFloppyO;
//# sourceMappingURL=IconFloppyO.js.map