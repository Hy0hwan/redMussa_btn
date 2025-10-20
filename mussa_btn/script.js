const button = document.createElement("button");
button.textContent = "이미지 저장하기";

// 클릭 시 이미지 다운로드
button.addEventListener("click", () => {
  const image = document.getElementById("mussaImg");
  const link = document.createElement("a");
  link.href = image.src;
  link.download = "mussa_image.png"; // 저장될 파일명
  link.click();
});

document.getElementById("container").appendChild(button);
