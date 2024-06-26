import React, { useState } from 'react'
import { BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants'
import './intro.css'
const Intro = () => {

  const vidRef = React.useRef();
  const [playVideo,setPlayVideo] = useState(false);

  const clickHandler = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if(playVideo)
    {
      vidRef.current.pause();
    }
    else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__intro'>
      <video src={meal} ref={vidRef} type='video/mp4' loop controls={false} muted></video>
      <div className='app__intro-overlay flex__center'>
        <div className='app__intro-overlay_circle flex__center' onClick={clickHandler}>
          {playVideo ? (<BsPauseFill color='#fff' fontSize={30}></BsPauseFill>) : (<BsFillPlayFill color='#fff' fontSize={30}></BsFillPlayFill>)}
        </div>
      </div>
    </div>
  )
}

export default Intro
