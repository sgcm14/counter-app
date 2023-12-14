// import { render, screen  } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas en <PrimeraApp />", () => {
  // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
  //     const saludo = 'Hola, soy Goku';
  //     render(<PrimeraApp saludo={saludo} />);

  //     const mensaje = screen.getByText(saludo);
  //     expect(mensaje).toBeInTheDocument();
  //  })

  test("debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
