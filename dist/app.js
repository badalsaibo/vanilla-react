import Text from "./component/Text.js";
function App() {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement("h1", null, "Hello World"),
    /*#__PURE__*/ React.createElement(Text, null)
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /*#__PURE__*/ React.createElement(App, null)
);
