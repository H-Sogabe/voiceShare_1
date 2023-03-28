import fsPromises from "fs/promises";
import path from "path";

// fPath(string)は読み込むローカルJSONファイルのパス
const readJson = async function (fPath) {
  const filePath = path.join(process.cwd(), fPath);
  const data = await fsPromises.readFile(filePath);
  const result = JSON.parse(data);
  return result;
};

export { readJson };
