import AboutMeCard from "../components/AboutMeCard";
import image from "../assets/IMG_2634.jpg"
import Experience from "../components/Experience";
import bnl from "../assets/BNL-logo.png"
import bio from "../assets/bio";


function Home() {
    return (
        <>
            <AboutMeCard imgPath={image} bio={bio}></AboutMeCard>
            <Experience imgPath={bnl} companyName="Brookhaven National Laboratory" title="ML Research Intern" skills="Machine Learning, Data Processing, PyTorch" bullets={bullets}></Experience>
        </>
    )
}

const bullets = [
    "Wrote parsers to efficiently preprocess chemical datasets with 1m+ examples for machine learning purposes in Python",
    "Implemented a transformer achieving 99.7% reconstruction accuracy on SELFIES strings, using Pytorch and Lightning",
    "Allowed other researchers to interact with trained models, test their performance, and visualize outputs with Jupyter Notebooks",
    "Constructing a multimodal alignment model to convert between various chemical data modalities, easing data interpretation",
    "Refactoring my codebase to facilitate adding new modalities, writing documentation, and conducting unit tests using Pytest",
    "Contributing educational Jupyter Notebooks to a machine learning bootcamp hosted by Brookhaven National Laboratory"
]
// personal statement or about me (text card, centered)
// experience (Hushly, BNL) (logo, bullet points)
// projects (card format)




export default Home;