import * as React from "react";
class IconBadgeFirst extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M34.539 18.667A14.576 14.576 0 0 0 21.333 5.47V0h-2.666v5.47A14.576 14.576 0 0 0 5.46 18.667H0v2.666h5.46a14.583 14.583 0 0 0 13.207 13.198V40h2.666v-5.469A14.583 14.583 0 0 0 34.54 21.333H40v-2.666h-5.461zM20 32c-6.625 0-12-5.375-12-12 0-6.626 5.375-12 12-12 6.628 0 12 5.374 12 12 0 6.625-5.372 12-12 12z" }),
                    React.createElement("path", { d: "M22.284 26.886h-2.94v-8.05l.028-1.322.048-1.446q-.733.732-1.018.96l-1.599 1.285-1.418-1.77 4.482-3.568h2.417v13.911z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBadgeFirst.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 39.999997 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBadgeFirst;
//# sourceMappingURL=IconBadgeFirst.js.map