import './Song.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { MdPlayArrow, MdStop } from 'react-icons/md'
//----------------------------------------------------------------------------------------
const Song = ({ key, flag, song, stopOthers, updateFlag }) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = (value) => {
        setIsActive(current => value);
    };
    //----------------------------------------------------------------------------------------
    useEffect(() => {
        handleClick(flag);
    }, [flag]);
    //----------------------------------------------------------------------------------------
    return (
        <div className='oneSong'>
            {(isActive === false) &&
                <MdPlayArrow
                    className='oneSongIcon'
                    style={{
                        color: 'rgba(255,255,255,1)',
                    }}
                    onClick={() => {
                        song.audio.loop = true;
                        song.audio.play();
                        song.audio.currentTime = 0;
                        updateFlag(song.id, true);
                        stopOthers(song.id);
                    }} >
                </MdPlayArrow>
            }
            {(isActive === true) &&
                <MdStop
                    className='oneSongIcon'
                    style={{
                        color:
                            'rgba(240, 0,0 ,1)',
                    }}
                    onClick={() => {
                        updateFlag(song.id, false);
                        song.audio.pause();
                        song.audio.currentTime = 0;
                        song.audio.loop = false;
                    }}>
                </MdStop>
            }
            {song.name}
        </div>
    );
}


export default Song;