document.addEventListener("contextmenu", (a) => {
  a.preventDefault();
  window.location.href = "404PageNotFound.html";
});

document.onkeydown = function (e) {
  if (
    e.ctrlKey &&
    (e.keyCode === 67 ||
      e.keyCode === 86 ||
      e.keyCode === 85 ||
      e.keyCode === 117)
  ) {
    window.location.href = "404PageNotFound.html";

    return false;
  } else {
    return true;
  }
};
