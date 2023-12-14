import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe de mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el valor por defecto de 100", () => {
    const numero = 100;
    const wrapper = shallow(<CounterApp value={numero} />);

    const textoParrafo = wrapper.find("p").text();

    expect(parseInt(textoParrafo)).toEqual(numero);
  });

  test("debe de incrementar con el botón +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("p").text();

    expect(parseInt(counterText)).toEqual(11);
  });

  test("debe de disminuir con el botón -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("p").text();

    expect(parseInt(counterText)).toEqual(9);
  });

  test("debe de colocar el valor por defecto con el btn reset", () => {
    const numero = 105;
    const wrapper = shallow(<CounterApp value={numero} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const counterText = wrapper.find("p").text();

    expect(parseInt(counterText)).toEqual(numero);
  });
});
