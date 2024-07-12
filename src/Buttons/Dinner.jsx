import React from 'react';
import './Dinner.css';

const eveningItems = [
  {
    src: 'https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_926199-2087766.jpg',
    alt: 'Pasta',
    title: 'Hindu Veg Thall',
    heading:'Penne pasta with white sauce and truffle , italian , chiness and bangalies food',
    price: '$25',
  },
  {
    src: 'https://static.vecteezy.com/system/resources/thumbnails/033/688/672/small_2x/photos-of-indian-thali-in-indoor-studio-ai-generated-photo.jpg',
    alt: 'Steak',
    title: 'Indian Mix Thall',
    heading:'shish kebabs on wooden skewers with onion and tomatos salad plates.',
    price: '$35',
  },
  {
    src: 'https://media.istockphoto.com/id/591822830/photo/natural-vegetable-salad-with-cucumbers-tomatoes-and-broccoli.jpg?s=612x612&w=0&k=20&c=qdAt0wbQrYkggjl2Rpjp9Vpjf2Qj6hKb-KbC8HBotYY=',
    alt: 'Salad',
    title: 'Salad',
    heading:'Natural vegetable salad with cucumbers, tomatoes and broccoli',
    price: '$15',
  },
  {
    src: 'https://media.istockphoto.com/id/880404212/photo/white-bowl-with-hot-vegetable-soup-on-napkin.jpg?s=612x612&w=0&k=20&c=AVvmYxQT3O3stgaMYGXlODLchLzjkXCtnu9BeDchA7M=',
    alt: 'Soup',
    title: 'Soup',
    heading:'White bowl with hot vegetable soup on napkin. Studio Photo',
    price: '$12',
  },
  {
    src: 'https://media.istockphoto.com/id/1072677788/photo/sushi-time.jpg?s=612x612&w=0&k=20&c=bYM-lANASqcsyoeizYXcki6b0RWRXjmSPXK6sqaFaYw=',
    alt: 'Sushi',
    title: 'Sushi',
    heading:'Nice dish of delicious sushi with white plate inside the food.',
    price: '$30',
  },
  {
    src: 'https://www.jocooks.com/wp-content/uploads/2019/06/instant-pot-chicken-tikka-masala-1-4.jpg',
    alt: 'Pizza',
    title: 'Chicken Tikka',
    heading:'This Instant Pot Chicken Tikka Masala is one hundred percent made from scratch. Super flavorful with ...',
    price: '$20'
  },
  {
    src: 'https://www.celebrationinmykitchen.com/uploads/4/8/6/2/48622077/chicken-roll1_orig.jpg',
    alt: 'Burger',
    title: 'Chicken Role',
    heading:'Chicken Kathi Rolls Recipe, also known as chicken frankie or chicken wrap. Spicy chicken filling ...300 grams Boneless Chicken ',
    price: '$18',
  },
  {
    src: 'https://media.istockphoto.com/id/167311970/photo/braised-lamb-chops.jpg?s=612x612&w=0&k=20&c=nacSAi7eNOuTS1NiJZYETh4W9ZIjQ2ZOb84aRdARbg8=',
    alt: 'Ribs',
    title: 'Ribs',
    heading:'Rack of Lamb with Garlic, Rosemary and Peppercorns - Photographed on Hasselblad H3D2-39mb Camer',
    price: '$28',
  },
  {
    src: 'https://media.istockphoto.com/id/505583223/photo/crispy-beef-taco.jpg?s=612x612&w=0&k=20&c=v0V_N-3GijeHVYXkfi6lX18fBPN7LmtF1kyxEZ_q64A=',
    alt: 'Tacos',
    title: 'Tacos',
    heading:'Crispy Taco Shell with Ground Beef, Shredded Lettuce, Tomato and Cheese for these Famous Dish our Dhaba ',
    price: '$15',
  },
  {
    src: 'https://c.ndtvimg.com/2024-05/vahaas8_rajma_625x300_01_May_24.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
    alt: 'Lasagna',
    title: 'Razma Fry',
    heading:'Lazy Skillet Lasagna, Ground Beef, Spinach and Ricotta Ravioli with Garlic French Fry Razma Dish is very TastFull.',
    price: '$22',
  },
];

function Evening() {
  return (
    <div className='text-center'>
      <h1 style={{color:"#0f4c5c"}}>Dinner Page & Purchase your Favourite Dish</h1>
      <div className='evening-items'>
        {eveningItems.map((item, index) => (
          <div key={index} className='evening-item'>
            <img src={item.src} alt={item.alt} />
            <h2>{item.title}</h2>
            <span>{item.heading}</span>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Evening;
