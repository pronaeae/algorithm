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
  // 여기를 채우세요
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
