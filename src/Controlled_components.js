import React from 'react'

function Controlled(){
    const[personName, setPersonName] = React.useState('');
    const[personAge, setPersonAge] = React.useState('');
    const[personReview, setPersonReview] = React.useState('');
    const[personComment, setPersonComment] = React.useState('');


    function formSubmit(e){
        e.preventDefault();
       console.log(personName, personAge, personReview, personComment)


    }
    return(
        <>
            <form onSubmit={formSubmit}>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="PersonName">
                        Naam:
                        <input
                            type="text"
                            id="PersonName"
                            name="Name"
                            value={personName}
                            onChange={(e)=>setPersonName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="PersonAge">
                        Leeftijd:
                        <input
                            type="number"
                            id="PersonAge"
                            name="Age"
                            value={personAge}
                            onChange={(e)=>setPersonAge(e.target.value)}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Jouw review</legend>
                    <br/>
                    <label htmlFor="gevondenReview">Hoe heb je dit recept gevonden?</label>
                    <select id="gevondenReview" name="gevondenReview" value={personReview}
                            onChange={(e)=>setPersonReview(e.target.value)}
                           >
                        <option  value="google" >Google</option>
                        <option value="vriend">Vriend</option>
                        <option value="advertentie">Advertentie</option>
                        <option value="anders">Anders</option>
                    </select>
                    <br/>
                    <label htmlFor="comments">
                        Opmerkingen:
                        <textarea id="comments" name="comments" cols="30" rows="10" placeholder="Wat vond je van het recept?" value={personComment} onChange={(e)=>setPersonComment(e.target.value)}></textarea>
                    </label>
                    <button type="submit">Versturen</button>
                </fieldset>

            </form>
        </>
    )
}
export default Controlled