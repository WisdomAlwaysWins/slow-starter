function solution(s){ // 원래 스택 문젠데..ㅎ
	let start = [...s].filter( v => v === "(");
	let end = [...s].filter( v => v === ")");

	return start.length === end.length ? true : false;
}

solution("(())()")