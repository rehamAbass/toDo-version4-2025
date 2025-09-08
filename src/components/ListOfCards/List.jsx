import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [
    'rgba(140, 200 ,40,0.7)',
    'rgba(200 ,200,40,0.7)',
    'rgba(190,200,40,0.7)',
    'rgba(140 ,200 ,40,0.7)',
    'rgba(110,190,40,0.7)',
]

let colors = GreenColors;
const Lists = ({ cards, deleteCard, deleteTaskServer, addTaskServer, toggleTaskServer }) => {
    let rand = Math.floor(Math.random(100));
    return (
        <div className='lists'>
            {cards &&
                cards.map((card, i) => {
                    return (
                        <Card
                            key={i}
                            card={card}
                            deleteCard={deleteCard}
                            deleteTaskServer={deleteTaskServer}
                            toggleTaskServer={toggleTaskServer}
                            addTaskServer={addTaskServer}
                            background={colors[(rand + i) % colors.length]}
                        />
                    )
                })
            }
        </div>
    )
}

export default Lists;