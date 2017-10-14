import * as React from "react";
class IconHintInfo extends React.Component {
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
                    React.createElement("path", { d: "M40 20C40 8.954 31.046 0 20 0S0 8.954 0 20s8.954 20 20 20 20-8.954 20-20z" }),
                    React.createElement("path", { d: "M25.415 28.987a.403.403 0 0 0-.505-.137c-1.982.938-4.231 1.93-4.673 2.017a.39.39 0 0 1-.052-.06.528.528 0 0 1-.089-.323c0-1.121.846-4.532 2.515-10.136 1.407-4.709 1.57-5.684 1.57-6.007 0-.5-.192-.922-.554-1.221-.344-.284-.825-.428-1.428-.428-1.005 0-2.169.382-3.56 1.166-1.347.76-2.85 2.049-4.465 3.829a.403.403 0 0 0 .45.644c.568-.232 3.419-1.4 3.834-1.66.34-.214.635-.322.876-.322h.022a.41.41 0 0 1 .006.076c0 .245-.05.536-.15.863-2.43 7.871-3.61 12.697-3.61 14.753 0 .725.201 1.31.599 1.735.405.435.951.655 1.624.655.717 0 1.59-.299 2.667-.915 1.043-.596 2.635-1.907 4.866-4.008a.403.403 0 0 0 .057-.52zm-.078-22.806c-.397-.406-.905-.612-1.51-.612-.753 0-1.408.297-1.949.884-.531.577-.8 1.286-.8 2.105 0 .648.198 1.185.59 1.595a1.98 1.98 0 0 0 1.489.629c.722 0 1.374-.314 1.938-.934a3.078 3.078 0 0 0 .836-2.128c0-.617-.2-1.135-.594-1.539z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconHintInfo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconHintInfo;
//# sourceMappingURL=IconHintInfo.js.map