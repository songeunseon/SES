let game = [];

function idEvent(eName, name, func) {
  var id = document.getElementById(name);
  id.addEventListener(eName, func);
}

function classEvent(eName, name, func) {
  var cls = document.getElementsByClassName(name);
  for (var i = 0; i < cls.length; i++)
    cls[i].addEventListener(eName, func);
}

function num_init() {
  for (var i = 1; i <= 25; i++) {
    var temp = Math.floor(Math.random() * 50) + 1;
    if (game.indexOf(temp) == -1) game.push(temp);
    else i--;
  }
}

window.onload = function () {
  num_init();
  idEvent("click", "game_start", start);
  classEvent("click", "num", choice_num);
};

function start() {
  var cls = document.getElementsByClassName("num");
  for (var i = 0; i < cls.length; i++) {
    cls[i].innerText = game[i];
  }
}

function choice_num() {
  this.classList.add("check");

  var sel_num = this.innerText;
  for (var i = 0; i < game.length; i++) {
    if (sel_num == game[i]) {
      game[i] = 0;
      break; // 클릭한 곳의 숫자를 0으로 변경
    }
  }

  check_bingo(); // 빙고 확인 함수 호출
}

function check_bingo() {
  // 빙고 확인 로직 구현

  // 예시: 가로, 세로, 대각선에 0이 5개 이상 있는지 확인하여 빙고가 되었으면 게임 종료
  var lines = 0;

  // 가로 빙고 확인
  for (var i = 0; i < 25; i += 5) {
    if (
      game[i] === 0 &&
      game[i + 1] === 0 &&
      game[i + 2] === 0 &&
      game[i + 3] === 0 &&
      game[i + 4] === 0
    ) {
      lines++;
    }
  }

  // 세로 빙고 확인
  for (var j = 0; j < 5; j++) {
    if (
      game[j] === 0 &&
      game[j + 5] === 0 &&
      game[j + 10] === 0 &&
      game[j + 15] === 0 &&
      game[j + 20] === 0
    ) {
      lines++;
    }
  }

  // 대각선 빙고 확인
  if (
    (game[0] === 0 &&
      game[6] === 0 &&
      game[12] === 0 &&
      game[18] === 0 &&
      game[24] === 0) ||
    (game[4] === 0 &&
      game[8] === 0 &&
      game[12] === 0 &&
      game[16] === 0 &&
      game[20] === 0)
  ) {
    lines++;
  }

  if (lines >= 5) {
    alert("빙고가 완성되었습니다! 게임 종료!");

    // 게임 종료 후 필요한 처리를 여기에 추가합니다.
    var restart = confirm("게임을 다시 시작하시겠습니까?");
    if (restart) {
      // 게임을 다시 시작하는 처리를 수행합니다.
      game = [];
      num_init();
      start();
    } else {
      // 게임 종료 처리를 수행합니다.
      // 예를 들어, 게임 보드를 초기화하거나 게임 관련 요소를 비활성화할 수 있습니다.
    }
  }
}