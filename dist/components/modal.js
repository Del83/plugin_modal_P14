"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
require("@babel/polyfill");
require("./modal.css");
/**
* Modal component
* @component
*/
function Modal(_ref) {
  var displayModal = _ref.displayModal,
    setDisplayModal = _ref.setDisplayModal,
    messageModal = _ref.messageModal;
  var handleDisplay = function handleDisplay() {
    setDisplayModal(!displayModal);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: displayModal ? "modal" : "display"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-ctn"
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: handleDisplay
  }, "X"), /*#__PURE__*/React.createElement("p", null, messageModal)));
}