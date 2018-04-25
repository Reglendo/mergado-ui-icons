import * as React from "react";
class IconSoundcloud extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--soundcloud ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M13.7 28.3l.3-4.2-.3-9.1q0-.2-.1-.3t-.3-.2q-.2 0-.3.2t-.1.3l-.2 9.1.2 4.2q0 .2.1.3t.3.1q.4 0 .4-.4zm5.2-.5l.2-3.7-.2-10.2q0-.3-.2-.4-.2-.1-.3-.1t-.3.1q-.2.1-.2.4v.1l-.2 10.1.2 4.1v.1q0 .1.1.3.1.2.4.2.2 0 .3-.2.2-.1.2-.4zM.6 21.9l.4 2.2-.4 2.2q0 .2-.1.2t-.2-.2L0 24.1l.3-2.2q0-.2.2-.2t.1.2zm1.5-1.4l.5 3.6-.5 3.6q0 .1-.2.1-.1 0-.1-.1l-.4-3.6.4-3.6q0-.2.1-.2.2 0 .2.2zm1.6-.7l.5 4.3-.5 4.2q0 .2-.2.2-.1 0-.2-.2L3 24.1l.3-4.3q.1-.2.2-.2.2 0 .2.2zm1.7-.1l.4 4.4-.4 4.3q-.1.2-.3.2-.2 0-.2-.2l-.4-4.3.4-4.4q0-.2.2-.2t.3.2zM7 20l.4 4.1-.4 4.3q0 .3-.3.3-.1 0-.1-.1t-.1-.2l-.4-4.3.4-4.1q0-.1.1-.2t.1 0q.3 0 .3.2zm1.7-2.5l.3 6.6-.3 4.3q0 .1-.1.2t-.2.1q-.3 0-.3-.3l-.4-4.3.4-6.6q0-.4.3-.4.1 0 .2.1t.1.3zm1.6-1.5l.3 8.1-.3 4.3q0 .2-.1.3t-.2.1q-.3 0-.4-.4l-.2-4.3.2-8.1q.1-.4.4-.4.1 0 .2.1t.1.3zm1.7-.7l.3 8.8-.3 4.3q0 .3-.4.3-.3 0-.3-.3l-.3-4.3.3-8.8q0-.2.1-.3t.2-.1q.2 0 .3.1t.1.3zm6.9 12.9zm-3.5-13l.3 8.9-.3 4.2q0 .2-.1.3t-.3.1-.3-.1-.2-.3l-.2-4.2.2-8.9q0-.2.2-.3t.3-.2.3.2.1.3zm1.8.3l.2 8.6-.2 4.2q0 .2-.2.3t-.3.1-.3-.1-.2-.3l-.2-4.2.2-8.6q0-.2.2-.3t.3-.2.3.2.2.3zm3.7 8.6l-.3 4.1q0 .2-.1.4t-.4.1-.4-.1-.2-.4l-.1-2-.1-2.1.2-11.1v-.1l.2-.4q.2-.1.4-.1.1 0 .2.1.3.1.3.4zm19.4-.3q0 2-1.4 3.5t-3.5 1.4H21.6q-.2 0-.4-.2t-.1-.3V12.4q0-.4.5-.6 1.5-.6 3.1-.6 3.5 0 6 2.3t2.8 5.7q.9-.4 1.9-.4 2 0 3.5 1.5t1.4 3.5z" }))),
            !p.textFirst && textEl));
    }
}
IconSoundcloud.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSoundcloud;
//# sourceMappingURL=IconSoundcloud.js.map