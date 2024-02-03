/* 5:15 ~ 5:45

게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 
명령어는 다음과 같습니다.

U: 위쪽으로 한 칸 가기
D: 아래쪽으로 한 칸 가기
R: 오른쪽으로 한 칸 가기
L: 왼쪽으로 한 칸 가기

캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 
좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다. 
예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)
단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.

명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

*/

function solution(dirs) {
	let road = [];
	let start = [0, 0];
	const moves = {
		"U" : [0, 1],
		"D" : [0, -1],
		"L" : [-1, 0],
		"R" : [1, 0],
	}

	for (dir of dirs) {
		let currX = start[0];
		let currY = start[1];
		let nextX = start[0] + moves[dir][0]; 
		let nextY = start[1] + moves[dir][1];

		if (!(nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5)) {
			start[0] = nextX;
			start[1] = nextY;
			road.push([currX, currY, nextX, nextY]);
			road.push([nextX, nextY, currX, currY]);
		}
	}
	let set = new Set(road.map(JSON.stringify))
	return set.size / 2;
}

solution( // 7
	"ULURRDLLU"
)

