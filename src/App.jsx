import Hero from "./Hero";
import About from "./About.jsx";
import Chart from "./Chart.jsx";
import './App.scss';
export default () => {
  return (
    <div className='App'>
      <Hero />
      <About />
      <Chart />
    </div>
  )
}