import { Headset, RotateCcw, Shield, Truck } from "lucide-react"

export const Navlinks = [{
    label:"Shop",
    url:"#"
},
{
    label:"Collections",
    url:"#collections"
},
{
    label:"About",
    url:"#about"
},
{
    label:"Contact",
    url:"#contact"
},
]

export const Boxes = [{
    count:"10K+",
    label:"Happy Customers"
},
{
    count:"500+",
    label:"Premium Products"
},
{
    count:"98%",
    label:"Satisfaction Rate"
},]

export const FilterButtons = [
  { label: "All" },
  { label: "Dresses" },
  { label: "Blazers" },
  { label: "Sweaters" },
  { label: "Coats" },
  { label: "Shirts" },
  { label: "Accessories" }
];

export const Products = [
  // Dresses
  {
    id: 1,
    rating: 4.8,
    name: "Luxury Silk Dress",
    price: 299,
    sales: 124,
    category: "Dresses",
    fav:false
  },
  {
    id: 2,
    rating: 4.8,
    name: "Elegant Evening Gown",
    price: 599,
    sales: 67,
    category: "Dresses",
    fav:false
  },
  {
    id: 3,
    rating: 4.7,
    name: "Floral Summer Dress",
    price: 179,
    sales: 150,
    category: "Dresses",
    fav:false
  },

  // Blazers
  {
    id: 4,
    rating: 4.9,
    name: "Premium Cotton Blazer",
    price: 199,
    sales: 89,
    category: "Blazers",
    fav:false
  },
  {
    id: 5,
    rating: 4.8,
    name: "Slim Fit Blazer",
    price: 249,
    sales: 110,
    category: "Blazers",
    fav:false
  },
  {
    id: 6,
    rating: 4.7,
    name: "Velvet Party Blazer",
    price: 299,
    sales: 72,
    category: "Blazers",
    fav:false
  },

  // Sweaters
  {
    id: 7,
    rating: 4.8,
    name: "Cashmere Sweater",
    price: 179,
    sales: 156,
    category: "Sweaters",
    fav:false
  },
  {
    id: 8,
    rating: 4.7,
    name: "Chunky Knit Sweater",
    price: 169,
    sales: 140,
    category: "Sweaters",
    fav:false
  },

  // Coats
  {
    id: 9,
    rating: 4.9,
    name: "Classic Trench Coat",
    price: 349,
    sales: 98,
    category: "Coats",
    fav:false
  },
  {
    id: 10,
    rating: 4.8,
    name: "Wool Blend Overcoat",
    price: 399,
    sales: 102,
    category: "Coats",
    fav:false
  },

  // Shirts
  {
    id: 11,
    rating: 4.7,
    name: "Slim Fit Formal Shirt",
    price: 129,
    sales: 142,
    category: "Shirts",
    fav:false
  },
  {
    id: 12,
    rating: 4.6,
    name: "Oxford Casual Shirt",
    price: 139,
    sales: 160,
    category: "Shirts",
    fav:false
  },

  // Accessories
  {
    id: 13,
    rating: 4.9,
    name: "Designer Handbag",
    price: 449,
    sales: 201,
    category: "Accessories",
    fav:false
  },
  {
    id: 14,
    rating: 4.8,
    name: "Luxury Tote Bag",
    price: 329,
    sales: 120,
    category: "Accessories",
    fav:false
  },
];


export const AboutInfo = [{
    icon:Truck,
    label:"Free Shipping",
    content:"Complimentary shipping on all orders over $100. Fast and reliable delivery worldwide.",
    bgcol:"bg-blue-200",
    txtcol:"text-blue-600"
},
{
    icon:Shield,
    label:"Secure Payment",
    content:"Your payment information is protected with bank-level security and encryption.",
    bgcol:"bg-green-200",
    txtcol:"text-green-600"
},
{
    icon:RotateCcw,
    label:" Easy Returns",
    content:"30-day hassle-free returns. Don't love it? Return it for a full refund.",
    bgcol:"bg-orange-200",
    txtcol:"text-orange-600"
},
{
    icon:Headset,
    label:"24/7 Support",
    content:"Our dedicated customer service team is here to help you around the clock.",
    bgcol:"bg-purple-200",
    txtcol:"text-purple-600"
},]

export const SalesData = [{
    count:"50,000+",
    label:"Orders Delivered"
},
{
    count:"15,000+",
    label:"Happy Customers"
},
{
    count:"45",
    label:"Countries Served"
},
{
    count:"4/5",
    label:"Average Rating"
},]

export const TestimonialInfo = [{
    name:"Sarah Johnson",
    profession:"Fasion Blogger",
    content:"Luxora has completely transformed my wardrobe. The quality is exceptional and the style is exactly what I was looking for. I've received so many compliments!",
    imgUrl:"profile.avif",
    rating:5
},
{
    name:"Michael Chen",
    profession:"Business Executive",
    content:"The attention to detail and customer service is outstanding. Every piece I've purchased has exceeded my expectations. Highly recommend!",
    imgUrl:"profile.avif",
    rating:3
},
{
    name:"Emma Rodriguez",
    profession:"Interior Designer",
    content:"I love how Luxora combines timeless elegance with modern trends. The pieces are versatile and perfect for both work and social occasions.",
    imgUrl:"profile.avif",
    rating:1
},]

export const ReviewData = [
{   count:"4.9/5",
    label:"Average Rating"
},
{   count:"2,341",
    label:"Happy Customers"
},
{   count:"98%",
    label:"Would Recommend"
},]

export const SubscribeList = ["Exclusive offers","New arrivals first","Style inspiration","No spam, ever"]

export const FooterLinks = [{
    label:"Quick Links",
    links:["Shop All","New Arrivals","Best Sellers","Sale","Collections","Gift Cards"]
},
{
    label:"Customer Service",
    links:["Contact Us","Size Guide","Shipping Info","Returns","FAQ","Track Order"]
}]