import './App.css'
import Card from './components/card'
import Steps from './components/steps'

function App() {
  return (
    <div className="conatiner mx-auto  px-4 py-8 max-w-3xl max-h-2xl text-base relative">
      <Steps />
      <Card />
    </div>
  )
}

export default App
