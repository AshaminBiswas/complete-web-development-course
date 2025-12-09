import Card from './components/Card'
import './App.css'

function App() {
  

  return (
    <>
       <div className='flex gap-4' >
         <Card 
         title="Buy Python"
          buttonText="Join Now"/>
        <Card title={"Buy Javascript"}/>
        <Card/>
       </div>
    </>
  )
}

export default App
