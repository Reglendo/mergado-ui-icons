import * as React from "react";
class IconFilePowerpointO extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--file-powerpoint-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5zm-22.1-5.2v2.4h7.3v-2.4h-2.1v-3.7h3.1q1.7 0 2.6-.3 1.5-.6 2.4-2t.9-3.2q0-1.9-.9-3.2t-2.2-1.9q-1.1-.5-2.9-.5h-8.2v2.4h2v12.4h-2zm7.9-6.2h-2.7v-6h2.7q1.1 0 1.8.4 1.3.7 1.3 2.6 0 1.9-1.4 2.6-.7.4-1.7.4z" }))),
            !p.textFirst && textEl));
    }
}
IconFilePowerpointO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFilePowerpointO;
//# sourceMappingURL=IconFilePowerpointO.js.map