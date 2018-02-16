import * as React from "react";
class IconPauseCircle extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--pause-circle ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M18.7 26.4V13.6q0-.3-.2-.5t-.5-.2h-5.7q-.3 0-.5.2t-.2.5v12.8q0 .3.2.5t.5.2H18q.3 0 .5-.2t.2-.5zm10 0V13.6q0-.3-.2-.5t-.5-.2h-5.7q-.3 0-.5.2t-.2.5v12.8q0 .3.2.5t.5.2H28q.3 0 .5-.2t.2-.5zm8.6-6.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconPauseCircle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPauseCircle;
//# sourceMappingURL=IconPauseCircle.js.map