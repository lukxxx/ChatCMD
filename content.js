document.addEventListener("keydown", function (event) {
  let ctrl = event.ctrlKey
    ? event.ctrlKey
    : event.key === "Control"
    ? true
    : false;
  if (event.key === "ArrowUp") {
    let msgsArr = document.getElementsByClassName("empty:hidden");
    let prevMsg = msgsArr[msgsArr.length - 1].innerHTML;
    let textArea = document.getElementById("prompt-textarea");
    textArea.value += prevMsg;
  }
  if (event.key === "c" && ctrl) {
    let btnNeutral = document.getElementsByClassName("btn-neutral")[0];
    if (btnNeutral.children[0].innerText == "Stop generating") {
      btnNeutral.click();
    }
  }
});
