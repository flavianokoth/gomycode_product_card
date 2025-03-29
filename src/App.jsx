import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';

const firstName = "Flavian"; 

const App = () => {
    return (
        <div className="container mt-5 text-center">
            <Card className="p-3">
                <Image />
                <Name />
                <Price />
                <Description />
            </Card>
            <h3 className="mt-3">Hello, {firstName ? firstName : "there!"}</h3>
            {firstName && <img src="https://via.placeholder.com/100" alt="User" />}
        </div>
    );
};

export default App;
