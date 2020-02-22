const Vocab = (string, n) => {
  const p = string
    .toLowerCase()
    .replace(/['.?!,’]/g, " ")
    .split(" ")
    .filter(x => x.length > 0);

  const res = [];
  let i = 0;
  const map = new Map();

  for (const word of p) {
    let x = 1;
    if (map.has(word)) {
      x = map.get(word) + 1;
    }
    map.set(word, x);
  }

  map[Symbol.iterator] = function*() {
    yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
  };

  for (const c of [...map]) {
    res.push(c[0]);
    i++;
    if (i === n) break;
  }

  return res;
};

console.log(
  Vocab(
    "It was Ms. Fitzhugh. She was walking fast. A strange expression crossed the faces of the students as they glanced toward the door and saw the principal go straight into the boys’ restroom. The footsteps stopped. There was a deep, throaty sound difficult to describe. Then came an eruption of shrill screaming and a rapid sound of heels. Moments later, Ms. Fitzhugh emerged, her eyes wild. Screaming, she skidded in the hall and headed toward the office.",
    4
  )
);
