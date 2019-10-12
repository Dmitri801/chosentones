import React from 'react'
import { Sampler } from "tone";
import A1 from "../assets/testAudio/Lex808.mp3";
function SamplerTest() {
    const [isLoaded, setLoaded] = React.useState(false);
    const sampler = React.useRef(
        new Sampler(
            { A1 },
            {
                onload: () => {
                    setLoaded(true);
                }
            }
        ).toMaster()
    );

    const handleClick = () => sampler.current.triggerAttack("A1");
    return (
        <div>
            <h1> here we'll test the sampler</h1>
            <button disabled={!isLoaded} onClick={handleClick}>
                DOPE 808
      </button>
        </div>
    )
}

export default SamplerTest;