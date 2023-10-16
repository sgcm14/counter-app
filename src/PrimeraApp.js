// import React, { Fragment } from "react";
import PropTypes from "prop-types";

// FC
const PrimeraApp = ({saludo, subtitulo}) => {
  // const saludo ={
  //   nombre: 'Fernando',
  //   edad: 34
  // }

  // if(!saludo){
  //   throw new Error('El saludo es necesario');
  // }

  return (
    // <Fragment>
    //   <h1>Hola Mundo!</h1>
    //   <p>Mi primera aplicación</p>
    // </Fragment>
    <>
      {/* <h1>{JSON.stringify(saludo, null, 3)}</h1> */}
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo"
}

export default PrimeraApp;
