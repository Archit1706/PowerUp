import tshirt from '../../assets/products/tshirt.png';
import bottle from '../../assets/products/bottle.png';
import dumbell from '../../assets/products/dumbell.png';
import premium from '../../assets/products/premium.png';
import buypremium from '../../assets/products/buypremium.png';
import skippingRope from '../../assets/products/skippingRope.png';

const products = [
  {
    id: 1,
    name: "Power Up Tee-shirt",
    category: "Clothes",
    src: tshirt,
    desc: "Our Power Up brand t-shirt is made from a soft, breathable material that will keep you comfortable during your workouts. The design features our iconic logo on the front, making it a great way to show off your dedication to fitness.",
    size: ['SM', 'M', 'L', 'XL'],
    price: 3000,
    color: true,
  },
  {
    id: 2,
    name: "Water Bottle",
    category: "Accessories",
    src: bottle,
    desc: "Stay hydrated during your workouts with our Power Up brand water bottle. Made from durable, BPA-free plastic, this bottle features a leak-proof design and a convenient carrying handle.",
    size: ['500ml', '1000ml'],
    price: 4000,
    color: true
  },
  {
    id: 3,
    name: "Dumbell",
    category: "Fitness Gear",
    src: dumbell,
    desc: "Our Power Up brand dumbbells are made from durable, high-quality materials that can withstand heavy use. These weights are perfect for a wide range of exercises and come in a variety of weights to suit your needs.",
    size: ['2Kg', '5Kg', '10Kg'],
    price: 8000,
    color: true
  },
  {
    id: 4,
    name: "Redeem Premium",
    category: "Subscriptions",
    src: premium,
    desc: "Upgrade your fitness experience with our Power Up premium subscription. You will have access to exclusive workout plans, expert advice, and personalized training programs to help you reach your fitness goals faster. Also enjoy an ad free user experience",
    price: "2000",
  },
  {
    id: 5,
    name: "Buy Premium",
    category: "Subscriptions",
    src: buypremium,
    desc: "Upgrade your fitness experience with our Power Up premium subscription. You will have access to exclusive workout plans, expert advice, and personalized training programs to help you reach your fitness goals faster. Also enjoy an ad free user experience",
    price: "₹500 / year",
  },
  {
    id: 6,
    name: "Skipping Ropes",
    category: "Fitness Gear",
    src: skippingRope,
    desc: "Our Power Up brand skipping rope is the perfect tool for a cardio workout. Made from durable materials, it features a comfortable grip and an adjustable length to suit your height",
    price: "6000",
    color: true
  },
]

export {products};
