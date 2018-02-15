import * as React from "react";
export const IconFileExcelO = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--file-excel-o ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.text && props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text),
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5zm-21.8-5.2v2.4h6.2v-2.4h-1.6l2.3-3.6q.1-.1.2-.3t.2-.3 0-.1h.1q0 .1.1.2 0 .1.1.2t.1.1.2.2l2.4 3.6h-1.7v2.4h6.5v-2.4h-1.6l-4.2-6.1 4.3-6.3h1.5v-2.4h-6.2v2.4h1.6l-2.3 3.6q-.1.1-.2.3t-.2.3v.1h-.1q0-.1-.1-.2-.1-.3-.4-.5l-2.3-3.6h1.7v-2.4h-6.5v2.4h1.5l4.2 6.1-4.3 6.3h-1.5z" }))),
        props.text && !props.textFirst &&
            React.createElement("span", { className: `muk-icon__text` }, props.text)));
};
IconFileExcelO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
//# sourceMappingURL=IconFileExcelO.js.map