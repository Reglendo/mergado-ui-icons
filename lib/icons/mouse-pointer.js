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
var IconMousePointer = (function (_super) {
    __extends(IconMousePointer, _super);
    function IconMousePointer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconMousePointer.prototype.render = function () {
        return React.createElement("g", null,
            React.createElement("path", { d: "m32.3 23.3q0.7 0.7 0.3 1.5-0.4 0.9-1.3 0.9h-8.5l4.4 10.6q0.3 0.6 0 1.1t-0.7 0.8l-4 1.7q-0.5 0.2-1.1 0t-0.7-0.8l-4.3-10.1-7 7q-0.4 0.4-1 0.4-0.2 0-0.5-0.1-0.9-0.4-0.9-1.3v-33.6q0-0.9 0.9-1.3 0.3-0.1 0.5-0.1 0.6 0 1 0.4z" }));
    };
    return IconMousePointer;
}(React.Component));
exports.default = IconMousePointer;
//# sourceMappingURL=mouse-pointer.js.map