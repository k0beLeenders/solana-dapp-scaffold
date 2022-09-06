# 🏗 Solana React DApp Scaffold

Scaffolding for a dapp built on Solana using Redux

# Quickstart

```bash
git clone https://github.com/k0beLeenders/solana-dapp-scaffold.git

cd dapp-scaffold
```

```bash
yarn

yarn start
```

# Environment Setup

1. Install Rust from https://rustup.rs/

2. Install Solana v1.6.7 or later from https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool

3. Install Node

4. Install NPM, Yarn

# Build Smart Contract (compiled for BPF)

Run the following from the program/ subdirectory:

```bash
$ cargo build-bpf

$ cargo test-bpf
```

# Directory structure

## program

Solana program template in Rust

### program/src/lib.rs

process_instruction function is used to run all calls issued to the smart contract

## React DApp

### src/actions

Setup here actions that will interact with Solana programs using sendTransaction function

### src/contexts

React context objects that are used propagate state of accounts across the application

### src/state

React redux state that are used to manage state

### src/hooks

Generic react hooks to interact with token program:

### src/views

Home - main page for your app
