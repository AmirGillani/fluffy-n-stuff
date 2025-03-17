import product1 from "../images/2.5.jpg";
import product2 from "../images/3.5.jpg";
import product3 from "../images/4.jpg";
import product4 from "../images/5.5.jpg";
import product5 from "../images/6.jpg";

let PRICES = [
    { price: 2500 },
    { price: 4500 },
    { price: 7200 },
    { price: 5000 },
    { price: 9000 }
  ];

 export let discounts = PRICES.map(product => getDiscount(product.price,20));

 function  getDiscount(price,discount)
{
  let minus = price * (discount/100);

  let afterDiscount = price - minus;

  return {
    afterDiscount, discount
  }

}

 export const PRODUCT = [
  { size: "2.5 feet", price: PRICES[0].price, img:product1,discount:discounts[0].discount , afterDiscount:discounts[0].afterDiscount },
  { size: "3.5 feet", price: PRICES[1].price, img:product2,discount:discounts[1].discount , afterDiscount:discounts[1].afterDiscount },
  { size: "4 feet", price: PRICES[2].price, img:product3,discount:discounts[2].discount , afterDiscount:discounts[2].afterDiscount },
  { size: "5.5 feet", price: PRICES[3].price, img:product4,discount:discounts[3].discount , afterDiscount:discounts[3].afterDiscount },
  { size: "6 feet", price: PRICES[4].price, img:product5,discount:discounts[4].discount , afterDiscount:discounts[4].afterDiscount }
];

