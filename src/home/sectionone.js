import "./home.css"


function SectionOne(){
    return(
        <div className="sectionone">
            <div className="row justify-content-between">
            <div className="d-flex flex-md-row flex-column justify-content-center align-items-center col-lg-12 col-md-12  ready mb-5">
                            <span className="mt-3 mx-3">Welcome to </span> 
                            <span className="mt-3 mx-3">Lemo's Restaurant</span>
                        </div>
                        <div className=" sectionone-video col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
                    <video className="object-fit-fill" controls muted loop autoPlay>
                        <source src={require (`./vedio/lemos.mp4`)}/>
                    </video>
                </div>
                <div className="col-lg-6 col-md-6 text-center text-lg-start align-items-center d-flex">
                    <div className="d-flex justify-content-between flex-column ">
                    <p className="m-0 text-sm-center text-md-start mb-2 ">
                        Let your home décor make a grand statement with our luxurious furniture pieces
                        at Castle Furniture Egypt. For over 25 years, we have been recognized for our 
                        distinctive and luxurious furniture sets that are made from the highest quality
                        materials and fabrics. We specialize in upholstery living room sets as well
                        as bedroom sets and many more luxurious furniture pieces to complement your 
                        entire home.
                         </p> 
                         <p className="m-0 text-sm-center text-md-start mt-2 d-none d-lg-block">     
                        Our collection includes Traditional Egyptian, Victorian, European, 
                        and Classic designs. We take great pride in building great and long lasting
                        relationships with our customers. We are service oriented and are ready 
                        to help you take home your next exquisite bedroom or living room set.
                        </p>
                    </div>
                
                    </div>
            
            </div>
        </div>
    )
}
export default SectionOne;