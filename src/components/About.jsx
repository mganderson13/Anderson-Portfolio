import profilePicture from "../assets/profilePicture.jpg";

function About() {

    return(
        <>
        <div className="homeTop">
            <div className="homeTitle">
            <h1 id="titleDeveloper">{"<Developer />"}</h1>
            <h1 id="titleAnd">&</h1>
            <h1 id="titleTeacher">{"<Teacher />"}</h1>
            </div>
            <div className="homeImages">
                <div className="imageGreenRect"></div>
                <p className="imageBlackTri">{"<"}</p>
                <div className="imagePicture">
                    <img src={profilePicture} alt="Anderson Profile"/>
                </div>
            </div>
        </div>
        <div className="homeProjectsTitle">
        <h1>About Marianne</h1>
        <div className="accentLine"></div>
        <div className="subtitle">
            <h2>Educator<span id="opaqueAnd">&</span>Coder</h2>
            <p>= communicative, thoughtful, skilled</p>
        </div>
        <div id="paragraphText">
            <p>My coding skills are strengthened by my experience and training as an educator. A natural love and adeptness for software development, coupled with an ability to see problems from different angles, 
                ask the right questions, and effectively communicate make me an artful developer.</p>
        </div>
        </div>
        <div id="aboutPageText">
            <p>I live in Chicago, but am originally from Portland, Maine, and consider myself a <span className="aboutPageSpan">Mainer</span> through and through. Growing up I had a passion for math and science, discovered my love of reading and sociology in college, and took my enthusiasm for all learning and became a teacher. 
                <br></br>It is not an understatement when people say that Elementary School teachers do it all. Instructing students in every subject, problem solving in every moment, and facilitating community between students and other educators makes for talented, kind, and hard-working professionals. 
            </p>
            <br></br>
            <p> Being a teacher has made me <span className="aboutPageSpan"> adaptable, analytical, compassionate, and multifacited.</span>
            </p>
            <br></br>
            <p>I enjoy working collaboratively with fellow software engineers and am an invaluable team member thanks to my ability to clearly express myself, understand others, and mediate commmunication issues. 
                I love learning new technologies, problem solving, and those satisfying "ah, ha!" moments when things click. I am not afraid to <span className="aboutPageSpan">step up and lead</span> or play a supporting role on the team to make sure things get done.
            </p>
            <br></br>
            <p>When I'm not learning and practicing coding skills I am playing with my cat, playing fast paced and fun board games with friends, and engaging in activism around Chicago.</p>
            <br></br>
            <p>My well rounded and diverse skills make me an excellent and <span className="aboutPageSpan">unique software developer</span>, and a perfect member for any team.</p>
        </div>
        </>
    )

}

export default About;