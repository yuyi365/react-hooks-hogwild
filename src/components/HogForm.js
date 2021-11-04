import React, {useState} from 'react'

const HogForm = ({addHog}) => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [weight, setWeight] = useState("");
    const [medal, setMedal] = useState("")
    const [greased, setGreased] = useState("true")

    const handleSubmit = (e) => {
        e.preventDefault();
        addHog({
            name: name,
            specialty: specialty,
            greased: greased,
            weight: weight,
            "highest medal achieved": medal,
            image: image
        })
        setName("")
        setImage("")
        setSpecialty("")
        setWeight("")
        setMedal("")
        setGreased("")
        e.target.reset()
    }

    return (
        <>
        <h1>Add A Hog</h1>
        <form className="NewHog" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
        </label>
        <br></br>
        <br></br>
        <label>
          Weight (lbs):
          <input type="number" name="weight" onChange={(e) => setWeight(e.target.value)}/>
        </label>
        <br></br>
        <br></br>
        <label>
          Specialty:
          <input type="text" name="specialty" onChange={(e) => setSpecialty(e.target.value)}/>
        </label>
        <br></br>
        <br></br>
        <label for="grease"> Grease Level </label>
            <select name="grease" onChange = {(e) => {
                setGreased(e.target.value === "true")
            }}>
            <option value="true">Greased</option>
            <option value="false">Not Greased</option>
            </select>
        <br></br>
        <br></br>
        <label for="medal"> Highest Medal Achieved </label>
            <select name="medal" onChange = {(e) => setMedal(e.target.value)}>
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platnium">Platnium</option>
            </select>
        <br></br>
        <br></br>
        <label>
          Image Link:
          <input type="text" name="image" onChange={(e) => setImage(e.target.value)}/>
        </label>
        <br></br>
        <br></br>
        <button type="submit">Add Hog</button>
      </form>
    </>
    )
}

export default HogForm
