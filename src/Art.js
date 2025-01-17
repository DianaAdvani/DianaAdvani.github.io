export function Art({clickHandler}) {
    return (
        <div className="content column">
            <button  className="back-link" onClick={() => clickHandler("home")}>Back</button>
            <h2>Animation Sizzle Reel</h2>
            <video controls>
                <source src={`${process.env.PUBLIC_URL}/AnimationSizzleReel.mp4`} type="video/mp4" />
                {/* Optional fallback for unsupported browsers */}
                Your browser does not support the video tag.
            </video>
            
        </div>
    )
}