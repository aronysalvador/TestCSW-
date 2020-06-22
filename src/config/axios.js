import axios from 'axios';

const  clienteAxios = axios.create({

    //baseURL:  process.env.API_BACK,
    baseURL:  'https://cors-anywhere.herokuapp.com/https://cswcl.github.io/fake-api/monumentos_historicos_extracto.geojson',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8"
      }

  });

export default clienteAxios;  

