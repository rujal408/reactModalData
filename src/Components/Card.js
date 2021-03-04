import React from 'react'

function Card({ id, title, body, onClick }) {
    return (
        <div className="card" onClick={() => onClick(id)}>
            <div className="card-header">
                <h2>{id}. {title}</h2>
            </div>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,.5)', width: '90%', margin: 'auto' }}></div>
            <div className="card-content">
                {body}
            </div>
        </div>
    )
}

export default Card
