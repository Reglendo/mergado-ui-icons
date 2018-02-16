import * as React from "react";
export const IconFileCsv = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--file-csv ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M35.8 8.5c.4.4.733.967 1 1.7s.433 1.367.5 1.9v25.8c0 .533-.2 1.033-.6 1.5-.4.467-.933.667-1.6.6h-30c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5V2.1c0-.533.2-1.033.6-1.5.4-.467.9-.667 1.5-.6h20c.6 0 1.267.133 2 .4.733.267 1.3.633 1.7 1.1zM25.9 3v8.4h8.4c-.2-.4-.367-.7-.5-.9l-7-7c-.2-.133-.5-.3-.9-.5zm8.5 34.1V14.3h-9.3c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.933-.6-1.6V2.9H5.9v34.2z" }),
                React.createElement("path", { d: "M15.094 27.821v2.027q-.506-.347-1.02-.514-.506-.166-1.054-.166-1.041 0-1.624.61-.576.604-.576 1.693 0 1.09.576 1.7.583.604 1.624.604.582 0 1.103-.173.527-.174.971-.514v2.034q-.582.215-1.186.319-.597.11-1.2.11-2.103 0-3.29-1.075-1.187-1.082-1.187-3.005 0-1.922 1.187-2.997 1.187-1.083 3.29-1.083.61 0 1.2.111.597.104 1.186.32zm8.231 0v1.888q-.798-.333-1.541-.5-.743-.166-1.402-.166-.708 0-1.055.18-.34.174-.34.541 0 .299.257.458.264.16.937.236l.437.063q1.909.243 2.568.798t.659 1.741q0 1.243-.916 1.867-.916.625-2.734.625-.77 0-1.596-.125-.819-.118-1.686-.361v-1.888q.742.361 1.52.542.783.18 1.588.18.729 0 1.097-.201t.368-.597q0-.333-.257-.493-.25-.166-1.006-.256l-.438-.056q-1.658-.208-2.324-.77-.666-.562-.666-1.707 0-1.235.846-1.832.847-.597 2.596-.597.687 0 1.443.104t1.645.326zm1.415-.243h2.484l1.937 5.371 1.929-5.37h2.491l-3.06 7.772h-2.727l-3.054-7.773z" }))),
        !props.textFirst && textEl));
};
IconFileCsv.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFileCsv;
//# sourceMappingURL=IconFileCsv.js.map