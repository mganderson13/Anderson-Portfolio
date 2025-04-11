import profilePicture from "../assets/profilePicture.jpg";
import HomeContact from "./HomeContact";
import HomeProjects from "./HomeProjects";

function Home() {
    return (
    <>
    <div className="homeMain">

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
    <div className="homeMiddle">
    <div className="homeProjectsTitle">
        <h1>Personal Projects</h1>
        <div className="accentLine"></div>
        <div className="subtitle">
            <h2>Educator<span id="opaqueAnd">&</span>Coder</h2>
            <p>= intuitive, helpful, and fun programs</p>
        </div>
        <div id="paragraphText">
            <p>Combining my background in education with my developer skills I have created several applications
            that aid students in math skills, engage book lovers, and provide teachers with classroom support.</p>
        </div>
        </div>
        <HomeProjects />
    </div>

    <div className="homeEnd">
        <HomeContact />
    </div>
    </div>

    </>
    )
}

export default Home;