import burger1 from "../assets/images/burger2.png";
import burger2 from "../assets/images/burger3.png";
const Services = () => {
    const list = [
        {id : 1 , img:burger1 , title : "Burger " , description : "Beef bacon with fresh sautéed mushroom, cheddar cheese , and creamy mayonnaise.." , aosDelay: "200"},
        {id : 2 , img:burger2 , title : "Chiken Burger " , description : "Beef bacon with fresh sautéed mushroom, cheddar cheese , and creamy mayonnaise..", aosDelay: "300"},
        {id : 3 , img:burger1 , title : "Veg Burger " , description : "Beef bacon with fresh sautéed mushroom, cheddar cheese , and creamy mayonnaise..", aosDelay: "500"}
    ];
    return (
        <div className="services">
            <div data-aos = "fade-up" className="text">
                <span>Our Services</span>
                <h2>Services</h2>
                <p>Beef bacon with fresh sauted mushroom, cheddar cheese, meet , and creamy mayonnaise.</p>
            </div>
            <div className="cards">
                {list.map(item => (
                <div data-aos = "fade-up" data-aos-delay={item.aosDelay} key={item.id}>
                    <img src={item.img} alt={list.title} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
