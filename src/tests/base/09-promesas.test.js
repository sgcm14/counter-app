import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  test("getHeroeByIdAsync debe retornar un Héroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("debe de obtener un error si el héroe por id no existe", (done) => {
    const id = 10;
   // Execute the asynchronous function and store the resulting promise
  const promise = getHeroeByIdAsync(id);

  // Use a single catch block to handle errors
  promise.catch((error) => {
    // Log the error for debugging purposes
    console.log(error);

    // Perform the expectation outside of the catch block
    performExpectation(error);

    // Indicate the completion of the test
    done();
  });

  // Helper function for the expectation
  const performExpectation = (error) => {
    expect(error).toBe("No se pudo encontrar el héroe");
  };
  });
});
