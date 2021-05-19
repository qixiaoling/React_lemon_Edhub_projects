import React from 'react'

function Controlled_Multi(){
    const[state, setState] = React.useState({
        personName: '',
        personAge: 0,
        personGender: '',
        personReview: 'google',
        personComment: '',
        personSubscribe: 'false'

    })


    function handleSubmit(e) {
        e.preventDefault()
        console.log(state)
    }
    function handleChange(e) {
        const chozenValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name] : chozenValue
        });
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="PersonName">
                        Naam:
                        <input
                            type="text"
                            id="personName"
                            name="personName"
                            value={state.personName}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="PersonAge">
                        Leeftijd:
                        <input
                            type="number"
                            id="personAge"
                            name="personAge"
                            value={state.personAge}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="personGender">
                        <input
                            type="radio"
                            id="personGender"
                            name="personGender"
                            value="female"
                            // checked={state.personGender==="female"} so it is no need???
                            onChange={handleChange}/>
                            Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="personGender"
                            name="personGender"
                            value="male"
                            // checked={state.personGender==="male"}
                            onChange={handleChange}/>
                        Male
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Jouw review</legend>
                    <br/>
                    <label htmlFor="gevondenMethods">Hoe heb je dit recept gevonden?</label>
                    <select id="gevondenMethods" name="personReview" value={state.personReview}
                            onChange={handleChange}
                    >
                        <option  value="google" >Google</option>
                        <option value="vriend">Vriend</option>
                        <option value="advertentie">Advertentie</option>
                        <option value="anders">Anders</option>
                    </select>
                    <br/>
                    <label htmlFor="comments">
                        Opmerkingen:
                        <br/>
                        <textarea id="comments" name="personComment" cols="30" rows="10" placeholder="Wat vond je van het recept?" value={state.personComment} onChange={handleChange}></textarea>
                    </label>
                    <br/>
                    <label htmlFor="personSubscribe">
                        <input
                            type="checkbox"
                            id="personSubscribe"
                            name="personSubscribe"
                            checked={state.personSubscribe}
                            onChange={handleChange}
                        />
                        Subscribe to our monthly newsletter!
                    </label>
                    <br/>
                    <button type="submit">Versturen</button>
                </fieldset>

            </form>
        </>
    )
}
export default Controlled_Multi