/**
 * 프로그래머스 Lv.1 — 완주하지 못한 선수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 *
 * 참가자 1~100,000명. completion 은 participant 보다 1 짧다.
 * 동명이인이 있을 수 있다 — 이게 이 문제의 전부다.
 *
 * 실행: node solution.js
 */

function solution(participant, completion) {
  // DB에 저장하 듯 {index, userName} 으로 자료구조를 변환한다.
  // completion 을 순회하며 지운다...
  // 는 브루스포스라서 오래걸릴 듯?
  
  // 해시맵을 만들어 해당 유저 수만큼 {userName , count}를 한다.
  // completion에 userName이 나오면 count를 -1 한다.
  // count > 0 인 userName을 출력한다
  // 는 동명이인인데 어떤 사람인지 판단이 안되긴 한데 이걸로 해보는게?

  const hash = new Map();

  for(const userName of participant){
    const hasUser = hash.has(userName);
    
    if(hasUser){
      const currentUser = hash.get(userName);
      hash.set(userName, currentUser + 1);
    } else {
      hash.set(userName, 1);
    };
  };
  
  for(const userName of completion){
    const user = hash.get(userName)
    hash.set(userName, user - 1);
  };

  // count > 0 인 선수를 찾으면 그게 완주하지 못한 선수
  for (const [userName, count] of hash.entries()) {
    if (count > 0) return userName;
  }
}

// ── 아래는 테스트 러너. 건드리지 않아도 된다 ──────────────────────────

const cases = [
  {
    participant: ['leo', 'kiki', 'eden'],
    completion: ['eden', 'kiki'],
    expected: 'leo',
  },
  {
    participant: ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    completion: ['josipa', 'filipa', 'marina', 'nikola'],
    expected: 'vinko',
  },
  {
    participant: ['mislav', 'stanko', 'mislav', 'ana'],
    completion: ['stanko', 'ana', 'mislav'],
    expected: 'mislav',
  },
];

let passed = 0;

for (const [i, c] of cases.entries()) {
  const actual = solution(c.participant, c.completion);
  const ok = actual === c.expected;
  if (ok) passed += 1;
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  #${i + 1}  기대 ${JSON.stringify(c.expected)} / 실제 ${JSON.stringify(actual)}`,
  );
}

console.log(`\n${passed}/${cases.length} 통과`);

// 10만 명에서 시간이 나는지 직접 재본다.
// 브루트포스로 풀면 여기서 눈에 띄게 느려진다.
const N = 100_000;
const big = Array.from({ length: N }, (_, i) => `runner${i}`);
const bigDone = big.slice(0, N - 1);

const started = performance.now();
const answer = solution(big, bigDone);
const elapsed = performance.now() - started;

console.log(
  `10만 명: ${elapsed.toFixed(1)}ms — 정답 ${answer === `runner${N - 1}` ? 'O' : 'X'}`,
);
