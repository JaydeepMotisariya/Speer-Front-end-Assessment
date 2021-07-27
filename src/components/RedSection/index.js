import "./css/red.css";
import { useState, useRef } from "react"
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import SpeakerImageOne from './images/speaker1.png' 
import SpeakerImageTwo from './images/speaker1.png' 
import Music from './images/music.wav' 

export default function Red() {
  const history = useHistory();
  
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  const [playing, setPlaying] = useState(false);

  const myRef = useRef();
  // start the audio
  const startAudio = () => {
    myRef.current.play();
    setPlaying(true);
  };
  // pause the audio
  const pauseAudio = () => {
    myRef.current.pause();
    setPlaying(false);
  };

  return (
    // horizontal and vertical coordinates  
    <div className="red" onMouseMove={event => {
      setCursorX(event.pageX);
      setCursorY(event.pageY);
    }}>
      <div>
        <h1 className="head">SUPERIOR SOUND</h1>
        <p className="child">Experience live versions of your favourite songs.</p>
        
        <Button className="button-demo" variant="outlined" style={{ width: '12%', height: '8%', color: '#CD5555', backgroundColor: 'white', borderRadius: '30px', fontSize: '1.25rem' }}>
          <strong>SEE DEMO</strong>
        </Button>
       
        <Button className="btn" onClick={() => history.push('/pricing')} variant="outlined" style={{
          backgroundColor: 'white', width: '12%', color: '#CD5555', height: '7%', borderRadius: '30px', fontSize: '1.25rem', bottom: '65vh', left: '30vw',
          position: 'relative'
        }}>
          <strong>TRY IT OUT</strong>
        </Button>
      </div>

      <audio
        ref={myRef}
        src={Music}
      />
    
      {playing ? <div onClick={pauseAudio} className="speaker-div">
        <img className='image' src={SpeakerImageOne} alt="speakers" />
        <img className='image' src={SpeakerImageTwo} alt="speakers" />
      </div> : <div onClick={startAudio} className="speaker-div">
        <img className='image' src={SpeakerImageOne} alt="speakers" />
        <img className='image' src={SpeakerImageTwo} alt="speakers" />
      </div>}
   
      <div className="cursor" style={{ left: cursorX + 'px', top: cursorY + 'px' }}></div>
    </div>
  )
}


