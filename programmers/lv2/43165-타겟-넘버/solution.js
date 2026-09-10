/**
 * 프로그래머스 Lv.2 — 타겟 넘버
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 *
 * 숫자 개수 2~20. 각 숫자는 1~50, target 은 1~1000.
 * 순서를 바꾸지 않고 각 숫자 앞에 + 또는 - 를 붙여 target 을 만드는 방법의 수.
 *
 * 각 숫자마다 두 갈래 → 최대 2^20 ≈ 100만. N 이 20 이라 완전탐색이 가능하다.
 *
 * 실행: node solution.js
 */

function solution(numbers, target) {
  // 여기를 채우세요
}

// ── 아래는 테스트 러너. 건드리지 않아도 된다 ──────────────────────────

const cases = [
  { numbers: [1, 1, 1, 1, 1], target: 3, expected: 5, note: '예시 1' },
  { numbers: [4, 1, 2, 1], target: 4, expected: 2, note: '예시 2' },
  // 최소 길이
  { numbers: [1, 1], target: 2, expected: 1, note: '최소 길이 — +1+1 하나뿐' },
  // 부호가 갈려야 0 이 된다. 두 가지 (+1-1, -1+1)
  { numbers: [1, 1], target: 0, expected: 2, note: '0 을 만드는 두 갈래' },
  // 어떻게 해도 못 만든다
  { numbers: [1, 2], target: 100, expected: 0, note: '도달 불가' },
  // 합보다 큰 target
  { numbers: [50, 50], target: 101, expected: 0, note: '전부 더해도 모자람' },
  // 최대 길이. 20개를 반씩 +/- 로 갈라야 하므로 C(20,10)
  {
    numbers: Array.from({ length: 20 }, () => 1),
    target: 0,
    expected: 184756,
    note: '최대 길이 20 — 2^20 갈래를 모두 세어야 한다',
  },
];

let passed = 0;

for (const [i, c] of cases.entries()) {
  const started = performance.now();
  const actual = solution(c.numbers, c.target);
  const ms = performance.now() - started;
  const ok = actual === c.expected;
  if (ok) passed += 1;
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  #${i + 1}  기대 ${c.expected} / 실제 ${actual}  (${ms.toFixed(1)}ms)  ${c.note}`,
  );
}

console.log(`\n${passed}/${cases.length} 통과`);
