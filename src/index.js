import { products } from "./js/data.js";
import createList from "./templaties/smart.hbs";

const body = document.querySelector("body");
console.log(createList({ products }));

body.innerHTML = createList({ products });
