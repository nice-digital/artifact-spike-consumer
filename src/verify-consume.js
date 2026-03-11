const spikePackage = require("@nice-digital/artifact-spike-package");

if (!spikePackage) {
  throw new Error("Package failed to load");
}

if (spikePackage.message !== "artifact spike package") {
  throw new Error("Unexpected package output");
}

console.log("Verified spike package success");
console.log({ spikePackage });
