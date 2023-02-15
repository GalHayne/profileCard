import 'bulma/css/bulma.css'
import ProfileCard from "./profileCard";
import AlexaImage from "./images/alexa.png"
import ContanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistans</p>
                </div>

            </section>


            <div className="container">
                <sections className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title='Alexa' handle="@alexa99" img={AlexaImage} desc="Alexa was created by Amazon and helps you buy things" />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title='Cortana' handle="@cortana32" img={ContanaImage} desc="Cortana was maded by Microsoft, who knows what it does?" />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title='Siri' handle="@siri01" img={SiriImage} desc="Siri was made by Apple and is being phased out" />
                        </div>
                    </div>
                </sections>
            </div>
        </div>
    )
}

export default App