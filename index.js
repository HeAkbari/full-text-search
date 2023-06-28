const users = [
  { name: "hesam", family: "Akbari", job: "programer" },
  { name: "hasan", family: "esmaily", job: "programmer" },
  { name: "nima", family: "ahmadi", job: "ux designer" },
  { name: "shahin", family: "ghiasi", job: "product owner" },
];

const weights = {
  name: 5,
  family: 3,
  job: 1,
};

function search(input) {
  return users
    .map((item) => {
      const score = Object.keys(weights).reduce((score, key) => {
        const fieldWeight = weights[key];
        const fieldValue = item[key];
        if (fieldValue.toLowerCase().includes(input.toLowerCase())) {
          return score + fieldWeight;
        }
        return score;
      }, 0);
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

const results = search("es");
console.log(results);
