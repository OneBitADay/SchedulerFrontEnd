import './index.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Nav/>
        <Footer/>
    </React.StrictMode>
)