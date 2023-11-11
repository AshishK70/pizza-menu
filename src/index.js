import React from "react";
import ReactDOM from "react-dom/client";

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
        <div>
            <h1>Greetings Ashish!! </h1>
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    )

}
function Pizza() {
    return <div>
        <img src="pizzas/spinaci.jpg" alt="spinaci.jpg"/>
        <h1>Pizza Prosciutto</h1>
        <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);