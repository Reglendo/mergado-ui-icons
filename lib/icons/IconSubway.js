import * as React from "react";
class IconSubway extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--subway ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M27.3 0q4.1 0 7.1 2.1t2.9 5v20q0 2.9-2.8 5t-6.8 2.2l4.7 4.5q.4.3.2.8t-.7.4H8.4q-.5 0-.7-.4t.2-.8l4.7-4.5q-4-.2-6.8-2.2t-2.8-5v-20q0-2.9 2.9-5T13 0h14.3zM9.4 29.3q1.5 0 2.5-1.1t1.1-2.5-1.1-2.5-2.5-1.1-2.5 1.1-1 2.5 1 2.5 2.5 1.1zm9.3-12.2V5.7H6.6v11.4h12.1zm12.2 12.2q1.4 0 2.5-1.1t1-2.5-1-2.5-2.5-1.1-2.6 1.1-1 2.5 1 2.5 2.6 1.1zm3.5-12.2V5.7H21.6v11.4h12.8z" }))),
            !p.textFirst && textEl));
    }
}
IconSubway.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSubway;
//# sourceMappingURL=IconSubway.js.map