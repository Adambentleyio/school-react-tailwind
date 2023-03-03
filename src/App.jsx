import Header from './components/Header'
import HeroImage from './components/HeroImage'
import GridLinks from './components/GridLinks'
import FooterWithColumns from './components/FooterWithColumns'

function App() {

  return (
    <div className="App">
      <Header />
      <HeroImage
      title="Primary and pre-school in the heart of the city"
      buttonText="Find out more" />
      <GridLinks />
      <FooterWithColumns />
    </div>
  )
}

export default App
