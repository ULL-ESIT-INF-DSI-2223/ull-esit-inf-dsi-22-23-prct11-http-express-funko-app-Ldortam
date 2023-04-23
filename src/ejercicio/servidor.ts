import express from 'express';
import { rm } from 'fs';
import { ResponseType } from "./types.js";
import { Funko, convertGenero, convertTipo} from "./Funko.js";
import { getFunkos, existeID, writeFunkoFile } from './Files.js';


const app = express();
let funkoPops: Funko[] = [];

app.get('/funkos', (req, res) => {
  if (!req.query.user) {
    res.send({
      error: 'Debe especificarse un usuario',
    });

  } else {
    getFunkos(req.query.user as string, (err, data) => {
      if (err) {
        res.send({
          error: err,
        });
      } else {
        if(data !== undefined) {
          funkoPops = data;
        }

        if (!req.query.ID) { // List
          console.log('Un cliente quiere listar');
          let respuesta: ResponseType = {type: 'list', success: true, funkos: []};
          for(let i = 0; i < funkoPops.length; i++) {
            respuesta.funkos?.push({ID: funkoPops[i].getID(), nombre: funkoPops[i].getNombre(), descripcion: funkoPops[i].getDescripcion(), tipo: funkoPops[i].getTipo(), genero: funkoPops[i].getGenero(), franquicia: funkoPops[i].getFranquicia(), numeroFranquicia: funkoPops[i].getNumero(), exclusivo: funkoPops[i].getExclusivo(), caracteristicasEspeciales: funkoPops[i].getCaracteresEspeciales(), valorMercado: funkoPops[i].getValorMercado()});
          }

          res.send({
            respuesta: respuesta
          });
        }

        else { // Show
          console.log('Un cliente quiere mostrar');
          let respuesta: ResponseType = {type: 'show', success: false, funkos: []};
          
          existeID(funkoPops, Number(req.query.ID), (err, index) => {
            if (!err) {
              if (index !== -1) { // Existe el ID
                respuesta.success = true;
                respuesta.funkos?.push({ID: funkoPops[index].getID(), nombre: funkoPops[index].getNombre(), descripcion: funkoPops[index].getDescripcion(), tipo: funkoPops[index].getTipo(), genero: funkoPops[index].getGenero(), franquicia: funkoPops[index].getFranquicia(), numeroFranquicia: funkoPops[index].getNumero(), exclusivo: funkoPops[index].getExclusivo(), caracteristicasEspeciales: funkoPops[index].getCaracteresEspeciales(), valorMercado: funkoPops[index].getValorMercado()});
              }

              res.send({
                respuesta: respuesta
              });
            }
          })
        }
      }
    });
  }
});


app.post('/funkos', (req, res) => {
  if (!req.query.user || !req.query.ID || !req.query.nombre || !req.query.descripcion || !req.query.tipo || !req.query.genero || !req.query.franquicia || !req.query.numeroFranquicia || !req.query.exclusivo || !req.query.caracteristicasEspeciales || !req.query.valorMercado) {
    res.send({error: 'Debe especificarse un usuario, un ID y todos los parametros de un funko: nombre, descripcion, tipo, genero, franquicia, numeroFranquicia, exclusivo, caracteristicasEspeciales y valorMercado',
    });

  } else {
    console.log('Un cliente quiere añadir');
    getFunkos(req.query.user as string, (err, data) => {
      if (err) {
        res.send({
          error: err,
        });
      } else {
        if(data !== undefined) {
          funkoPops = data;
        }

        let respuesta: ResponseType = {type: 'add', success: false};

        existeID(funkoPops, Number(req.query.ID), (err, index) => {
          if (!err) {
            if (index === -1) { // NO existe el ID
              respuesta.success = true;
              writeFunkoFile(String(req.query.user), Number(req.query.ID), String(req.query.nombre), String(req.query.descripcion), convertTipo(String(req.query.tipo)), convertGenero(String(req.query.genero)), String(req.query.franquicia), Number(req.query.numeroFranquicia), Boolean(req.query.exclusivo), String(req.query.caracteristicasEspeciales), Number(req.query.valorMercado), (error) => {});
            }
            
            res.send({
              respuesta: respuesta
            });
          }
        });
      }
    });
  }
});


app.delete('/funkos', (req, res) => {
  if (!req.query.user || !req.query.ID) {
    res.send({
      error: 'Debe especificarse un usuario y un ID',
    });

  } else {
    console.log('Un cliente quiere eliminar');
    getFunkos(req.query.user as string, (err, data) => {
      if (err) {
        res.send({
          error: err,
        });
      } else {
        if(data !== undefined) {
          funkoPops = data;
        }

        let respuesta: ResponseType = {type: 'remove', success: false};
        existeID(funkoPops, Number(req.query.ID), (err, index) => {
          if(!err) {
            if (index !== -1) { // Existe el ID
              respuesta.success = true;
              rm('./data/' + req.query.user + '/' + req.query.ID + '.json', () => {});
            }

            res.send({
              respuesta: respuesta
            });
          }
        });
      }
    });
  }
});


app.patch('/funkos', (req, res) => {
  if (!req.query.user || !req.query.ID || !req.query.nombre || !req.query.descripcion || !req.query.tipo || !req.query.genero || !req.query.franquicia || !req.query.numeroFranquicia || !req.query.exclusivo || !req.query.caracteristicasEspeciales || !req.query.valorMercado) {
    res.send({error: 'Debe especificarse un usuario, un ID y todos los parametros de un funko: nombre, descripcion, tipo, genero, franquicia, numeroFranquicia, exclusivo, caracteristicasEspeciales y valorMercado',
    });

  } else {
    console.log('Un cliente quiere modificar');
    getFunkos(req.query.user as string, (err, data) => {
      if (err) {
        res.send({
          error: err,
        });
      } else {
        if(data !== undefined) {
          funkoPops = data;
        }

        let respuesta: ResponseType = {type: 'update', success: false};
        existeID(funkoPops, Number(req.query.ID), (err, index) => {
          if (!err) {
            if (index !== -1) { // Existe el ID
              respuesta.success = true;
              writeFunkoFile(String(req.query.user), Number(req.query.ID), String(req.query.nombre), String(req.query.descripcion), convertTipo(String(req.query.tipo)), convertGenero(String(req.query.genero)), String(req.query.franquicia), Number(req.query.numeroFranquicia), Boolean(req.query.exclusivo), String(req.query.caracteristicasEspeciales), Number(req.query.valorMercado), (error) => {});
            }
            
            res.send({
              respuesta: respuesta
            });
          }
        });
      }
    });
  }
});

app.get('*', (_, res) => {
  res.status(404).send();
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});