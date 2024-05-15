const fs = require("fs").promises;
const path = require("path");

const dataPath = path.join(process.env.DATA_PATH || "./data.txt");
// docker run --env DATA_PATH=/data/num.txt --mount type=volume,src=incrementor-data,target=/data incrementor-data
// to work with volumes

fs.readFile(dataPath)
  .then(buffer => {
          const data = buffer.toString();
          console.log(data);
          writeTo(+data + 1);
        })
  .catch(e => {
          console.log("file not found, writing '0' to a new file");
          writeTo(0);
        });

const writeTo = data => {
      fs.writeFile(dataPath, data.toString()).catch(console.error);
};
