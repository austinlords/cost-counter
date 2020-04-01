module.exports = {
  formatMoney: amount => "$" + (amount % 1 === 0 ? amount : amount.toFixed(2))
};
