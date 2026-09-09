/**
 * 프로그래머스 Lv.2 — 기능개발
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 *
 * 작업 개수 100 이하. 진도는 100 미만의 자연수, 속도는 100 이하의 자연수.
 * 뒤 기능이 먼저 끝나도 앞 기능이 배포될 때 함께 나간다.
 *
 * 실행: node solution.js
 */

function solution(progresses, speeds) {
  // 여기를 채우세요
}

// ── 아래는 테스트 러너. 건드리지 않아도 된다 ──────────────────────────

const eq = (a, b) =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const cases = [
  {
    progresses: [93, 30, 55],
    speeds: [1, 30, 5],
    expected: [2, 1],
  },
  {
    progresses: [95, 90, 99, 99, 80, 99],
    speeds: [1, 1, 1, 1, 1, 1],
    expected: [1, 3, 2],
  },
  // 작업이 하나뿐
  {
    progresses: [50],
    speeds: [10],
    expected: [1],
  },
  // 뒤로 갈수록 느려서 한 번에 하나씩 나간다
  {
    progresses: [10, 10, 10],
    speeds: [30, 20, 10],
    expected: [1, 1, 1],
  },
  // 앞이 제일 느려서 전부 한 번에 나간다
  {
    progresses: [10, 20, 30],
    speeds: [1, 50, 50],
    expected: [3],
  },
  // 나누어떨어지는 경우 — 올림 처리에서 하루가 밀리면 틀린다
  {
    progresses: [90, 90],
    speeds: [10, 10],
    expected: [2],
  },
];

let passed = 0;

for (const [i, c] of cases.entries()) {
  const actual = solution(c.progresses, c.speeds);
  const ok = eq(actual, c.expected);
  if (ok) passed += 1;
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  #${i + 1}  기대 ${JSON.stringify(c.expected)} / 실제 ${JSON.stringify(actual)}`,
  );
}

console.log(`\n${passed}/${cases.length} 통과`);

// N 이 100 이라 성능은 문제가 되지 않는다. 최대 크기에서 한 번만 확인한다.
const N = 100;
const big = {
  progresses: Array.from({ length: N }, () => 1),
  speeds: Array.from({ length: N }, () => 1),
};

const started = performance.now();
const answer = solution(big.progresses, big.speeds);
const elapsed = performance.now() - started;

console.log(
  `100개(전부 1%/1일): ${elapsed.toFixed(2)}ms — ${JSON.stringify(answer)}`,
);
