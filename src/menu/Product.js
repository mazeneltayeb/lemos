
import pizaaData from "./pizza.json"
import  pastaData from "./pasta.json"
import burgerData from "./burger.json"
import ReactWhatsapp from 'react-whatsapp';
export function Pizza(){
    return(
        <div className="product row gap-3 justify-content-center">
                {pizaaData.map((product)=>{
                       if(product.category === "pizza")
                    {
                        return(
                                                   <div key={product.id} className="product-card col-lg-2 col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center">
                                                       <div className="product-img">
                                                       <img src={require (`${product.img}`)} alt={product.alt} className=""/>
                                                   </div>
                                                   <div className="product-info text-center">
                                                        <div>
                                                        <p>{product.name}</p>
                                                        <p>{product.title}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-around">
                                                            <div className="d-flex flex-column">
                                                                <span className="mb-1">L :{product.lprice} EP</span>
                                                                <span>M:{product.mprice} EP</span>
                                                            </div>
                                                        <ReactWhatsapp className="whatsapp-details" number="+201002955430" message={`Hello castlefurnitureegypt i ask for this Product name: ${product.name}, Code: ${product.id} `} >
                                                        Order Now
                                                        </ReactWhatsapp>
                                                        </div>
                                                   </div>
                                               </div>
                                                   )
                    }
                }) }
        </div>
    )
}

export function Pasta(){
    return(
        <div className="product row gap-3 justify-content-center">
                {pastaData.map((product)=>{
                    if(product.category === "pasta")
                    {
                       return(
                                                  <div key={product.id} className="product-card col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                                      <div className="product-img">
                                                      <img src={require (`${product.img}`)} alt={product.alt} className=""/>
                                                  </div>
                                                  <div className="product-info text-center">
                                                        <div>
                                                        <p>{product.name}</p>
                                                        <p>{product.title}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-around">
                                                        <div className="d-flex flex-column">
                                                                <span className="mb-1">L :{product.lprice} EP</span>
                                                                <span>M:{product.mprice} EP</span>
                                                            </div>
                                                        <ReactWhatsapp className="whatsapp-details" number="+201002955430" message={`Hello castlefurnitureegypt i ask for this Product name: ${product.name}, Code: ${product.id} `} >
                                                        Order Now
                                                        </ReactWhatsapp>
                                                        </div>
                                                   </div>
                                              </div>
                                                  )
                    }
                  
                }) }
           
          
 
        </div>
    )
}
export function Burger(){
    return(
        <div className="product row gap-3 justify-content-center">
                {burgerData.map((product)=>{
                    if(product.category === "burger")
                    {
                       return(
                                                  <div key={product.id} className="product-card col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                                      <div className="product-img">
                                                      <img src={require (`${product.img}`)} alt={product.alt} className=""/>
                                                  </div>
                                                  <div className="product-info text-center">
                                                        <div>
                                                        <p>{product.name}</p>
                                                        <p>{product.title}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-around">
                                                        <div className="d-flex flex-column">
                                                                <span className="mb-1">L :{product.lprice} EP</span>
                                                                <span>M:{product.mprice} EP</span>
                                                            </div>
                                                        <ReactWhatsapp className="whatsapp-details" number="+201002955430" message={`Hello castlefurnitureegypt i ask for this Product name: ${product.name}, Code: ${product.id} `} >
                                                        Order Now
                                                        </ReactWhatsapp>
                                                        </div>
                                                   </div>
                                              </div>
                                                  )
                    }
                  
                }) }
           
          
 
        </div>
    )
}







  {/* <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
           <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div> */}
            // export default Product;