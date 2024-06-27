import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Navbar from './Navbar';
 

const MenuItem = ({ item }) => (
    <div className = "menu-item">
        <img src={item.images} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
    </div>
);

const App = () => {
    const [items, setItems] = useState(Menu);

    const filterMenu = (category) => {
        const updatedItems = Menu.filter((currElem) => currElem.category === category);
        setItems(updatedItems);
    };

    return (
        <>
        <div> 
            <Navbar/>
             
        </div>
            
            <div className="menu-tab container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterMenu("breakfast")}>Breakfast</button>
                   <a href="/Lunch"> <button className="btn btn-warning" onClick={() => filterMenu("lunch")}>Lunch</button></a>
                    <button className="btn btn-warning" onClick={() => filterMenu("evening")}>Evening</button>
                    <button className="btn btn-warning" onClick={() => filterMenu("dinner")}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
                </div>
            </div>
            <br />
            <div>
              <marquee className="Trend">Visit my website and your surprised</marquee>
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
                    <a href="/Orderpage">
                     <button className="btn btn-success">Order Now</button>
                    </a>

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

export default App;
