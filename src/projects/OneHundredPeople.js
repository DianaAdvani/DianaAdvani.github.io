import ReactGoogleSlides from "react-google-slides";
import { useState } from "react";

export function OneHundredPeople(){
    const [slides, setSlides] = useState(new Array(6).fill(0));

    return (
        <>

        <div className="project-wrapper">
        <h1>Redesigning Lyft's Fleet Manager Navigation</h1> 
        { slides.map((_, index) => (

            <img src={process.env.PUBLIC_URL + `/OptimizingSiteNav-${index+1}.jpg`}/>
        ))} 
        </div>
            {/* <div className="center">
                <ReactGoogleSlides
                    width="100%"
                    slidesLink="https://docs.google.com/presentation/d/1BUnnkBMilk0yCj9OjXXlr0GB9GYSW40tjABOKe9nQ-U/"
                    slideDuration={5}
                    showControls
                    loop
                />
             </div> */}
        </>
    )
}