import "./ProjectHomepage.css";
import {useState} from 'react';
import { Icon } from './Icon';
import { PassionProject } from "./projects/PassionProject";
import { OnePerson } from "./projects/OnePerson";
import { OneHundredPeople } from "./projects/OneHundredPeople";
import { TenThousandPeople } from "./projects/TenThousandPeople";

 

export function ProjectHomepage({clickHandler}) {
    const [project, setProject] = useState(undefined);
    return(
        <div>
        <button onClick={() => { project === undefined ? clickHandler("home") : setProject(undefined)}}>Back</button>
        { project == undefined && 
            <>
                <h1>Design Projects</h1>
                <p> An industrial design instructor told me* the best way to learn design was to try to solve problems for people.</p>
                <p> To start, find one person with a problem and solve it for them. </p>
                <p> Then, find 100 people with the same problem and solve that problem.</p>
                <p> Finally, find a problem that affects 10,000 people and solve it. </p>
                <div className="center">
                <div className="projects-display">

                    {/* <button onClick={() => setProject("passion")}>
                        <Icon name="Passion Project"/>
                    </button> */}
                    <button onClick={() => setProject("1_person")}>
                        <Icon name="Solving 1 person's problem"/>
                    </button>
                    <button onClick={() => setProject("100_people")}>
                        <Icon name="Solving 100 people's problem"/>
                    </button>
                    <button onClick={() => setProject("10000_people")}>
                        <Icon name="Solving 10,000 people's problem"/>
                    </button>
                    </div>
                </div>
                <p> *I talked with an industrial designer as part of my project to interview 50 people to try to figure out what I want to do next in my career. See more of that project here.</p>
            </>
        }

        { project == "passion" && <PassionProject/>}
        { project == "1_person" && <OnePerson/>}
        { project == "100_people" && <OneHundredPeople/>}
        { project == "10000_people" && <TenThousandPeople/>}

        
        </div>


    )
}