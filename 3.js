function solution(a, b, n) {
    let answer = 0;
    let get = 0;
    let mod = 0;
    while (Math.floor(a / n) === 0) {
        get = Math.floor(n / a) * b;
        mod = n % a;
        n = get + mod;
        answer += get;
    }
    if (n !== 0) {
        answer += Math.floor(n / a) * b
    }
    return answer;
}
