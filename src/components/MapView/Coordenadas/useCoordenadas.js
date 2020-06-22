import React, { useEffect, useState } from 'react';
import clienteAxios from '../../../config/axios';

const useCoordenadas = () => {
    const [coordenadas, guardarCoordenadas] = useState([]);
    useEffect(()=>{
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
          
     }, []);

    return {
        coordenadas
    }
}

export default useCoordenadas;