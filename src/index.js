import React from "react";
import ReactDOM from "react-dom/client";
// imoprt css file
import './index.css'


// an example of the JSX use
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Ashish',
//     lastName: 'Kumar'
// };
// // an example of the JSX use till here
// function App() {
//     return <h1>Greetings {formatName(user)} !! </h1>
// }

// using data for pizza
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )

}

// header function
function Header() {
    return (
        <header className="header">
            <h1 >Pizza Factory </h1>
        </header>
    )
}

// menu function
function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];

    const numPizzas = pizzas.length
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            
            {numPizzas > 0 ? (
                <>
                    <p>Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various ...</p>
                <ul className="pizzas">
                    {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)}
                </ul>
                </>
            ) : <p>Still working on menu, please come back later</p>}



            {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, ham, aragula, and burrata cheese' photoName='pizzas/spinaci.jpg' price={10} />
            <Pizza name='Pizza fungi' ingredients='Tomato, mushroom, ham, aragula, and burrata cheese' photoName='pizzas/funghi.jpg' price={15} /> */}
        </main>
    )
}

// props passing data from cosnt data to Pizza component

function Pizza({pizzaObj}) {
    // check whats in props by console
    console.log(pizzaObj);
    // if pizza is sold out we can return null using line below
    // if (pizzaObj.soldOut) return null;
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {/* example of ternary operator on span below */}
                <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
            </div>
        </li>
    )
}

// footer function
function Footer() {
    const hour = new Date().getHours();
    console.log(hour);
    const openHour = 10;
    const closeHour = 22;
    // if(hour>=openHour && hour<=closeHour){
    //     alert("We're Open")
    // }else{
    //     alert("We're Close")
    // }
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return (
        <footer className="footer">{isOpen ? (
            <Order closeHour={closeHour} openHour={openHour}/>
        ) : <p>Currently closed, Happly to welcome between {openHour}:00 and {closeHour}:00 pm</p>}</footer>
    )
}

function Order({closeHour, openHour}) {
    return (
        <div className="order">
            <p>We're Open from {openHour}:am until {closeHour}:00 come visit us.</p>
            <button className="btn">Order</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);