import React from 'react'

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {/* <video controls class="d-block w-100" source src="https://images.samsung.com/is/content/samsung/assets/vn/home/2022/Home_Q4_KV_Main-KV_1440x640_pc.mp4" alt="First slide" /> */}
                    <video loop autoPlay muted playsInline class="d-block w-100" >
                        <source src="https://images.samsung.com/is/content/samsung/assets/vn/home/2022/Home_Q4_KV_Main-KV_1440x640_pc.mp4" />
                    </video>
                    <div class="carousel-item__contents">
                        <p>Black Friday Deal</p>
                        <h2>Get up to $400 off select Galaxy Z Series</h2>
                        <p>
                            Get up to $400 off select Galaxy Z Fold4 and up to $1,000 trade-in credit.<sup>θ</sup> Or get up to $200 off select Galaxy Z Flip4 and up to $600 enhanced trade-in credit
                        </p>
                    </div>


                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/images/Banner_2.png" alt="Second slide" />
                    <div class="carousel-item__contents">
                        <h2>Black Friday savings have begun</h2>
                        <p>
                            With great deals across SmartThings-connected devices,
                            bring joy to everyone on your holiday gift list—including yourself
                        </p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/images/Banner_3.png" alt="Third slide" />
                    <div class="carousel-item__contents">
                        <p>Black Friday Deal</p>
                        <h2>Gifts they want,savings you'll love</h2>
                        <p>
                            Holiday prices are here. Save up to 40% on select Bespoke Appliances
                        </p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>


        </div>

    )
}

export default Banner