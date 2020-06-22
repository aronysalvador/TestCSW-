import React, {useEffect, useState} from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import clienteAxios from '../../config/axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import * as d3 from 'd3';
import data from '../../monumentos_historicos_extracto.csv';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapView = () => {

    //Todos las Coordanadas
    //const { coordenadas } = useCoordenadas();
    let dataCSV = [];
    const [coordenadas, guardarCoordenadas] = useState([]);
    const [csv, guardarCSV] = useState([]);

    useEffect(()=>{
        d3.csv(data, function(data) 
            { 
                dataCSV.push(data); 
            }
        );
      const obtenerCoordenadas = async () => {
        try {
          const response = await clienteAxios.get(); 
          
          const data = response.data.features;

          guardarCoordenadas(data);
          
        } catch (error) {
            console.log('No se puedo traer la data')
        }
      }
  
      obtenerCoordenadas();
      
      guardarCSV(dataCSV);

          
     }, []);
       
     
      
    const styleMap = { "width": "100%", "height": "60vh" };
    const position2 = [-70.651292865, -33.437933957, 0]
        return (
            <Map
              style={styleMap}
              center={position2}
              zoom={14}>
      
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
    
                {coordenadas.map(coordenadas => ( 
                     <Marker  key={coordenadas.properties.id} position={coordenadas.geometry.coordinates}>
                        <Popup>
                        {csv.filter(csv => csv.id == coordenadas.properties.id).map(filteredName => (
                           
                            <a>{filteredName.name}<br></br> {coordenadas.geometry.coordinates}</a>
                           
                        ))}
                        </Popup>
                    </Marker>
                                      
                  ))}

            </Map>
          )      

  }
  
  export default MapView;