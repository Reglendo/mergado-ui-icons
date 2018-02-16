import * as React from "react";
class IconMoney extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--money ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M15.9 25.3h8v-2h-2.6V14h-2.4l-3.1 2.9 1.6 1.6q.9-.7 1.2-1.2v6h-2.7v2zM26.6 20q0 1.5-.5 2.9t-1.2 2.8-2.1 2.1-2.9.8-2.8-.8-2.1-2.1-1.3-2.8-.4-2.9.4-2.9 1.3-2.8 2.1-2.1 2.8-.8 2.9.8 2.1 2.1 1.2 2.8.5 2.9zm10.6 5.3V14.7q-2.2 0-3.7-1.6t-1.6-3.7H8q0 2.2-1.6 3.7t-3.7 1.6v10.6q2.2 0 3.7 1.6T8 30.6h23.9q0-2.2 1.6-3.7t3.7-1.6zM39.9 8v24q0 .5-.4.9t-1 .4H1.3q-.5 0-.9-.4T0 32V8q0-.5.4-.9t.9-.4h37.2q.6 0 1 .4t.4.9z" }))),
            !p.textFirst && textEl));
    }
}
IconMoney.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMoney;
//# sourceMappingURL=IconMoney.js.map