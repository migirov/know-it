import "./slider.styles.css"
import image1 from '../../media/images_slider/img1.jpg';
import image2 from '../../media/images_slider/img2.jpg';
import image3 from '../../media/images_slider/img3.jpg';
import image4 from '../../media/images_slider/img4.jpg';
import image5 from '../../media/images_slider/img5.jpg';
import image6 from '../../media/images_slider/img6.jpg';
import image7 from '../../media/images_slider/img7.jpg';
import image8 from '../../media/images_slider/img8.jpg';
import image9 from '../../media/images_slider/img9.jpg';
import image10 from '../../media/images_slider/img10.jpg';
import image11 from '../../media/images_slider/img11.jpg';
// import image12 from '../../media/images_slider/img12.jpg';
// import image13 from '../../media/images_slider/img13.jpg';
// import image14 from '../../media/images_slider/img14.JPG';
// import image15 from '../../media/images_slider/img15.JPG';
// import image16 from '../../media/images_slider/img16.JPG';
// import image17 from '../../media/images_slider/img17.JPG';
// import image18 from '../../media/images_slider/img18.JPG';
// import image19 from '../../media/images_slider/img19.JPG';
// import image20 from '../../media/images_slider/img20.JPG';
// import image21 from '../../media/images_slider/img21.JPG';
// import image22 from '../../media/images_slider/img22.JPG';
// import image23 from '../../media/images_slider/img23.JPG';
// import image24 from '../../media/images_slider/img24.JPG';
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
        {
            original: image8,
            thumbnail: image8,
        },
        {
            original: image9,
            thumbnail: image9,
        },
        {
            original: image10,
            thumbnail: image10,
        },
        {
            original: image11,
            thumbnail: image11,
        },
        ];

            return (
                <ImageGallery items={images} autoPlay={true} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} showBullets={true} />
            )
        }
export default Slider;




