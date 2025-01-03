import ReactGoogleSlides from "react-google-slides";
export function OnePerson(){
    return (
        <>
            <h1>Artist's Website</h1>

            <div className="center ">

            <img style={{width: "50%", flexGrow: 1}} src={process.env.PUBLIC_URL + '/ArtistWebsiteHomepage.png'} />

            <div className="center vertical flex-one">

                
                <div className="block">
                <h5>Problem</h5>
                <p> An artist wanted to redesign her website which is accessed on desktop and mobile. </p>
                </div>

                <div className="block">
                <h5>Goal</h5>
                <p>Reduce website pain points and have website be the main platform to display work. </p>
                </div>

                <div className="block">
                <h5>Motivation</h5>
                <p>To better understand the design process as a Frontend software engineer.</p> 
                </div>
            </div>
            </div>

            <div className="center">

                <ReactGoogleSlides
                    width="100%"
                    slidesLink="https://docs.google.com/presentation/d/1jfeoFewvkCmYuPbdVdj2JmCKr5gGNLniZHgof5ge6t8/"
                    slideDuration={5}
                    showControls
                    loop
                />
             </div>
        </>
    )
}