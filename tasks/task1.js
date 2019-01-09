function arytmetic_sum(radius, exclusive_max) {
    const n = Math.ceil(exclusive_max / radius) - 1;
    return ((2 * radius) + (n - 1) * radius) * n / 2;
}

const result = arytmetic_sum(3, 1000) + arytmetic_sum(5, 1000) - arytmetic_sum(15, 1000);
console.log(result);