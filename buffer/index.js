const fs = require("fs");
const ourReadStream = fs.createReadStream(`${__dirname}/buff.txt`, "utf-8");
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`, "utf-8");

// ourReadStream.on("data", (chunk) => {
//     ourWriteStream.write(chunk)
// }
// );
ourReadStream.pipe(ourWriteStream);
