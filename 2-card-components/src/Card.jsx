import profilePic from './assets/aral.jpeg';

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Aral Sen</h2>
            <p className="card-text">I love coding!</p>
        </div>
    );
}

export default Card