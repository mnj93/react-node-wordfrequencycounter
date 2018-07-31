import React, { Component } from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import MainView from './components/MainView';
class App extends Component {
  render() {
    return (
       <div className="container" style={{marginTop:'5%'}}>
           <div className="row">
             <div className="col-md-3"></div>
             <div className="col-md-6">
                <MainView />
             </div>
             <div className="col-md-3"></div>
           </div>
       </div>
    );
  }
}

export default App;
