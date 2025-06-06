/*
<div parent>
  <div child2>
    <h1>
    <h1>
  </div>
 <div child2>
  <h1>
  <h1>
  </div>

  </div>
*/

const config = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "header1" }, "heading 1"),
    React.createElement("h2", { id: "header2" }, "Header 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "header1" }, "heading 1"),
    React.createElement("h2", { id: "header2" }, "Header 2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(config);
