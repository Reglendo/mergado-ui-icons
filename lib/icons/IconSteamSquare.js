import * as React from "react";
class IconSteamSquare extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--steam-square ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M30.7 14.4q0-1.7-1.2-3t-3.1-1.3-3.1 1.3-1.2 3q0 1.8 1.2 3.1t3.1 1.2 3.1-1.2 1.2-3.1zM17.1 27.6q0 1.8-1.3 3.1T12.7 32q-1.3 0-2.3-.7t-1.6-1.7q1.1.5 2.2.9 1.3.5 2.6 0t1.9-2q.6-1.3 0-2.6T13.6 24l-1.8-.7q.4-.2.9-.2 1.8 0 3.1 1.3t1.3 3.2zM37.3 9.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7v-3.4l3.8 1.5q.5 2.1 2.1 3.4t3.8 1.4q2.3 0 4-1.6t2-3.9l7.7-5.6q3.3 0 5.7-2.3t2.3-5.7q0-3.4-2.3-5.7t-5.7-2.4q-3.3 0-5.7 2.4t-2.4 5.6l-5 7.2h-.6q-1.7 0-3.1.8L3 19.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6zm-5.5 5.2q0 2.2-1.6 3.8t-3.8 1.6-3.8-1.6-1.6-3.8 1.6-3.8 3.8-1.6q2.2 0 3.8 1.6t1.6 3.8z" }))),
            !p.textFirst && textEl));
    }
}
IconSteamSquare.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSteamSquare;
//# sourceMappingURL=IconSteamSquare.js.map