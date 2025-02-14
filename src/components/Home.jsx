import profilePicture from "../assets/profilePicture.jpg";


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
            <img src={profilePicture} alt="Anderson Profile Picture"/>
        </div>
    </div>
    </div>
    <div className="homeMiddle">
        <h1>Projects</h1>
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
    </div>

    </div>

    </>
    )
}

export default Home;