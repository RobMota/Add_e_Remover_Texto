window.onload = () => {
  var click = document.getElementById("click");
  var text = document.getElementById("t");
  var arr = [];
  var k = -1;

  click.onclick = () => {
    var input = document.getElementById("input");
    arr.push(input.value);
    render(input.value);
    input.value = "";
    input.focus();
  };

  function render(input) {
    let spanEl = document.createElement("span");
    spanEl.appendChild(document.createTextNode(input));
    text.appendChild(spanEl);
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = `rgb( ${r}, ${g}, ${b})`;
    k = k + 1;
    spanEl.setAttribute("id", `${k}`);
    document.getElementById(`${k}`).style.backgroundColor = color;

    remove(spanEl);
  }

  function remove(input) {
    input.addEventListener("dblclick", (e) => {
      let id = document.getElementById(input.id);
      let pai = document.getElementById("t");
      pai.removeChild(id);
    });
  }
};
