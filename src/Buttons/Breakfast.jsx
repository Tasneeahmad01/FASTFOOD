import React from 'react';
import './Breakfast.css'
const breakfastItems = [
  {
    src: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Bread',
    title: 'Bread',
    heading:'Indian ethnicity, Domestic life, Morning, Breakfast,',
    price: '20',
  },
  {
    src: 'https://media.istockphoto.com/id/2012907101/photo/south-indian-food-uttapam.jpg?s=612x612&w=0&k=20&c=HHKMUzRFLTqKra-AlYdukbBTyqjUv1DWNBrcRi-jScQ=',
    alt: 'Pancakes',
    title: 'Pancakes',
    heading:'Pancakes with berries and maple syrup and nutcracker wether slice.',
    price: '15',
  },
  {
    src: 'https://media.istockphoto.com/id/616219364/photo/vegetable-omelette.jpg?s=612x612&w=0&k=20&c=R7Knjd9Zh97F7D6BZoKvM1g1REUBhDCdL1FtIXJlu74=',
    alt: 'Omelette',
    title: 'Omelette',
    heading:'Stock photo showing a Spanish potato omelette made with beaten',
    price: '12',
  },
  {
    src: 'https://media.istockphoto.com/id/660220622/photo/homemade-pancake-with-raspberries-nuts-and-chocolate-on-a-stone-background.jpg?s=612x612&w=0&k=20&c=4fuYfm1Kk3Cbmq-BblcHRUgspYvjSZTVULfW4HhIKho=',
    alt: 'Waffles',
    title: 'Waffles',
    heading:'Whole wheat Belgium waffle topped with Ice cream top shot',
    price: '18',
  },
  {
    src: 'https://media.istockphoto.com/id/1350770440/photo/salad-with-tasty-dragon-fruit-on-plate.jpg?s=612x612&w=0&k=20&c=AIeyVrq9C3NQfevpJ231SA1PmaLpnD_mlFiZjd9LQYE=',
    alt: 'Fruit Salad',
    title: 'Fruit Salad',
    heading:'Happy Indian woman eating fruit salad at home',
    price: '10',
  },
  {
    src: 'https://images.unsplash.com/photo-1684135347630-82c37ed5c7b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Yogurt',
    title: 'Yogurt',
    heading:'sauce of yogurt with herbs, spices and cucumber close-up in a bowl on the table',
    price: '8',
  },
  {
    src: 'https://media.istockphoto.com/id/1209409892/photo/beautifully-arranged-breakfast-table-with-coffee-orange-juice-pastry-fruits-cereals-and-eggs.jpg?s=612x612&w=0&k=20&c=Prp8hV4P45COMS0kWZ8STYRiXnxIkZ4iCrBHWeAIjv8=',
    alt: 'Croissant',
    title: 'Croissant',
    heading:'Steak and eggs with salad. Zucchini fritters with cold-smoked salmon',
    price: '5',
  },
  {
    src: 'https://images.unsplash.com/photo-1574728001779-b47e55b4f487?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
    alt: 'Coffee',
    title: 'Coffee',
    heading:'white cup with coffee and coffee beans on a background hot black with cups',
    price: '4',
  },
  {
    src: ' https://media.istockphoto.com/id/917980744/photo/homemade-yogurt-with-fresh-blueberry-and-nuts.jpg?s=612x612&w=0&k=20&c=ccf-shye71FD_AmJ26HovF6v_8GmlJ1ttJ_KTDGhL2w=',
    alt: 'Smoothie',
    title: 'Smoothie',
    heading:'almond muffins in bakery shelf , its very sweet and very hotfull with peanut.',
    price: '7',
  },
  {
    src: 'https://images.unsplash.com/photo-1611316529724-fa56a2cb9722?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    alt: 'Muffin',
    title: 'Muffin',
    heading:'Stock photo showing close-up, elevated view of a wooden for these water. ',
    price: '6',
  },
];

function Breakfast() {
  return (
    <div className='text-center'>
      <h1>"Breakfast Page & Purchase your Favourite Dish"</h1>
      <div className='breakfast-items'>
        {breakfastItems.map((item, index) => (
          <div key={index} className='breakfast-item'>
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

export default Breakfast;
