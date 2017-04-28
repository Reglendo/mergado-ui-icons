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
var IconMapMarker = (function (_super) {
    __extends(IconMapMarker, _super);
    function IconMapMarker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconMapMarker.prototype.render = function () {
        return React.createElement("g", null,
            React.createElement("path", { d: "m25.6 14.3q0-2.4-1.6-4.1t-4.1-1.6-4 1.6-1.7 4.1 1.7 4 4 1.7 4.1-1.7 1.6-4z m5.8 0q0 2.4-0.8 4l-8.1 17.3q-0.4 0.7-1.1 1.1t-1.5 0.4-1.5-0.4-1-1.1l-8.2-17.3q-0.7-1.6-0.7-4 0-4.7 3.3-8.1t8.1-3.3 8.1 3.3 3.4 8.1z" }));
    };
    return IconMapMarker;
}(React.Component));
exports.default = IconMapMarker;
//# sourceMappingURL=map-marker.js.map