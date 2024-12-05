import "./project.css"
import Magnifier from "react-magnifier";
import { useState } from "react";
import ReactGoogleSlides from "react-google-slides";

export function PassionProject() {
    const [zoomFactor, setZoomFactor] = useState(.6);

    const handleSliderChange = (e) => {
        setZoomFactor(parseFloat(e.target.value));
    };

    return (
        <>
            <h1>Making a Movie</h1>

            <div className="img-wrapper" >
                <div>
                    <Magnifier src={process.env.PUBLIC_URL + '/IndiansProcessComic.jpg'} width="100%" zoomFactor={zoomFactor} mgWidth={200} mgHeight={200} mgShowOverflow={false} mgShape="square" />
                    <div className="zoom-slider">
                        <label htmlFor="zoom">Magnifier's zoom:</label>
                        <input
                            type="range"
                            id="zoom"
                            name="zoom"
                            min="0.6"
                            max="3"
                            step="0.1"
                            value={zoomFactor}
                            onChange={handleSliderChange}
                        />
                    </div>
                </div>
         
                <iframe 
                    src={process.env.PUBLIC_URL + '/Animated_Indians_Version_5.pdf'}
                    width="100%" 
                        height="auto" 
                        title="Example Website"
                />

            </div>
            <div className="horizontal-divider"></div>
            <div className="center">
                <ReactGoogleSlides
                    width="100%"
                    slidesLink="https://docs.google.com/presentation/d/1-Z2T8WkfMigMD76iBfy_DcTGhpjSdtY14e4NwWYJ7cg/"
                    slideDuration={5}
                    showControls
                    loop
                />
             </div>

        </>
    )
}