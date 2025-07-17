
const message = "미니프런트 부스에 없었나요? 방금 000선수한테 듣기로 마지막으로 붉은 장갑/노트를 본게 풋살장이라고 하더라고요! 혹시 풋살장에 있는지 찾아봐주실래요?";
let index = 0;
const speed = 60;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("message").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
