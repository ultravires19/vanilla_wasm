# Vanilla WASM
A basic setup for using wasm in a TS project without a framework 

## startup
- run `pnpm install` && `pnpm run dev` in `/front/` directory
- run `wasm-pack build --target web` in `/wasm/` directory

### getting here
- create vite project `front` for vanilla ts
- create `wasm` lib
  * add `wasm-bindgen` and wasm functions in `lib.rs`
  * update `Cargo.toml`
  * run `wasm-pack build --target web`
- create worker for wasm module
- vite config for `fs` access
- create form to test functionality in main.ts

