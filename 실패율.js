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

function solution1(N, stages) { // 배열 2개 대신 => object 활용
	let challenger = Array(N+2).fill(0);
	let fails = {}
	let total = stages.length;
	for (stage of stages) {
		challenger[stage] += 1;
	}
	for ( let i = 1 ; i < N+1 ; i++){
		if (challenger[i] == 0 ) fails[i] = 0;
		else {
			fails[i] = challenger[i] / total;
			total -= challenger[i];
		}
	}
	return Object.entries(fails).sort((a, b) => b[1] - a[1]).map(([key, value]) => parseInt(key));
}

console.log(solution1(5, [2, 1, 2, 6, 2, 4, 3, 3]));