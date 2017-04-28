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
var IconFileArchiveO = (function (_super) {
    __extends(IconFileArchiveO, _super);
    function IconFileArchiveO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFileArchiveO.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m17.3 8.6v-2.9h-2.9v2.9h2.9z m2.8 2.8v-2.8h-2.8v2.8h2.8z m-2.8 2.9v-2.9h-2.9v2.9h2.9z m2.8 2.8v-2.8h-2.8v2.8h2.8z m15.7-8.6q0.6 0.6 1 1.7t0.5 1.9v25.8q0 0.8-0.6 1.5t-1.6 0.6h-30q-0.9 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h20q0.9 0 2 0.4t1.7 1.1z m-9.9-5.5v8.4h8.4q-0.3-0.6-0.5-0.9l-7-7q-0.3-0.2-0.9-0.5z m8.5 34.1v-22.8h-9.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-2.9v2.8h-2.8v-2.8h-11.4v34.2h28.5z m-14-16l2.4 7.7q0.2 0.6 0.2 1.2 0 1.9-1.6 3.1t-4.1 1.2-4.1-1.2-1.6-3.1q0-0.6 0.2-1.2 0.4-1.4 2.6-8.8v-2.9h2.9v2.9h1.7q0.5 0 0.9 0.3t0.5 0.8z m-3.1 10.3q1.2 0 2-0.4t0.8-1-0.8-1-2-0.4-2 0.4-0.9 1 0.9 1 2 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFileArchiveO;
}(React.Component));
IconFileArchiveO.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconFileArchiveO;
//# sourceMappingURL=file-archive-o.js.map