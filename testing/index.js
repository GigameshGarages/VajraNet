const {
  TransferETHERC20ToNear,
  TransferEthERC20FromNear,
  DeployToken
} = require('./transfer-eth-erc20')

const path = require('path')

function getScript(name) {
  return path.resolve(path.join(__dirname, `scripts/${name}.sh`));
}

exports.TransferETHERC20ToNear = TransferETHERC20ToNear
exports.TransferEthERC20FromNear = TransferEthERC20FromNear
exports.DeployToken = DeployToken
exports.getScript = getScript