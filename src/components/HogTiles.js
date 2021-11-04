import React, {useState} from 'react'

const HogTiles = ({name, image, weight, specialty, medal}) => {

    const [detailOn, setDetailOn] = useState(false);
    const [hideHog, setHideHog] = useState(false);

    const toggleDetails = () => {
        setDetailOn((detailOn) => !detailOn);
    }

    const handleHide = () => {
        setHideHog((hideHog) => !hideHog)
    }
    
    return (
    <>
    <button onClick={handleHide}>{!hideHog ? "Hide" : "Show Hog"}</button>

    {!hideHog ? <div class="ui card" onClick={toggleDetails}>
        <div class="image">
            <img src={image} alt={name}/>
            <h1 class="header">{name}</h1>
        </div>
  
        <div class="details">
            <p class="weight">{detailOn ? `Weight: ${weight} lbs` : null} </p>
            <p>{detailOn ? specialty : null}</p>
            <p>{detailOn ? `Medal: ${medal}` : null}</p>
        </div>
    </div> : null}
    </>
)
}

export default HogTiles
