import ProfilePicture from "./ProfilePic"

function AboutMeCard(props: {imgPath: string, bio: string}) {
    return (
        <div className="about-me-card">
            <ProfilePicture imgPath={props.imgPath}></ProfilePicture>
            <p>{props.bio}</p>
        </div>
    )
}

export default AboutMeCard