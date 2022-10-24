import "./modal.css";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _react = _interopRequireWildcard(require("react"));
/**
* Modal component
* @component
*/
export default function Modal({
  displayModal,
  setDisplayModal,
  messageModal
}) {
  const handleDisplay = () => {
    setDisplayModal(!displayModal);
  };
  return /*#__PURE__*/_react.createElement("section", {
    className: displayModal ? "modal" : "display"
  }, /*#__PURE__*/_react.createElement("div", {
    className: "modal-ctn"
  }, /*#__PURE__*/_react.createElement("button", {
    className: "modal-close",
    onClick: handleDisplay
  }, "X"), /*#__PURE__*/_react.createElement("p", null, messageModal)));
}