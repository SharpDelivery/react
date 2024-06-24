import Navbar from './Navbar';
import Home from './Home';
import './index.css'

function App(){
     return(
          <div className="App">
               <Navbar/>
               <div className="content">
                    <Home/>
               </div>
          </div>
     );

}

export default App;