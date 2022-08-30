const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

let content = fs.readFileSync("./contracts/Verifier16.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.7.0');
fs.writeFileSync("./contracts/Verifier16.sol", bumped);

content = fs.readFileSync("./contracts/Verifier2.sol", { encoding: 'utf-8' });
bumped = content.replace(solidityRegex, 'pragma solidity ^0.7.0');
fs.writeFileSync("./contracts/Verifier2.sol", bumped);

content = fs.readFileSync("./contracts/ProjectTokenTransferVerifier.sol", { encoding: 'utf-8' });
bumped = content.replace(solidityRegex, 'pragma solidity ^0.7.0');
fs.writeFileSync("./contracts/ProjectTokenTransferVerifier.sol", bumped);
