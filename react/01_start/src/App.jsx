import Card from './components/Card'
import Header from './components/Header'
import {Button} from "./lib/utils"
function App() {
  

  return (
    <>
      <Header/>

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
