const Testimonial = () => {
   
    const settings = {
        dots: false,
        arrows: false,
        loop: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        mobileFirst: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
      };
    
    const TestimonialData = [
        {
          id: 1,
          name: "Samuel",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/101/101",
          aosDelay:100,
        },
        {
          id: 2,
          name: "John Doe",
          testimonial:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/102/102",
          aosDelay:200,
        },
        {
          id: 3 , 
          name: "Smith",
          testimonial:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/103/103",
          aosDelay:300,
        },
      ];
    return (

        <div className="testimonial">
            <span data-aos="fade-up">What our customers say</span>
            <h2 data-aos="fade-up">Testimonial</h2>
            <p data-aos="fade-up">Beef bacon with fresh sauted mushroom, cheddar cheese, meet , and creamy mayonnaise.</p>
            <div className="Slider" {...settings}>
                  {TestimonialData.map (element => {
                    return (
                        <div data-aos="fade-up" data-aos-delay={element.aosDelay} key={element.id}>
                            <img src={element.img} alt={element.name} />
                            <p>{element.testimonial}</p>
                            <h3>{element.name}</h3>
                        </div>
                    );
                  })}
            </div>
        </div>
            

        
    );
}

export default Testimonial;
