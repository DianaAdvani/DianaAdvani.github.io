import ReactGoogleSlides from "react-google-slides";

export function OneHundredPeople(){
    return (
        <>
        <h1>Redesigning Lyft's Fleet Manager Navigation</h1> 


            <div className="center">
                <ReactGoogleSlides
                    width="100%"
                    slidesLink="https://docs.google.com/presentation/d/1BUnnkBMilk0yCj9OjXXlr0GB9GYSW40tjABOKe9nQ-U/"
                    slideDuration={5}
                    showControls
                    loop
                />
             </div>
        </>
    )
}