#![allow(unused_variables)]
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Let's gooo, {}!", name)
}
