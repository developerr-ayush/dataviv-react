import './App.scss';
import './components/style.scss';
import Banner from './components/header/Banner';
import Cuveebottom from './components/designs/Cuveebottom';
import Leading from './components/landing/Leading';
import Ai from './components/landing/Ai';
import Vr from './components/landing/Vr';
import aiImage from './images/ai/ai-brain.png'
import solimg from './images/side-img/3.png'
import Excellence from './components/landing/Excellence';
import Projects from './components/landing/Projects';
let ai ={
 heading:"Artificial Intelligence" ,
 para:"Artificial Intelligence is used by us and also creating new technologies which uses Artificial Intelligence.",
 carousel:["Computer vision","Image processing","Natural Language Processing"],
 image:aiImage,
}
let solution ={
 heading:"Cutting edge software solution." ,
 para:"Ready to make a mini VR game online, instantly? Use our free-to-try 3D game development software to design, develop and share your mini virtual reality games online in minutes. Or use our software to prototype and storyboard your large gaming projects.",
 carousel:["Blockchain Security Solutions","Cyber Security","High Performance websites and applications"],
 image:solimg,
}
function App() {
  return (
    <div>
      <Banner/>
      <Cuveebottom/>
      <Leading/>
      <Ai content={ai}/>
      <Vr/>
      <Cuveebottom/>
      <Ai content={solution}/>
      <Excellence/>
      <Projects/>
    </div>
  );
}

export default App;
