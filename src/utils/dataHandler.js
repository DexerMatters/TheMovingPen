export default async function readArticles(md) {
  return await fetch(require(`../data/pages/${md}.md`)).then((res) =>
    res.text()
  );
}

export function getNodeTreeFromMd(md) {
  let index = [];
  let now_name = "undefined";
  for (let line of md.split("\n")) {
    let line_ = line.trim();
    let [node, name] = line_.split(" ", 2);
    if (line_ === "") continue;
    if (node === "##") {
      let node = {};
      node[(now_name = name)] = [];
      index.push(node);
    }
    if (node === "###") {
      index[index.length - 1][now_name].push(name);
    }
  }
  return index;
}
