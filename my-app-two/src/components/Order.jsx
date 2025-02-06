import burger5 from "../assets/images/burger5.png";
const Order = () => {
    return (
        <div className="order">
            <div data-aos="flip-up" className="image">
                <img src={burger5} alt={burger5.alt} />
            </div>
            <div className="texts">
                <h2  data-aos="fade-up" >Buy 2 burger get 1 free</h2>
                <span  data-aos="fade-up">Cozy days call for cozy flavors. Add some warm, cheesy winter</span>
                <p  data-aos="fade-up">Save big with the $5 Duo or $7 Trio! Mix and match your faves—want 3 Bacon Cheeseburgers? You got it. Craving 2 Original Chicken Sandwiches? Go for it. It’s your choice—so Have It Your Way</p>
                <button  data-aos="fade-up">Order Now</button>
            </div>
        </div>
    );
}

export default Order;
