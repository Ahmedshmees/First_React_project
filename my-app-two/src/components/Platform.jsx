import app_store from "../assets/images/app_store.png";
import play_store from "../assets/images/play_store.png";
const Platform = () => {
    return (
        <div className="platform">
            <h2 data-aos = "zoom-in">Burger King is available for Android and IOS</h2>
            <div className="image">
                <img  data-aos = "fade-up"  src={play_store} alt={play_store.alt} />
                <img data-aos = "fade-up" data-aos-delay = "200"  src={app_store} alt={app_store.alt} />
            </div>
        </div>
    );
}

export default Platform;
