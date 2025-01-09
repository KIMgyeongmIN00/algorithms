function solution(food) {
    let left = [];
    let right = [];
    for (let i = 1 ; i <= food.length - 1 ; i++){
        for (let j = 0 ; j <= Math.floor(food[i] / 2) - 1 ; j++){
            left.push(i);
            right.unshift(i);
        }
    }
    let answer = [...left, 0, ...right];
    return answer.join("");
}
