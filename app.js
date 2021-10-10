const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
//마우스 클릭상태가 아닐때는 그려지지 말아야 함. 하지만 이벤트를 사용할 경우 true가 되어야해서 let으로 정의함.

canvas.width = 700;
canvas.height = 700;

let painting = false;

ctx.strokeStyle = "#2c2c2c"; //그리는 선들이 모두 이 색을 갖음.
ctx.lineWidth = 2.5; //선의 굵기

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath(); //click하지 않고 마우스를 움직임 = path(=선)시작.
        ctx.moveTo(x, y);
    } else {
        //mousedown으로 startPainting이 실행되면 실행됨.
        ctx.lineTo(x, y); //lineTo는 path시작 위치에서 지금위치까지 선(stroke 필요)을 만듬.
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}

//마우스가 떠나면 그려지지 말아야함.

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting); //클릭하면 startPainting(= painting = true;) 실행.
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
