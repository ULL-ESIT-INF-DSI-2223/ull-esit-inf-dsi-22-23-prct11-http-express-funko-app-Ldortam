import 'mocha'
import { expect } from "chai";
import { getFunkos, existeID } from "../../src/ejercicio/Files.js";
import { Funko, Tipo, Genero } from '../../src/ejercicio/Funko.js';

describe('Pruebas para callback asincronos de la funko-app', () => {
  it('Prueba de getFunkos', (done) => {
    getFunkos('pepe', (_, data) => {
      if (data) {
        expect(data[0].getID()).to.be.equal(1);
        done();
      }
    });
  });


  it('Prueba de existeID', (done) => {
    let coleccion: Funko[] = [new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", Tipo.Pop, Genero.TV, "Marvel", 1, false, "", 15.5)];
    existeID(coleccion, 1, (_, data) => {
      if (data) {
        expect(data).to.be.equal(0);
        done();
      }
    });
  });
});