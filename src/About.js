import "./About.css";

export function About({clickHandler}) {
    return(
        <div className="content column">
        <button className="back-link" onClick={() => clickHandler("home")}> Back</button>
        <div className="layout">

            <div className="box">
                <div className="swap">
                    <img src={process.env.PUBLIC_URL + '/DesigningDuck1.png'} id="f1" alt="Designing Duck 1" />
                    <img src={process.env.PUBLIC_URL + '/DesigningDuck2.png'} id="f2" alt="Designing Duck 2" />
                </div>  
                <div className="text">
                    <h4>Designer</h4>
                    <p> Employing Design Thinking in my job as a developer, personal projects, and freelance work</p>
                    <p> Google UX Certficate Course</p>
                    <p> Worked cloesly with designers and UX researchers at Lyft.</p>

 
                </div>

                
            </div>

            <div className="box">
                <div className="swap">
                    <img src={process.env.PUBLIC_URL + '/CodingDuck1.png'} id="f1" alt="Coding Duck 1" />
                    <img src={process.env.PUBLIC_URL + '/CodingDuck2.png'} id="f2" alt="Coding Duck 2" />
                </div>                
                <div className="text">
                    <h4>Developer</h4> 
                    <p> Undergraduate degree in Computer Science from UC Berkeley.</p>
                    <p> Executor. Colloboartor. Mentor.</p>
                    <p> 3 years working on B2B webapps for Marriott Hotels as a fullstack engineer</p>
                    <p> 3 years working on a Fleet Management system for Lyft as a frontend engineer</p>
                    <p> Working as a freelancer for startups, small companies and researchers.</p>
                </div>


            </div>
            <div className="box">
                <div className="swap">
                    <img src={process.env.PUBLIC_URL + '/ArtingDuck1.png'} id="f1" alt="Arting Duck 1" />
                    <img src={process.env.PUBLIC_URL + '/ArtingDuck2.png'} id="f2" alt="Arting Duck 2" />
                </div> 
                <div className="text">
                    <h4>Creative</h4>
                    <p>Minor in creative writing from UC Berkeley</p>
                    <p> Taken four graduate classes in Writing for Film and Television</p>
                    <p>Always working on a creative project</p>
                    <p>Painter. Animator. Drawer. Builder. Writer.</p>
                </div>
                
            </div>

        </div>


        </div>
    )

}