import * as React from "react";
export const IconFileMovieO = props => {
    const name = "muk-icon";
    const textEl = props.text ? React.createElement("span", { className: `muk-icon__text` }, props.text) : false;
    const className = `muk-icon ${name}--file-movie-o ${props.addClass} ${props.className}`;
    return (React.createElement("span", { className: className, style: props.style, title: props.title },
        props.textFirst && textEl,
        React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: props.color, stroke: props.color, strokeWidth: 0, height: props.size, width: props.size, viewBox: props.viewBox },
            React.createElement("g", null,
                React.createElement("path", { d: "M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5zm-14.3-20q1.2 0 2.1.9t.8 2v8.6q0 1.1-.8 2t-2.1.8h-8.5q-1.2 0-2-.8t-.9-2V20q0-1.2.9-2t2-.9h8.5zm11 .1q.5.2.5.7v12.8q0 .5-.5.7h-.2q-.4 0-.6-.2l-5.9-5.9v-2l5.9-6q.2-.2.6-.2l.2.1z" }))),
        !props.textFirst && textEl));
};
IconFileMovieO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFileMovieO;
//# sourceMappingURL=IconFileMovieO.js.map