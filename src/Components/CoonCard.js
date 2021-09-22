import React, { useState } from 'react'

const CoonCard = (props) => {
    const coonImage = props.coonImage
    const zombieImage = props.zombieImage
    const traits = props.attributes
    const [count, setCount] = useState(0)
    function increase() {
        setCount(prevCount => prevCount + 1)
        console.log(count)
    }

    return (
        <div onClick={increase} className="card">
            {count % 2 === 0 ?
                <img src={`https://gateway.ipfs.io/ipfs/${zombieImage}`} alt="" /> :
                <img src={`https://gateway.ipfs.io/ipfs/${coonImage}`} alt="" />
            }
            <div className="traits">
                <ul className="trait-list">
                    {traits.map(trait => {
                        if (trait.trait_type !== "ASCENDENCY") {
                            return <li>{`${trait.trait_type}:  ${trait.value}`}</li>
                        } else {
                            return console.log("Harbinger")
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CoonCard