import React, {useState} from 'react'

export default function Footer() {

    const [count, setCount] = useState(0)
    
    function additionClick() {
        setCount(prevCount => prevCount + 1)
    }
    function subtractionClick() {
        setCount(prevCount => prevCount - 1)
    }

    {/* prevCount is the previous value of count */}



    return (
        <footer>

            {/*------------------------ Counter section -------------------------*/}

            <div className="counter">
                <h1>{ count }</h1>

                <div className="subtraction operators" onClick={ subtractionClick }>
                    <h1>-</h1>
                </div>
                <div className="addition operators" onClick={ additionClick }>
                    <h1>+</h1>
                </div>
            </div>
            
        </footer>
    )
}