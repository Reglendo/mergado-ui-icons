import * as React from "react";
class IconGit extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--git ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m13.3 33.8q0-2.2-3.7-2.2-3.5 0-3.5 2.3 0 2.2 3.8 2.2 3.4 0 3.4-2.3z m-1.3-16.9q0-1.3-0.7-2.2t-2-0.9q-2.8 0-2.8 3.2 0 3 2.8 3 2.7 0 2.7-3.1z m6-7.2v4.5q-0.8 0.3-1.8 0.5 0.4 1 0.4 1.9 0 2.8-1.7 4.8t-4.4 2.5q-0.9 0.2-1.3 0.6t-0.4 1.3q0 0.7 0.5 1.2t1.3 0.7 1.7 0.5 1.9 0.6 1.8 0.8 1.3 1.4 0.5 2.2q0 6.8-8.1 6.8-1.6 0-2.9-0.3t-2.6-0.9-2-1.8-0.7-2.9q0-3.7 4.1-5v-0.1q-1.5-0.9-1.5-2.8 0-2.4 1.4-3v-0.1q-1.6-0.6-2.7-2.5t-1-3.7q0-3.1 2.1-5.1t5.2-2.1q2.2 0 4 1.1 2.2 0 4.9-1.1z m7.1 19.7h-5q0.1-1 0.1-3v-13.6q0-2.1-0.1-2.9h5q-0.1 0.8-0.1 2.8v13.7q0 2 0.1 3z m13.4-5v4.4q-1.6 0.9-3.9 0.9-1.4 0-2.4-0.5t-1.6-1.1-0.8-1.7-0.4-2.1-0.1-2.3v-7.8h0v-0.1q-0.1 0-0.4 0t-0.4-0.1q-0.5 0-1.3 0.2v-4.3h2.1v-1.7q0-1.2-0.1-1.9h5q-0.1 0.9-0.1 3.6h3.8v4.3q-0.3 0-0.9-0.1t-1 0h-1.9v8.1q0 3 1.9 3 1.4 0 2.5-0.8z m-12.9-21.1q0 1.3-0.8 2.2t-2.2 1q-1.3 0-2.2-1t-0.9-2.2q0-1.3 0.9-2.3t2.2-1q1.3 0 2.2 1t0.8 2.3z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconGit.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconGit;
//# sourceMappingURL=IconGit.js.map