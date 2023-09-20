
import './App.css'
import Component1 from './components/Component1/Component1'
import Component2 from './components/Component2/Component2'
import Component3 from './components/Component3/Component3'
import Component4 from './components/Component4/Component4'
import Component5 from './components/Component5/Component5'
import Component6 from './components/Component6/Component6'
import Component7 from './components/Component7/Component7'

function App() {

  const productData = {
    title: "Iphone",
    description: "black color, iphone 20 pro-max"
  }

  return (
    <div>
          <div className="App">
      <div className="component-container red">
        <h1>component 1</h1>
        {/* put component1 RIGHT here */}
        <Component1/>
      </div>
      <div className="component-container blue">
        <h1>component 2</h1>
        {/* put component2 RIGHT here */}
        <Component2/>
      </div>
      <div className="component-container green">
        <h1>component 3</h1>
        {/* put component3 RIGHT here */}
        <Component3/>
      </div>
      <div className="component-container grey">
        <h1>component 4</h1>
        {/* put component4 RIGHT here */}
        <Component4/>
      </div>
      <div className="component-container purple">
        <h1>component 5</h1>
        {/* put component5 RIGHT here */}
        <Component5/>

      </div>
      <div className="component-container purple">
        <h1>component 6</h1>
        {/* put component5 RIGHT here */}
        <Component6 product={productData}/>
      </div>
      <div className="component-container yellow">
        <h1>component 7</h1>
        {/* put component5 RIGHT here */}
        <Component7/>
      </div>
    </div>

    </div>
  )
}

export default App
