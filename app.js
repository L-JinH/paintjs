const canvas = document.getElementById("js-canvas");
let painting = false;
//마우스 클릭상태가 아닐때는 그려지지 말아야 함. 하지만 이벤트를 사용할 경우 true가 되어야해서 let으로 정의함.

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting();
}

//마우스가 떠나면 그려지지 말아야함.

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting());
}
