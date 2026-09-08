/**
 * 프로그래머스 Lv.2 — 가장 큰 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42746
 *
 * numbers 길이 1~100,000. 원소는 0~1,000.
 * 정답이 크므로 문자열로 return 한다.
 *
 * 실행: node solution.js
 */

function solution(numbers) {
  const answer = numbers.map((number) => String(number))
  .sort((a,b) => (b+a)-(a+b))
  .join('')

  return answer[0] === '0' ? '0' : answer
}

// ── 아래는 테스트 러너. 건드리지 않아도 된다 ──────────────────────────

const cases = [
  { numbers: [6, 10, 2], expected: '6210' },
  { numbers: [3, 30, 34, 5, 9], expected: '9534330' },
  // 원소가 하나뿐인 경우
  { numbers: [0], expected: '0' },
  // 전부 0 이면 "000" 이 아니라 "0" 이어야 한다
  { numbers: [0, 0, 0], expected: '0' },
  // 자릿수가 섞인 경우
  { numbers: [1, 10, 100, 1000], expected: '1101001000' },
];

let passed = 0;

for (const [i, c] of cases.entries()) {
  const actual = solution(c.numbers);
  const ok = actual === c.expected;
  if (ok) passed += 1;
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  #${i + 1}  ${JSON.stringify(c.numbers)}  기대 ${JSON.stringify(c.expected)} / 실제 ${JSON.stringify(actual)}`,
  );
}

console.log(`\n${passed}/${cases.length} 통과`);

// 10만 개에서 시간이 나는지 본다.
const N = 100_000;
const big = Array.from({ length: N }, () => Math.floor(Math.random() * 1001));

const started = performance.now();
const answer = solution(big);
const elapsed = performance.now() - started;

console.log(
  `10만 개: ${elapsed.toFixed(1)}ms — 길이 ${typeof answer === 'string' ? answer.length : '문자열이 아님'}`,
);
