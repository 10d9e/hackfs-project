import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import {
  DEFAULT_TOKEN_SUPPLY,
} from '../utils/constants'

const deployToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const {
    admin,
  } = await getNamedAccounts()
  // log the admin address
  console.log(`admin: ${admin}`)
  await deploy("LilypadToken", {
    from: admin,
    args: [
      "Lilypad Token",
      "LP",
      DEFAULT_TOKEN_SUPPLY,
    ],
    log: true,
  })
  return true
}

deployToken.id = 'deployToken'

export default deployToken