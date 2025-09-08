import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [
    'rgb(180 180 40 / 70%)',
    'rgba(215 211 40/ 70%)',
    'rgba(190,170,40,0.7)',
    'rgb(200 190 40 / 70%)',
    'rgba(150,150,40,0.7)',
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