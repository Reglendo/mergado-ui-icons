import * as React from "react";
class IconFolderOpenO extends React.Component {
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
                    React.createElement("path", { d: "M37 20.7q0-.7-1.1-.7H13.3q-.8 0-1.8.4T10 21.5l-6.1 7.6q-.3.5-.3.8 0 .7 1.1.7h22.5q.9 0 1.8-.4t1.5-1.1l6.1-7.6q.4-.4.4-.8zm-23.7-3.4h15.9V14q0-.8-.5-1.4t-1.5-.6H15.3q-.8 0-1.4-.6t-.6-1.4V8.7q0-.8-.6-1.4t-1.4-.6H4.7q-.9 0-1.5.6t-.5 1.4v17.7L8 19.9q.9-1.1 2.4-1.8t2.9-.8zm26.3 3.4q0 1.3-.9 2.5l-6.1 7.6q-.9 1.1-2.5 1.8t-2.9.7H4.7q-2 0-3.3-1.4T0 28.6V8.7q0-1.9 1.4-3.3t3.3-1.3h6.6q1.9 0 3.3 1.3t1.3 3.3v.7h11.3q2 0 3.3 1.3t1.4 3.3v3.3h4q1.1 0 2 .6t1.4 1.4q.3.7.3 1.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFolderOpenO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFolderOpenO;
//# sourceMappingURL=IconFolderOpenO.js.map