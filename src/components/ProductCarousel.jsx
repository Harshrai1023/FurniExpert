import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProductCarousel = ({ images }) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto top-[50px]">
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                useKeyboardArrows={true}
                swipeable = {true}
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.map((img) => (
                    <img className="p-1"
                        // key={img.id}
                        src={img}
                        // alt={img.attributes.name}
                    />
                ))}
                {/* <img src="/assets/images/p2.png" />
                <img src="/assets/images/p3.png" />
                <img src="/assets/images/p4.png" />
                <img src="/assets/images/p5.png" />
                <img src="/assets/images/p6.png" />
                <img src="/assets/images/p7.png" /> */}
            </Carousel>
        </div>
    );
};

export default ProductCarousel;
