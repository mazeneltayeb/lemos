import "./home.css"
import mohamed from "./img/images_11zon.jpg"
import ahmed from "./img/images (2)_11zon.jpg"
import mostfa from "./img/images (1)_11zon.jpg"


function Chefs (){
    return(
        <div className="row section-three 'd-flex  justify-content-evenly align-items-center mt-5">
                    <span className="col-sm-12 col-lg-12 col-md-12 text-center mb-5">The Best Chefs</span>
                    
    <div className="row p-5 justify-content-between">
        <div className="col-lg-3 col-md-6 col-sm-6  text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={mohamed} alt="image"/>
            <span >Mohamed</span>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6   text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={ahmed} alt="image"/>
            <span >Ahmed</span>
            {/* <p>mazen mazen mazen mazen mazern mazen mazemn</p> */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6   text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={mostfa} alt="image"/>
            <span >Mostfa</span>
        </div>
     
    </div>
    </div>
    )
}
export default Chefs;