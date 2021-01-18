export const currencyFormat = (amount) => {
    const expression = String(amount).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return `$${expression}`
}
export const objectIsEmpty = (obj) => {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}
