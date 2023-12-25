import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DietBanner = () => {
    const imageStyle = {
        width: '60%', // Set the desired width
        height: 'auto', // Maintain the aspect ratio
    };

    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/FqjtBPy/Diet-Tracker-1.jpg" alt="Diet Banner 1" style={imageStyle} />
            </div>
            <div>
                <img src="https://i.ibb.co/kD7b7D1/Diet-Tracker-2.jpg" alt="Diet Banner 2" style={imageStyle} />
            </div>
            <div>
                <img src="https://i.ibb.co/6H0YZPs/Diet-Tracker-3.jpg" alt="Diet Banner 3" style={imageStyle} />
            </div>
            <div>
                <img src="https://i.ibb.co/XjMBZxh/Diet-Tracker-4.jpg" alt="Diet Banner 4" style={imageStyle} />
            </div>
            <div>
                <img src="https://i.ibb.co/s6RCCH8/Diet-Tracker-5.jpg" alt="Diet Banner 5" style={imageStyle} />
            </div>
            <div>
                <img src="https://i.ibb.co/Sv9H5td/Diet-Tracker-6.jpg" alt="Diet Banner 6" style={imageStyle} />
            </div>
        </Carousel>
    );
};

export default DietBanner;
