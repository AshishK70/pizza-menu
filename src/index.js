import React from "react";
import ReactDOM from "react-dom/client";

// an example of the JSX use
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Ashish',
    lastName: 'Kumar'
};
// an example of the JSX use till here
function App() {
    return <h1>Greetings {formatName(user)} !! </h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);