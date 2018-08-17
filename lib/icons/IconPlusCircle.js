import * as React from "react";
class IconPlusCircle extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--plus-circle ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M30.1 21.4v-2.8q0-.6-.4-1t-1-.5H23v-5.7q0-.6-.4-1t-1-.4h-2.9q-.6 0-1 .4t-.4 1v5.7h-5.7q-.6 0-1 .5t-.5 1v2.8q0 .6.5 1t1 .5h5.7v5.7q0 .5.4 1t1 .4h2.9q.6 0 1-.4t.4-1v-5.7h5.7q.6 0 1-.5t.4-1zm7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            !p.textFirst && textEl));
    }
}
IconPlusCircle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPlusCircle;
//# sourceMappingURL=IconPlusCircle.js.map