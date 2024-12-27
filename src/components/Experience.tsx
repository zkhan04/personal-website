// experience:
// company logo
// title
// skills
// bullet points for what we did (bullet points)

function Experience(props: experiencePropType) {
    return (
        <div className="experience">
            <img src={props.imgPath} alt="" className="company-logo" />
            <p className="company-name">{props.companyName}</p>
            <p className="experience-title">{props.title}</p>
            <p className="skills">{props.skills}</p>
            <ul>
                {props.bullets.map((bullet, idx) => {
                    return <li key={idx} className="experience-bullet">{bullet}</li>
                })}
            </ul>
        </div>
    )
}

type experiencePropType = {
    imgPath: string,
    companyName: string,
    title: string,
    skills: string,
    bullets: string[]
}

export default Experience;