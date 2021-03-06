import * as React from "react";
class IconYoutubePlay extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--youtube-play ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M28.6 20q0-.8-.7-1.2l-11.4-7.1q-.7-.5-1.5-.1-.7.4-.7 1.3v14.2q0 .9.7 1.3.4.2.7.2.5 0 .8-.3l11.4-7.1q.7-.4.7-1.2zM40 20v3.3q0 1.2-.2 3.1t-.5 3.3q-.4 1.6-1.6 2.7T35 33.7q-5 .6-15 .6t-15-.6q-1.6-.2-2.8-1.3T.7 29.7q-.3-1.5-.5-3.3T0 23.3 0 20t0-3.3.2-3.1.5-3.3q.4-1.6 1.6-2.7T5 6.3q5-.6 15-.6t15 .6q1.6.2 2.8 1.3t1.5 2.7q.3 1.5.5 3.3t.2 3.1 0 3.3z" }))),
            !p.textFirst && textEl));
    }
}
IconYoutubePlay.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconYoutubePlay;
//# sourceMappingURL=IconYoutubePlay.js.map