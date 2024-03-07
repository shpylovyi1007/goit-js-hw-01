'use strict';

function getElementWidth(content, padding, border) {
    let borderBox = content + padding + padding + border + border;
    console.log(Number.parseInt(content + 2 * padding + 2 * border));
    return content + padding + padding + border + border;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
