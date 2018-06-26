import * as React from "react";
class IconPlug extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--plug ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M39.2 10.1q.8.8.8 2t-.8 2.1l-9 8.9 3.4 3.3L30 30q-3.6 3.6-8.7 4.2t-9.2-2.3L4 40H0v-4l8.1-8.1q-2.8-4.1-2.3-9.2T10 10l3.6-3.6 3.3 3.4 8.9-9q.9-.8 2.1-.8t2 .8.8 2-.8 2.1L21 13.8l5.2 5.2 8.9-8.9q.9-.8 2.1-.8t2 .8z" }))),
            !p.textFirst && textEl));
    }
}
IconPlug.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconPlug;
//# sourceMappingURL=IconPlug.js.map