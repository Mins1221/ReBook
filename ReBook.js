function changeColor(element) {
  // 모든 버튼에서 'active' 클래스 제거
  var buttons = document.querySelectorAll('.content');
  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });

  // 클릭된 버튼에 'active' 클래스 추가
  element.classList.add('active');
}