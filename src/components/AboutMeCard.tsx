import ProfilePicture from "./ProfilePic"
import Markdown from "react-markdown";

function AboutMeCard(props: {imgPath: string, bio: string}) {
    return (
        <div className="about-me-card">
            <ProfilePicture imgPath={props.imgPath}></ProfilePicture>
            <Markdown className="bio">{props.bio}</Markdown>
        </div>
    )
}

export default AboutMeCard