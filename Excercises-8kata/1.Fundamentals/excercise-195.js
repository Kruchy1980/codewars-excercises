// Calculate Price Excluding VAT

//return price without vat
function excludingVatPrice(price) {
    // your code
    return price === null ? -1 : Number((price / 1.15).toFixed(2));
}