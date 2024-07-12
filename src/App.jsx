
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Menu from './Menu';
import Navbar from './Navbar';
import OrderPage from './OrderPage'; 
import Lunch from './Buttons/Lunch';
import Breakfast from './Buttons/Breakfast';
import Evening from './Buttons/Evening';
import Dinner from './Buttons/Dinner'
import Error from './Error';

const MenuItem = ({ item }) => (
    <div className="menu-item">
        <img src={item.images} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
    </div>
);

const Home = () => {
    const [items, setItems] = useState(Menu);

    const filterMenu = (category) => {
        const updatedItems = Menu.filter((currElem) => currElem.category === category);
        setItems(updatedItems);
    };

    return (
        <>
            <Navbar />
            <div className="menu-tab container">
                <div className="menu-tab d-flex justify-content-around">
                    <Link to="/breakfast">
                        <button className="btn btn-warning" onClick={() => filterMenu("breakfast")}>Breakfast</button>
                    </Link>
                    <Link to="/lunch">
                        <button className="btn btn-warning" onClick={() => filterMenu("lunch")}>Lunch</button>
                    </Link>
                    <Link to="/evening">
                        <button className="btn btn-warning" onClick={() => filterMenu("evening")}>Evening</button>
                    </Link>
<Link to = "/dinner">
            <button className="btn btn-warning" onClick={() => filterMenu("dinner")}>Dinner</button>
            </Link>
            <Link to = "/error">
                    <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
                    </Link>
                </div>
            </div>
            <br />
            <div>
                <Link to="/OrderPage">
                    <marquee className="Trend">Visit my website and be surprised</marquee>
                </Link>
            </div>
            <div className="menu-items container-fluid mt-2">
                <div className="row">
                    <div className="col-11 mx-auto">
            <div className="row my-5">
                {items.map((elem) => {
                  const { id, images, name, description, price } = elem;
                                return (
                 <div key={id} className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
              <div className="row item-inside">
             <div className="col-12 col-md-12 col-lg-4 img-div">
             <img src={images} alt={name} className="img-fluid" />
                                            </div>
             <div className="col-12 col-md-12 col-lg-8">
              <div className="main-title pt-4 pb-3">
             <h1>{name}</h1>
            <p>{description}</p>
          </div>
            <div className="menu-price-book">
     <div className="price-book-divide d-flex justify-content-between">
         <h2>{price}</h2>
   <Link to="/OrderPage">
       <button className="btn btn-success">Order Now</button>
   </Link>
                 </div>
    <p>*Prices may vary on selected date.</p>
         </div>
                 </div>
            </div>
        </div>
            );
        })}
    </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

const App = () => {
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/OrderPage" element={<OrderPage />} />
                <Route path="/lunch" element={<Lunch />} />

                <Route path="/breakfast" element={<Breakfast />} />  
                <Route path="/evening" element={<Evening />} />  

                <Route path="/dinner" element={<Dinner />} />
                <Route path="/error" element={<Error />} />  
            </Routes>
        </Router>
    );
};

export default App;
