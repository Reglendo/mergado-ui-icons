import * as React from "react";
class IconFilm extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--film ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M8 34.6V32q0-.6-.4-1t-1-.4H4q-.6 0-.9.4t-.4 1v2.6q0 .6.4 1t.9.3h2.6q.6 0 1-.3t.4-1zm0-8V24q0-.6-.4-.9t-1-.4H4q-.6 0-.9.4t-.4.9v2.6q0 .6.4 1t.9.4h2.6q.6 0 1-.4t.4-1zm0-7.9V16q0-.5-.4-.9t-1-.4H4q-.6 0-.9.4t-.4.9v2.7q0 .5.4.9t.9.4h2.6q.6 0 1-.4t.4-.9zm21.2 15.9V24q0-.6-.4-.9t-.9-.4H12q-.6 0-1 .4t-.4.9v10.6q0 .6.4 1t1 .3h15.9q.5 0 .9-.3t.4-1zM8 10.7V8q0-.5-.4-.9t-1-.4H4q-.6 0-.9.4t-.4.9v2.7q0 .5.4.9t.9.4h2.6q.6 0 1-.4t.4-.9zm29.2 23.9V32q0-.6-.4-1t-.9-.4h-2.7q-.5 0-.9.4t-.4 1v2.6q0 .6.4 1t.9.3h2.7q.5 0 .9-.3t.4-1zm-8-15.9V8q0-.5-.4-.9t-.9-.4H12q-.6 0-1 .4t-.4.9v10.7q0 .5.4.9t1 .4h15.9q.5 0 .9-.4t.4-.9zm8 7.9V24q0-.6-.4-.9t-.9-.4h-2.7q-.5 0-.9.4t-.4.9v2.6q0 .6.4 1t.9.4h2.7q.5 0 .9-.4t.4-1zm0-7.9V16q0-.5-.4-.9t-.9-.4h-2.7q-.5 0-.9.4t-.4.9v2.7q0 .5.4.9t.9.4h2.7q.5 0 .9-.4t.4-.9zm0-8V8q0-.5-.4-.9t-.9-.4h-2.7q-.5 0-.9.4t-.4.9v2.7q0 .5.4.9t.9.4h2.7q.5 0 .9-.4t.4-.9zm2.7-3.3v27.9q0 1.4-1 2.3t-2.4 1H3.3q-1.3 0-2.3-1t-1-2.3V7.4Q0 6 1 5t2.3-.9h33.2q1.4 0 2.4.9t1 2.4z" }))),
            !p.textFirst && textEl));
    }
}
IconFilm.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFilm;
//# sourceMappingURL=IconFilm.js.map