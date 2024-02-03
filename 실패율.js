/*

! 반례 생각하기
! 제한사항 확인하기
  - 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 지정한다.

● 실패율 = 스테이지에 도달했으나 아직 클리어 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
● N : 전체 스테이지의 개수 
● stages : 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열

실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담겨있는 배열을 reutrn

*/

function solution(N, stages) {
	let round = Array(N+1).fill(0);
	let stay = Array(N+1).fill(0);
	let fail = Array(N).fill(0);
	let sortedFail = Array(N).fill(0);
	let result = [];

	for (let i= 0 ; i < stages.length ; i++){
		stay[stages[i] - 1]++;
		for (let j = 0 ; j < stages[i] ; j++) {
			round[j]++;
		}
	}

	for (let i = 0 ; i < N ; i++){
		if (stay[i] === round[i] && stay[i] === 0) {
			fail[i] = 0;
		}else{
			fail[i] = stay[i] / round[i];
			sortedFail[i] = stay[i] / round[i];
		}
	}

	sortedFail.sort((a, b) => b - a);
	sortedFail.forEach(rate => {
		result.push(fail.indexOf(rate) + 1);
		fail[fail.indexOf(rate)] = -1;
	})
	return result;
}

function solution1(N, stages) { // 간결한 코드, 근데 실행시간은 내 코드보다는 오래 걸림
	let result = [];

	for (let i = 1 ; i <= N ; i++){ // for문 안에 filter() -> O(N^2)
		let reach = stages.filter((x => x >= i)).length;
		let curr = stages.filter (x => x === i).length;
		result.push([i, curr/reach]);
	}
	result.sort((a, b) => b[1] - a[1]);
	return result.map(x => x[0]);
}

console.log(solution1(4, [3, 3, 3, 3, 3]));