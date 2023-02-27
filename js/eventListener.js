// 이벤트 소스에 이벤트 리스너 등록
// window.addEventListener("load", event => { //defer지시자 썼으니 필요 없음
  console.log("문서가 메모리에 로딩 완료(돔 객체 생성 완료)");
  document.querySelector("button").addEventListener("click", event => {
    alert("버튼 클릭");
  })
// });