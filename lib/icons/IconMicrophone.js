import * as React from "react";
class IconMicrophone extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--microphone ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M32.7 15.7v2.9q0 4.9-3.3 8.6t-8.1 4.1v3H27q.6 0 1 .4t.4 1-.4 1-1 .4H12.7q-.6 0-1-.4t-.4-1 .4-1 1-.4h5.7v-3q-4.8-.5-8.1-4.1T7 18.6v-2.9q0-.6.4-1t1-.4 1 .4.5 1v2.9q0 4.1 2.9 7t7.1 3 7-3 3-7v-2.9q0-.6.4-1t1-.4 1 .4.4 1zM27 7.1v11.5q0 2.9-2.1 5t-5 2.1-5.1-2.1-2.1-5V7.1q0-2.9 2.1-5T19.9 0t5 2.1 2.1 5z" }))),
            !p.textFirst && textEl));
    }
}
IconMicrophone.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMicrophone;
//# sourceMappingURL=IconMicrophone.js.map