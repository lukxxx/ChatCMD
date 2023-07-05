document.addEventListener('keydown', function (event) {
  let ctrl = event.ctrlKey ? event.ctrlKey : ((event.keyCode === 17) ? true : false);
  if (event.keyCode == '38') {
    let msgsArr = document.getElementsByClassName("empty:hidden");
    let prevMsg = msgsArr[msgsArr.length - 1].innerHTML
    let textArea = document.getElementById("prompt-textarea");
    textArea.value += prevMsg;
  }
  if (event.keyCode == 67 && ctrl) {
    let btnNeutral = document.getElementsByClassName("btn-neutral")[0]
    btnNeutral.click();
 }
});