import React from 'react'

const Card = () => {
  return (
    <div className = "card">
        <div className="top">
           <img src="https://images.unsplash.com/photo-1790947167386-4cde0e7a8f2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="broken" />
           <button>save</button>
        </div>
        <h1>amazon</h1>
        <h2>senior ui ux developer</h2>
        <button>Apply now</button>
    </div>
  )
}

export default Card