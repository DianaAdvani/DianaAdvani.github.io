import ReactGoogleSlides from "react-google-slides";
import { useState } from "react";

export function TenThousandPeople(){
    const [slides, setSlides] = useState(new Array(9).fill(0));

    return (
        <>
                <div className="project-wrapper">
                <h1>A Solution for Senstive Ears</h1>
        { slides.map((_, index) => (

 <img src={process.env.PUBLIC_URL + `/SensitiveEars-${index+1}.jpg`}/>
        ))} 
        </div>
            {/* <ReactGoogleSlides
                    width="100%"
                    slidesLink="https://docs.google.com/presentation/d/15tLfaBlYxd2MfPzSNv-0EW4DJ-XnWeUNwD2KwU0qs10/"
                    slideDuration={5}
                    showControls
                    loop
                /> */}
        </>
    )
}