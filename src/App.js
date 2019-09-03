import React, {Component} from 'react';
import './App.css';
import CustomButton from './components/common/button'

class App extends Component {
    render() {
        return (
            <div className="App">
              <header className="App-header">
                  <CustomButton/>
              </header>
            </div>
        );
    }
}

export default App;