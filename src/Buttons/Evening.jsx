import React from 'react';
import './Evening.css';

const eveningItems = [
  {
    src: 'https://media.istockphoto.com/id/186238838/photo/cheesy-pasta.jpg?s=612x612&w=0&k=20&c=di-e5FoHhUpFG7Ur5JkUSUWeSk08p8e2X3U2IFXObI0=',
    alt: 'Pasta',
    title: 'Pasta',
    heading:'Penne pasta with white sauce and truffle , italian , chiness and bangalies food',
    price: '$25',
  },
  {
    src: 'https://media.istockphoto.com/id/490523585/photo/shish-kebabs-on-wooden-skewers.jpg?s=612x612&w=0&k=20&c=zhX7jESZSWgKcy-urUzM01-tK5BSZ837N5eg9tL7wrA=',
    alt: 'Steak',
    title: 'Steak',
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
    src: 'https://media.istockphoto.com/id/171269199/photo/pizza.jpg?s=612x612&w=0&k=20&c=nRCU2WKavU9lO9Nbyqu6KeTptIKI62VAZLNV1TnHdrU=',
    alt: 'Pizza',
    title: 'Pizza',
    heading:'"Handmade pizza with chicken, mushrooms, cheese and tomatoes on wooden table.',
    price: '$20',
  },
  {
    src: 'https://media.istockphoto.com/id/2151663808/photo/home-made-hamburger-with-beef-onion-tomato-lettuce-and-cheese-fresh-burger-close-up-on-wooden.jpg?s=612x612&w=0&k=20&c=j4oOkaOuaZ_YBH6JMcuXss4rCZJ8Q24n0nbpXfv5aUs=',
    alt: 'Burger',
    title: 'Burger',
    heading:'Home made hamburger with beef, onion, tomato, lettuce and cheese.',
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
    heading:'Crispy Taco Shell with Ground Beef, Shredded Lettuce, Tomato and Cheese ',
    price: '$15',
  },
  {
    src: 'https://media.istockphoto.com/id/1599073206/photo/lazy-skillet-lasagna-with-ravioli.jpg?s=612x612&w=0&k=20&c=sZ7i7ozXsueu1rdhgkvavNFLGf3oILHXUZe-To9E--c=',
    alt: 'Lasagna',
    title: 'Lasagna',
    heading:'Lazy Skillet Lasagna, Ground Beef, Spinach and Ricotta Ravioli with Garlic Bread',
    price: '$22',
  },
];

function Evening() {
  return (
    <div className='text-center'>
      <h1 style={{color:"orange"}}>Evening Page & Purchase your Favourite Dish</h1>
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
