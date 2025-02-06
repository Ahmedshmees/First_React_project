import burger1 from "../assets/images/burger1.png";
import burger2 from "../assets/images/burger2.png";
import burger3 from "../assets/images/burger3.png";
import { useState } from "react";

const Main = () => {
    const [mainImage, setMainImage] = useState(burger1);
    return (
        <div className="main">
            <div className="text">
                <h2 data-aos = "zoom-out">Welcome to <span>Burger</span> King</h2>
                <p data-aos = "fade-up">Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.</p>
                <button data-aos = "fade-up">Order Now</button>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className="image"> 
                <img id="mainImage" src={mainImage} alt="bigimg"/>
            </div>
            <div data-aos = "zoom-in" className="column">
                <img onClick = {() => setMainImage(burger1)}  src={burger1} alt="b1"/>
                <img onClick = {() => setMainImage(burger2)}  src={burger2} alt="b2"/>
                <img onClick = {() => setMainImage(burger3)}  src={burger3} alt="b3"/>
            </div>
        </div>
    );
}

export default Main;
