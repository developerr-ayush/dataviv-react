import React from 'react'
import Ai from './landing/Ai'
import Countries from './landing/Countries'
import Excellence from './landing/Excellence'
import Projects from './landing/Projects'
import Vr from './landing/Vr'
import aiImage from '../images/ai/ai-brain.png'
import solimg from '../images/side-img/3.png'
import Leading from './landing/Leading'

let ai = {
    heading: "Artificial Intelligence",
    para: "Artificial Intelligence is used by us and also creating new technologies which uses Artificial Intelligence.",
    carousel: ["Computer vision", "Image processing", "Natural Language Processing"],
    image: aiImage,
}
let solution = {
    heading: "Cutting edge software solution.",
    para: "Ready to make a mini VR game online, instantly? Use our free-to-try 3D game development software to design, develop and share your mini virtual reality games online in minutes. Or use our software to prototype and storyboard your large gaming projects.",
    carousel: ["Blockchain Security Solutions", "Cyber Security", "High Performance websites and applications"],
    image: solimg,
}

export default function Landing() {
    return (
        <>
        <Leading/>
            <Ai content={ai} />
            <Vr />

            <Ai content={solution} />
            <Excellence />
            <Projects />
            <Countries />
        </>
    )
}
