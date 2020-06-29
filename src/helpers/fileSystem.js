import path from 'path';
import fs from 'fs';


async function writeToFile ({ filePath, data }) {
  const file = path.resolve(filePath);

  await fs.appendFileSync(file, data);
}


export {
  path,
  writeToFile,
};
