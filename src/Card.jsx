import profilepic from './assets/profile.jpeg';

function Card() {

    return(
        <div className="Card">
            <img className="card-image" src={profilepic} alt="profile picture" />
            <h2>Bro code</h2>
            <p>I'm learning react right now</p>
        </div>
    );
}

export default Card