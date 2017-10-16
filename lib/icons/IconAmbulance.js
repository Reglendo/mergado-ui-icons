import * as React from "react";
class IconAmbulance extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--ambulance ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M13 30.4q0-1.1-.8-1.8t-1.8-.8-1.8.8-.8 1.8.8 1.8 1.8.8 1.8-.8.8-1.8zM5.2 20H13v-5.2H9.8q-.3 0-.5.2l-3.9 3.9q-.2.3-.2.5v.6zm26 10.4q0-1.1-.8-1.8t-1.8-.8-1.9.8-.7 1.8.7 1.8 1.9.8 1.8-.8.8-1.8zm2.6-13.6v-3.9q0-.3-.2-.5t-.5-.2h-4.5V7.7q0-.3-.2-.5t-.5-.2H24q-.3 0-.4.2t-.2.5v4.5h-4.6q-.3 0-.4.2t-.2.5v3.9q0 .2.2.4t.4.2h4.6v4.5q0 .3.2.5t.4.2h3.9q.3 0 .5-.2t.2-.5v-4.5h4.5q.3 0 .5-.2t.2-.4zM39 5.7v23.4q0 .5-.4.9t-.9.4h-3.9q0 2.1-1.6 3.7t-3.6 1.5-3.7-1.5-1.5-3.7h-7.8q0 2.1-1.5 3.7t-3.7 1.5-3.7-1.5-1.5-3.7H2.6q-.5 0-.9-.4t-.4-.9.4-.9.9-.4v-8.4q0-.6.3-1.2t.6-1.1l4-4q.4-.4 1.1-.6t1.1-.3H13V5.7q0-.5.4-.9t.9-.4h23.4q.5 0 .9.4t.4.9z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconAmbulance.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconAmbulance;
//# sourceMappingURL=IconAmbulance.js.map