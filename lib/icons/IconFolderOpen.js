import * as React from "react";
class IconFolderOpen extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--folder-open ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M39.9 21.2q0 .6-.6 1.4L32.1 31q-.9 1.1-2.5 1.9t-3.1.7H3.4q-.7 0-1.3-.3t-.5-.9q0-.6.6-1.4l7.2-8.4q.9-1.1 2.5-1.8T15 20h23.1q.7 0 1.3.3t.5.9zm-7.2-7.3v3.4H15q-2 0-4.2 1t-3.5 2.5L0 29.4v-21q0-1.9 1.4-3.3t3.4-1.4h6.8q1.9 0 3.3 1.4t1.4 3.3v.7h11.6q1.9 0 3.4 1.4t1.4 3.4z" }))),
            !p.textFirst && textEl));
    }
}
IconFolderOpen.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFolderOpen;
//# sourceMappingURL=IconFolderOpen.js.map