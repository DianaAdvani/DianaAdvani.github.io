import ReactGoogleSlides from "react-google-slides";

export function TenThousandPeople(){
    return (
        <>
            <h1>Earring Connectors</h1>
            <ReactGoogleSlides
                    width="100%"
                    slidesLink="https://docs.google.com/presentation/d/15tLfaBlYxd2MfPzSNv-0EW4DJ-XnWeUNwD2KwU0qs10/"
                    slideDuration={5}
                    showControls
                    loop
                />
        </>
    )
}