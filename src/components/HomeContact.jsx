import gitHubImage from "../assets/github.png";
import linkedInImage from "../assets/linkedIn.jpg";
import emailImage from "../assets/email.jpeg";


function HomeContact() {


    return(
        <>
        <div className="homeContacts">
        <p className="imageTanTri">{">>"}</p>
        <a href="https://github.com/mganderson13" target="_blank" className="contactLink">
        <div className="contactCard">
            <img src={gitHubImage}/>
            <p>Check out my code</p>
             <p className="contactLargeText">GitHub</p>
        </div>
        </a>
        
        <a href="https://www.linkedin.com/in/marianne-anderson13/" target="_blank" className="contactLink">
        <div className="contactCard">
            <img src={linkedInImage}/>
            <p>Connect with me on</p>
             <p className="contactLargeText">LinkedIn</p>
        </div>
        </a>        
        
        <a href="mailto:mganderson13@gmail.com" target="_blank" className="contactLink">
        <div className="contactCard">
            <img src={emailImage}/>
            <p>Contact me through</p>
             <p className="contactLargeText">Email</p>
        </div>
        </a>
        </div>
        </>
    )
}

export default HomeContact;