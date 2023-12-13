const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const customContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  // console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.545,
      lng: -12.544,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = customContext(persona);

console.log(nombreClave, anios, lat, lng);
