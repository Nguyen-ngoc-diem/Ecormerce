import React from 'react'

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {/* <video controls className="d-block w-100" source src="https://images.samsung.com/is/content/samsung/assets/vn/home/2022/Home_Q4_KV_Main-KV_1440x640_pc.mp4" alt="First slide" /> */}
                    <video loop autoPlay muted playsInline className="d-block w-100" >
                        <source src="https://images.samsung.com/is/content/samsung/assets/vn/home/2022/Home_Q4_KV_Main-KV_1440x640_pc.mp4" />
                    </video>
                    <div className="carousel-item__contents ">
                        <p>Black Friday Deal</p>
                        <h2>Get up to $400 off select Galaxy Z Series</h2>
                        {/* <a className="btn btn--carousel" href="/products">
                            <span className="btn-title">BUY NOW</span>
                        </a> */}
                    </div>


                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/images/Banner_2.png" alt="Second slide" />
                    <div className="carousel-item__contents">
                        <h2>Black Friday savings have begun</h2>
                        <p>
                            With great deals across SmartThings-connected devices,
                            bring joy to everyone on your holiday gift list—including yourself
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/images/Banner_3.png" alt="Third slide" />
                    <div className="carousel-item__contents">
                        <h2>Gifts they want,savings you'll love</h2>
                        <p>
                            Holiday prices are here. Save up to 40% on select Bespoke Appliances
                        </p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>


        </div>

    )
}

export default Banner