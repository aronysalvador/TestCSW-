import React from 'react';
import './App.css';


import MapView from './components/MapView/MapView';

const App = () => {

    return (
      <div className="container-fluid">
        <div className="row m-3">
          <div className="col-12">
            <h1 className="text-center">Test CSW Consultores Ambientales</h1>
          </div>
        </div>
        <div className="row m-12">
          
          <div  className="col-sm-12 col-sm-offset-4 col-md-12 col-md-offset-3">

            <MapView/>
          </div>
        </div>
        <div className="col-12">
            <h3 className="text-center">Desarrollado por Arony Salvador </h3>
            <h6 className="text-center">salvadorarony@gmail.com</h6>
            <h6 className="text-center">+56937721849</h6>
          </div>
      </div>
    )
}
export default App;
