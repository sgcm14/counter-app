import { getHeroeById, getHeroeByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Héroes", () => {
  test("debe de retornar un héroe por id", () => {
    const id= 1;
    const heroe = getHeroeById(id);
    
    const heroeData = heroes.find(heroeResponse => heroeResponse.id === id);

    expect(heroe).toEqual(heroeData)
  });

  test("debe de retornar un undefined si id no existe", () => {
    const id= 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("debe de retornar un arreglo con los héroes de DC", () => {
    const owner= "DC";
    const heroes = getHeroeByOwner(owner);
    
    heroes.filter((heroe)=>heroe.owner===owner);
    const heroeData = heroes.filter((heroeItem)=>heroeItem.owner===owner);

    expect(heroes).toEqual(heroeData)
  });

  test("debe de retornar un arreglo con los héroes de Marvel", () => {
    const owner= "Marvel";
    const heroes = getHeroeByOwner(owner);
    
    // heroes.filter((heroe)=>heroe.owner===owner);

    // expect(heroes).toHaveLength(2);
    expect(heroes.length).toBe(2);
  });
});
