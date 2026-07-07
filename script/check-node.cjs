const minimum = [20, 19, 0];
const current = process.versions.node.split(".").map(Number);

const isSupported =
  current[0] > minimum[0] ||
  (current[0] === minimum[0] &&
    (current[1] > minimum[1] ||
      (current[1] === minimum[1] && current[2] >= minimum[2])));

if (!isSupported) {
  console.error(
    [
      `Node.js ${minimum.join(".")} or newer is required.`,
      `You are running Node.js ${process.versions.node}.`,
      "",
      "Install or switch to a current Node.js version, then run:",
      "  npm i",
      "  npm run start",
    ].join("\n"),
  );
  process.exit(1);
}
