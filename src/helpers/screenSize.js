
function screenSize(tvObject) {
    let results = [];
    for (let i = 0; i < tvObject.availableSizes[i]; i++) {
        let cm = Math.round(tvObject.availableSizes[i] * 2.54);
        if (tvObject.availableSizes[i] === 24) {
            results.push(`${tvObject.availableSizes[i]} inch (${cm} cm)`)
        }
        if (tvObject.availableSizes[i] === 32) {
            results.push(`${tvObject.availableSizes[i]} inch (${cm} cm)`)
        }
        if (tvObject.availableSizes[i] === 43) {
            results.push(`${tvObject.availableSizes[i]} inch (${cm} cm)`)
        }
        if (tvObject.availableSizes[i] === 50) {
            results.push(`${tvObject.availableSizes[i]} inch (${cm} cm)`)
        }
        if (tvObject.availableSizes[i] === 55) {
            results.push(`${tvObject.availableSizes[i]} inch (${cm} cm)`)
        }
    }
    return results.join(" | ");
}
export default screenSize