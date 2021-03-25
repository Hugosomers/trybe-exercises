let cost = 200;
let price = 500;

if(cost < 0 || price < 0){
  console.log("Invalid Data")
}else{
// totalProfit
  let totalCost = cost + (cost * 0.20);
  let profit = price - totalCost;
  console.log(profit);

  // 1000 vendas do produto
  let sales = profit * 1000;
  console.log(sales);
}