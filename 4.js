function solution(k, score) {
    let answer = [];
    let allScore = [];
    for (let i = 0 ; i <= score.length - 1 ; i++){
        allScore.push(score[i]);
        allScore.sort((a,b)=> b - a);
        (i < k - 1) ? answer.push(allScore[i]) : answer.push(allScore[k - 1])
        }
    return answer;
}
