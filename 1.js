function solution(s) {
    let answer = [];
    s = s.split("")
    s.forEach((e, idx) => {
        let i = idx
        let j = idx
        for(i ; i >= 0 ; i--){
            if(i === 0){
                answer.push(-1)
                break;
            }
            if(e === s[i - 1]){
                answer.push(j - i + 1)
                break;
            }
        }
    })
return answer;
}
