const changeWidth = (n) => {
  let wTag = document.getElementById("p");
  wTag.style.borderWidth = n;
};

const changeBorder = (r, g, b) => {
  let bTag = document.getElementById("p");
  bTag.style.borderColor = "rgb(" + r + "," + g + "," + b + ")";
};

const changeBackground = (r, g, b) => {
  let bcTag = document.getElementById("p");
  bcTag.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};
