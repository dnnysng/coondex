import React from 'react'

const CoonCard = (props) => {
    const image = props.image
    const attributes = props.attributes
    return (
        <div>
            <img src={`https://gateway.ipfs.io/ipfs/${image}`} alt="" />
            <div className="traits">
                <ul className="trait-list">
                    {attributes.map(trait => {
                        return <li>{`${trait.trait_type}:  ${trait.value}`}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CoonCard