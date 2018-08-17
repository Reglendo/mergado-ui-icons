import * as React from "react";
class IconFacebookOfficial extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--facebook-official ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M35.4 2.9q.8 0 1.3.5t.6 1.4v30.4q0 .8-.6 1.4t-1.3.5h-8.7V23.9h4.4l.7-5.2h-5.1v-3.3q0-1.3.5-1.9t2-.6h2.7V8.2Q30.5 8 28 8q-3.1 0-4.9 1.8t-1.8 5.1v3.8h-4.5v5.2h4.5v13.2H4.9q-.8 0-1.3-.5T3 35.2V4.8q0-.8.6-1.4t1.3-.5h30.5z" }))),
            !p.textFirst && textEl));
    }
}
IconFacebookOfficial.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFacebookOfficial;
//# sourceMappingURL=IconFacebookOfficial.js.map