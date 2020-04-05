import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='dib pa4 ma3 grow bw3 shadow-4 avenir navy'>
            <img alt="robots" src={`https://robohash.org/${id}?set=set4`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;