import React, {useState} from 'react'
import HogTiles from './HogTiles'
import Filter from './Filter'
import HogForm from './HogForm'
import Sort from './Sort'

const HogHolder = ({hogs}) => {

    const [allHogs, setAllHogs] = useState(hogs);
    const [greaseSelect, setGreaseSelect] = useState("All");
    const [sort, setSort] = useState("select")

    const handleSelection = (e) => {
        setGreaseSelect(e.target.value);
    }

    const addHog = (newHog) => {
        setAllHogs([
            ...allHogs, newHog
        ])
    }

    const handleSort= (e) => {
        setSort(e.target.value)
        
        if (sort === "name-a") {
            hogs.sort(function(a, b) {
                let nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                    return -1;
                    }
                    if (nameA > nameB) {
                    return 1;
                    }
                    return 0;
                });
            }
        else if (sort === "name-b") {
            hogs.sort(function(a, b) {
                let nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                    });
            }
        else if (sort === "weight-a") {
            hogs.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
        } else if (sort === "weight-d") {
            hogs.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));

    }
    }

    const hogsToDisplay = allHogs.filter((hog) => {
        return greaseSelect === "All" || hog.greased.toString() == greaseSelect;
    })

    const mapHogs = hogsToDisplay.map((hog) => {

        {
            return <HogTiles key={hog.name}
            name={hog.name}
            image={hog.image}
            specialty={hog.specialty}
            weight={hog.weight}
            medal={hog["highest medal achieved"]}
        />
        } 
    })

    return (
        <>
            <Sort handleSort={handleSort}/>
            <div>
                {mapHogs}
            </div>
            <Filter handleSelection={handleSelection}/>
            <HogForm addHog={addHog}/>
        </>
    )
}

export default HogHolder
