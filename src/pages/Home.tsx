import AboutMeCard from "../components/AboutMeCard";
import image from "../assets/IMG_2634.jpg"

function Home() {
    return (
        <AboutMeCard imgPath={image} bio="Hello, my name is Zayd!"></AboutMeCard>
    )
}

// personal statement or about me (text card, centered)
// experience (Hushly, BNL) (logo, bullet points)
// projects (card format)


export default Home;