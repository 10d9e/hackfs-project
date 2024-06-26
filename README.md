# Lilypad Hardhat Template [![Open in Gitpod][gitpod-badge]][gitpod] [![Hardhat][hardhat-badge]][hardhat] [![License: MIT][license-badge]][license]

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/10d9e/hackfs-project)

[gitpod]: https://gitpod.io/#https://github.com/10d9e/hackfs-project
[gitpod-badge]: https://img.shields.io/badge/Gitpod-Open%20in%20Gitpod-FFB45B?logo=gitpod
[gha]: https://github.com/10d9e/hackfs-project/actions
[gha-badge]: https://github.com/10d9e/hackfs-project/actions/workflows/ci.yml/badge.svg
[hardhat]: https://hardhat.org/
[hardhat-badge]: https://img.shields.io/badge/Built%20with-Hardhat-FFDB1C.svg
[license]: https://opensource.org/licenses/MIT
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg

## Quickstart

Super quick: Create an online [codespace](https://codespaces.new/10d9e/hackfs-project) using this template. Once inside the codespace, it will take a minute or two for the environment to setup and configure lilypad and it's service dependencies for the environment, via the `npm preinstall` hook.

Start up lilypad and a local development environment by opening a terminal in vscode:
```bash
> npm run lilypad:up
```

Almost as quick: Clone this repo and run the commands yourself with local vscode + Docker:
```bash
> npm run lilypad:setup
> npm run lilypad:up
```

A Hardhat-based template for developing Solidity smart contracts, with sensible defaults.

- [Hardhat](https://github.com/nomiclabs/hardhat): compile, run and test smart contracts
- [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript bindings for smart contracts
- [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation
- [Solhint](https://github.com/protofire/solhint): code linter
- [Solcover](https://github.com/sc-forks/solidity-coverage): code coverage
- [Prettier Plugin Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity): code formatter

## Getting Started

Click the [`Use this template`](https://github.com/paulrberg/hardhat-template/generate) button at the top of the page to
create a new repository with this repo as the initial state.

## Features

This template builds upon the frameworks and libraries mentioned above, so for details about their specific features,
please consult their respective documentations.

For example, for Hardhat, you can refer to the [Hardhat Tutorial](https://hardhat.org/tutorial) and the
[Hardhat Docs](https://hardhat.org/docs). You might be in particular interested in reading the
[Testing Contracts](https://hardhat.org/tutorial/testing-contracts) section.

### Sensible Defaults

This template comes with sensible default configurations in the following files:

```text
├── .editorconfig
├── .eslintignore
├── .eslintrc.yml
├── .gitignore
├── .prettierignore
├── .prettierrc.yml
├── .solcover.js
├── .solhint.json
└── hardhat.config.ts
```

### VSCode Integration

This template is IDE agnostic, but for the best user experience, you may want to use it in VSCode alongside Nomic
Foundation's [Solidity extension](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity).

### GitHub Actions

This template comes with GitHub Actions pre-configured. Your contracts will be linted and tested on every push and pull
request made to the `main` branch.

Note though that to make this work, you must use your `INFURA_API_KEY` and your `MNEMONIC` as GitHub secrets.

For more information on how to set up GitHub secrets, check out the
[docs](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions).

You can edit the CI script in [.github/workflows/ci.yml](./.github/workflows/ci.yml).

## Usage

### Pre Requisites

First, you need to install the dependencies:

```sh
npm install
```

Then, you need to set up all the required
[Hardhat Configuration Variables](https://hardhat.org/hardhat-runner/docs/guides/configuration-variables). You might
also want to install some that are optional.

To assist with the setup process, run `npx hardhat vars setup`. To set a particular value, such as a BIP-39 mnemonic
variable, execute this:

**Note: this is an optional step, hardhat.config.ts contains a default MNEMONIC**
```sh
npx hardhat vars set MNEMONIC
? Enter value: ‣ here is where your twelve words mnemonic should be put my friend
```

If you do not already have a mnemonic, you can generate one using this [website](https://iancoleman.io/bip39/).

### Compile

Compile the smart contracts with Hardhat:

```sh
npm run compile
```

### TypeChain

Compile the smart contracts and generate TypeChain bindings:

```sh
npm run typechain
```

### Test

Run the tests with Hardhat:

```sh
npm run test
```

### Lint Solidity

Lint the Solidity code:

```sh
npm run lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
npm run lint:ts
```

### Coverage

Generate the code coverage report:

```sh
npm run coverage
```

### Report Gas

See the gas usage per unit test and average gas per method call:

```sh
REPORT_GAS=true npm run test
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
npm run clean
```

### Deploy

Deploy the contracts to Hardhat Network:

```sh
npm run deploy:contracts
```

### Tasks

#### Deploy Lock

Deploy a new instance of the Lock contract via a task:

```sh
npm run task:deployLock --unlock 100 --value 0.1
```

### Syntax Highlighting

If you use VSCode, you can get Solidity syntax highlighting with the
[hardhat-solidity](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) extension.

## Using GitPod

[GitPod](https://www.gitpod.io/) is an open-source developer platform for remote development.

To view the coverage report generated by `npm run coverage`, just click `Go Live` from the status bar to turn the server
on/off.

## Local development with Ganache

### Install Ganache

```sh
npm i -g ganache
```

### Run a Development Blockchain

```sh
ganache -s test
```

> The `-s test` passes a seed to the local chain and makes it deterministic

Make sure to set the mnemonic in your `.env` file to that of the instance running with Ganache.

## License

This project is licensed under MIT.
