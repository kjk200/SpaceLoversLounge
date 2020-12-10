import React, { useState, useEffect } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';

const Mars = () => {
    const [hasErrors, setErrors] = useState(false);
    const [marsdata, setMars] = useState({});

    async function fetchData() {
        const res = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=SQN2WmYfw1ZNBsrUoBaAlRlDtdhJHdUo3K041TC6&page=1");
        res.json().then(res => setMars(res)).catch(err => setErrors(err));

    }

    useEffect(() => {
        fetchData();
    }, []);

    const picdata = Object.values(marsdata);

    const displayPhotos = () => {
        if (marsdata) {
            return picdata.map((item, index) => {
                console.log(item);
                return item.map(curr => {
                    console.log(curr);
                    return (
                        <>
                            <h2 className="rover-name">Rover: {curr.rover.name}</h2>
                            <h3 className="camera-name"> Camera: {curr.camera.full_name} </h3>
                            <img className="mars-photos" width="100%" src={curr.img_src} alt={`mars-photos-here`} key={index} />
                        </>

                    );
                });

            });
        }


        else {
            return (
                <div id="nodata"> Oops...no photos to display right now !</div>
            )
        }
    }

    return (
        <div className="display-photos">
            <div className="mars-pic-descrip">
                <h2>Today's Images from Mars</h2>
            </div>
            <Carousel >
                {
                    displayPhotos()
                }
            </Carousel>
        </div>
    );

}
export default Mars;