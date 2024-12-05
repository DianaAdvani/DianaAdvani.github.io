import "./project.css"
import Magnifier from "react-magnifier";
export function PassionProject() {
    return (
        <>
            <h1>Making a Movie</h1>
            <div className="img-wrapper">
                <Magnifier src={process.env.PUBLIC_URL + '/IndiansProcessComic.jpg'} width="80%" zoomFactor={.6} mgWidth={200} mgHeight={200} mgShowOverflow={false} mgShape="square" />
                {/* <img src={process.env.PUBLIC_URL + '/IndiansProcessComic.jpg'} />; */}
                <iframe 
                    src={process.env.PUBLIC_URL + '/Animated_Indians_Version_5.pdf'}
                    width="50%" 
                    height="auto" 
                    title="Example Website"
                />
            </div>
        </>
    )
}