import React from 'react'

function ClassNaarFunction_Vertaald(){
    const [isLightOn, setIsLightOn] = React.useState('true')

    function handleClick(){
        setIsLightOn(!isLightOn);
    }
    return(
        <>
            <button
                type="button"
                onClick={handleClick}
                value={isLightOn}>
                {isLightOn ? 'AANaGIAN' : 'UIT'}
                </button>
        </>

    )
}
export default ClassNaarFunction_Vertaald