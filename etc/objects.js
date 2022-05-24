const player = {
    name: 'nico',
    points: 10,
    fat: true,
};

console.log(player.name);

/* 에러는 constant 전체를 하나의 값으로서 업데이트 하려고 할 때 발생
    ex) player = false; */
// const 안의 object를 바꾸는것이므로 문제 없음
player.fat = false;

console.log(player['points']);

// Object 추가
player.lastName = 'potato';
console.log(player);

// player.point에 15 더하기
player.points = player.points + 15;
console.log(player.points);
// 결과: 25
