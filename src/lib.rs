mod parser;

extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parse(input: &str) -> String {
    parser::parse(input.to_string())
}
