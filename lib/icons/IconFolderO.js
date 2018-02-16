import * as React from "react";
export const IconFolderO = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--folder-o ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M35.8 29.3V13.6q0-.9-.6-1.5t-1.6-.7H17.9q-.9 0-1.5-.6t-.6-1.5V7.9q0-.9-.6-1.6t-1.6-.6H6.5q-.9 0-1.5.6t-.6 1.6v21.4q0 .9.6 1.5t1.5.6h27.1q.9 0 1.6-.6t.6-1.5zm2.8-15.7v15.7q0 2-1.4 3.5t-3.6 1.5H6.5q-2.1 0-3.5-1.5t-1.5-3.5V7.9q0-2.1 1.5-3.6t3.5-1.4h7.1q2.1 0 3.6 1.4t1.4 3.6v.7h15q2.1 0 3.6 1.4t1.4 3.6z" }))),
        !props.textFirst && textEl));
};
IconFolderO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFolderO;
//# sourceMappingURL=IconFolderO.js.map