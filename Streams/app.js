import { createReadStream, createWriteStream } from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readableStream = createReadStream(inputFilePath, {
  encoding: "utf8",
  highWaterMark: 16,
});

const writableStream = createWriteStream(outputFilePath, { encoding: "utf8" });

readableStream.on("data", (chunk) => {
  console.log("Buffer (chunk): ", Buffer.from(chunk));
  console.log("Received chunk ", chunk);
  writableStream.write(chunk);
});

writableStream.on("end", () => {
  console.log("File reading completed!");
  writableStream.end();
});

// readableStream.pipe(writableStream)

readableStream.on("error", (err) => console.error(err));
writableStream.on("error", (err) => console.error(err));
