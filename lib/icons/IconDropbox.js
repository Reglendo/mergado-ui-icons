import * as React from "react";
class IconDropbox extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--dropbox ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M9 15.8l11 6.8-7.6 6.3-11-7.1zm22 12.4v2.4l-11 6.5-10.9-6.5v-2.4l3.3 2.1L20 24v-.1.1l7.7 6.3zM12.4 2.6L20 9 9 15.8l-7.6-6zM31 15.8l7.6 6L27.7 29 20 22.6zM27.7 2.6l10.9 7.2-7.6 6L20 9z" }))),
            !p.textFirst && textEl));
    }
}
IconDropbox.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconDropbox;
//# sourceMappingURL=IconDropbox.js.map