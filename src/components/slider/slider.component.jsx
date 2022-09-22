import "./slider.styles.css"
import image1 from '../../media/images_slider/750_9819.JPG';
import image2 from '../../media/images_slider/810_3596.JPG';
import image3 from '../../media/images_slider/750_9625.JPG';
import image4 from '../../media/images_slider/750_9942.JPG';
import image5 from '../../media/images_slider/810_3582.JPG';
import image6 from '../../media/images_slider/750_9703.JPG';
import image7 from '../../media/images_slider/750_9714.JPG';
import React from "react";
import ImageGallery from 'react-image-gallery';
const Slider = (props) => {
    const images = [
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image3,
            thumbnail: image3,
        },
        {
            original: image4,
            thumbnail: image4,
        },
        {
            original: image5,
            thumbnail: image5,
        },
        {
            original: image6,
            thumbnail: image6,
        },
        {
            original: image7,
            thumbnail: image7,
        },
        ];

            return (
                <ImageGallery items={images} autoPlay={true} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} showBullets={true} />
            )
        }
export default Slider;




