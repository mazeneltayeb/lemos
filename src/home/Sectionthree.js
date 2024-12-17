import "./home.css"
import bedroom from "./img/319725096_489809826585008_7538600079670832928_n_11zon.jpg"
import livingroom from "./img/398111342_677269547839034_2265390937036909134_n_11zon.jpg"
import diningroom from "./img/428634556_740414248191230_6193606523845390793_n_11zon.jpg"


function Sectionthree (){
    return(
        <div className="row section-three 'd-flex  justify-content-evenly align-items-center mt-5">
                    <span className="col-sm-12 col-lg-12 col-md-12 text-center mb-5">We Offer Top Notch</span>
                    
    <div className="row p-5 justify-content-between">
        <div className="col-lg-3 col-md-6 col-sm-6  text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={bedroom} alt="image"/>
            <span >Pizza</span>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6   text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={livingroom} alt="image"/>
            <span >Burger</span>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6   text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={diningroom} alt="image"/>
            <span >Pasta</span>
        </div>
     
    </div>
    </div>
    )
}
export default Sectionthree;