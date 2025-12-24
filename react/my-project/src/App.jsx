import "./App.css"

import BasicProps from "./component/BasicProps"
import ChildrenProps from "./component/ChildrenProps"
import ComplexProps from "./component/ComplexProps"
import RefProps from "./component/RefProps"
import ThemeProps from "./component/ThemeProps"

function Navigation (){
  const isDark = true
  const section =[
    {id:"basic", label:"Basic Props", icon:"🤫"},
    {id:"children", label:"Children Props", icon:"👨‍👩‍👧‍👦"},
    {id:"complex", label:"Complex Props", icon:"💥"},
    {id:"ref", label:"Ref Props", icon:"🔗"},
    {id:"theme", label:"Theme Props", icon:"🎡"},
  ]

  return(
    <nav className={`sticky top-0 z-50 shadow-md`}>
        <div>
          <div className="flex justify-center items-center p-4">
            {section.map((section)=>(
              <button
              className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mt-2 mr-2 `}
               key={section.id}>
                <span>{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
    </nav>
  )
}


function AppContent(){
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation/>
        <div className="container mx-auto px-4 py-8">
          <header>
            <h1 className="text-3xl text-center font-semibold text-white">React Props Explained</h1>

          </header>
          <div className="space-y-8">
              <div id="basic" className="basic">
                  <BasicProps/>
              </div>
          </div>
          <div className="space-y-8">
              <div id="basic" className="basic">
                  <ChildrenProps/>
              </div>
          </div>
          <div className="space-y-8">
              <div id="basic" className="basic">
                  <ComplexProps/>
              </div>
          </div>
          <div className="space-y-8">
              <div id="basic" className="basic">
                  <RefProps/>
              </div>
          </div>
          <div className="space-y-8">
              <div id="basic" className="basic">
                  <ThemeProps/>
              </div>
          </div>

        </div>
    </div>
  )
}


function App() {
  return (
    <AppContent/>
  )
}

export default App
