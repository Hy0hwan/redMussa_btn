// 버튼 생성
const button = document.createElement("button");
button.textContent = "클릭하세요!";

// 클릭 이벤트 추가
button.addEventListener("click", () => {
  alert("버튼이 클릭되었습니다!");
});

// body에 버튼 추가
document.getElementById("container").appendChild(button);
