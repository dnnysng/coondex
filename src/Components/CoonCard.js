import React from 'react'

const CoonCard = (props) => {
    const image = props.image
    const traits = props.attributes

    return (
        <div>
            <img src={`https://gateway.ipfs.io/ipfs/${image}`} alt="" />
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