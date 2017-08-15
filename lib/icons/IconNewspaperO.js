"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var IconNewspaperO = (function (_super) {
    __extends(IconNewspaperO, _super);
    function IconNewspaperO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconNewspaperO.prototype.render = function () {
        var className = this.name + " " + this.name + "--newspaper-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19.9 12.5h-7.5v7.5h7.5v-7.5z m2.5 12.5v2.5h-12.5v-2.5h12.5z m0-14.9v12.4h-12.5v-12.4h12.5z m12.4 14.9v2.5h-10v-2.5h10z m0-5v2.5h-10v-2.5h10z m0-5v2.5h-10v-2.5h10z m0-4.9v2.4h-10v-2.4h10z m-29.8 18.6v-18.6h-2.5v18.6q0 0.5 0.4 0.9t0.8 0.3 0.9-0.3 0.4-0.9z m32.3 0v-21.1h-29.8v21.1q0 0.6-0.3 1.2h28.8q0.5 0 0.9-0.3t0.4-0.9z m2.5-23.6v23.6q0 1.5-1.1 2.6t-2.7 1.1h-32.3q-1.5 0-2.6-1.1t-1.1-2.6v-21.1h5v-2.5h34.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconNewspaperO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconNewspaperO;
}(React.Component));
exports.default = IconNewspaperO;
//# sourceMappingURL=IconNewspaperO.js.map