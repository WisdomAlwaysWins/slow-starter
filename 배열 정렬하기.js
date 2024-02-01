const testcase = [
	[1, -5, 2, 4, 3],
	[2, 1, 1, 3, 2, 5, 4],
	[6, 1, 7],
];

const solution = (arr) => {
	return arr.sort((a, b) => a - b);
}

const bubbleSort = (arr) => {
	for (let i = 0 ; i < arr.length ; i++){
		for (let j = 0 ; j < arr.length - i - 1 ; j++){
			if (arr[j] > arr[j+1]) {
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

console.log("# 자바스크립트 sort() 메서드")

testcase.forEach(v => {
	let start = performance.now();
	let ans = solution(v);
	let end = performance.now();
	console.log("실행시간 :", end - start);
})

console.log("# 버블 정렬")

testcase.forEach(v => {
	let start = performance.now();
	let ans = (v);
	let end = performance.now();
	console.log("실행시간 :", end - start);
})