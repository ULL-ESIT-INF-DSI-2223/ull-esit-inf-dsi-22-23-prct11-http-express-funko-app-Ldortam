# Informe de práctica
#### Autora: Laura Dorta Marrero

## Índice
1. [Resumen](#resumen)
2. [Coveralls](#coveralls)
2. [Práctica](#práctica)
3. [Modificación](#modificación)
4. [Conclusiones](#conclusiones)
5. [Referencias](#referencias)

## Resumen
<!-- qué se hace y para que se hace -->
Esta práctica consiste en implementar un servicio HTTP escrito con Express. Para ello se reutilizará parte del código de la Práctica 9 sobre los FunkoPops, además de utilizar elementos nuevos.

## Coveralls

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct11-http-express-funko-app-Ldortam/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct11-http-express-funko-app-Ldortam?branch=main)

## Práctica
<!-- Explicar desarrollo de la prácica -->
En concreto, un Funko vendrá descrito por los siguientes elementos mínimos de información que deberán ser almacenados:

- ID. Debe ser un identificador único del Funko.

- Nombre. Debe ser una cadena de caracteres.

- Descripción. Debe ser una cadena de caracteres.

- Tipo. Debe ser un enumerado con valores como, por ejemplo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros.

- Género. Debe ser un enumerado con valores como, por ejemplo, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras.

- Franquicia. Debe ser una cadena de caracteres como, por ejemplo, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.

- Número. Debe ser el número identificativo del Funko dentro de la franquicia correspondiente.

- 
Exclusivo. Debe ser un valor booleano, esto es, verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario.

- Características especiales. Debe ser una cadena de caracteres que indique las característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea.

- Valor de mercado. Debe ser un valor numérico positivo.

### Funko.ts
```typescript
export enum Tipo {Pop = 'Pop!', PopRides = 'Pop! Rides', VynilSoda = 'Vynil Soda', VynilGold = 'Vynil Gold'}
export enum Genero {Animacion = 'Animación', TV = 'Películas y TV', Videojuegos = 'Videojuegos', Deportes = 'Deportes', Musica = 'Música', Anime ='Anime'}
/**
 * Clase Funko
 * @param ID Identificador único del Funko
 * @param nombre Nombre del Funko
 * @param descripcion Descripcion del Funko
 * @param tipo Tipo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros
 * @param genero Genero, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras
 * @param franquicia Franquicia, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
 * @param numero Número identificativo del Funko dentro de la franquicia correspondiente
 * @param exclusivo Verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario
 * @param caracteristicasEspeciales Característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea
 * @param valorMercado Precio del Funko
 */
export class Funko {
    private ID_:number
    private nombre_: string
    private descripcion_: string
    private tipo_: Tipo
    private genero_: Genero
    private franquicia_: string
    private numero_: number
    private exclusivo_: boolean
    private caracteristicasEspeciales_: string
    private valorMercado_: number

    /**
     * Constructor de la clase
     * @param ID Identificador único del Funko
     * @param nombre Nombre del Funko
     * @param descripcion Descripcion del Funko
     * @param tipo Tipo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros
     * @param genero Genero, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras
     * @param franquicia Franquicia, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
     * @param numero Número identificativo del Funko dentro de la franquicia correspondiente
     * @param exclusivo Verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario
     * @param caracteristicasEspeciales Característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea
     * @param valorMercado Precio del Funko
     */
    constructor(ID:number, nombre: string, descripcion: string, tipo: Tipo,
                genero: Genero, franquicia: string, numero: number, exclusivo: boolean,
                caracteristicasEspeciales: string, valorMercado: number) {
        this.ID_ = ID;
        this.nombre_ = nombre
        this.descripcion_ = descripcion
        this.tipo_ = tipo
        this.genero_ = genero
        this.franquicia_ = franquicia
        this.numero_ = numero
        this.exclusivo_ = exclusivo
        this.caracteristicasEspeciales_ = caracteristicasEspeciales
        if (valorMercado >= 0) {
            this.valorMercado_ = valorMercado
        } else {
            throw new Error('El valor del Mercado ser positivo')
        }
    }
    /**
     * Método para cambiar valor del elemento
     * @param ID Identificador único del Funko
     * @returns ID
     */
    setID(ID: number) {
        this.ID_ = ID
        return this.ID_
    }
    /**
     * Método para cambiar valor del elemento
     * @param nombre Nombre del Funko
     * @returns nombre
     */
    setNombre(nombre: string) {
        this.nombre_ = nombre
        return this.nombre_
    }
    /**
     * Método para cambiar valor del elemento
     * @param descripcion Descripcion del Funko
     * @returns descripcion
     */
    setDescripcion(descripcion: string) {
        this.descripcion_ = descripcion
        return this.descripcion_
    }
    /**
     * Método para cambiar valor del elemento
     * @param tipo Tipo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros
     * @returns tipo
     */
    setTipo(tipo: Tipo) {
        this.tipo_ = tipo
        return this.tipo_
    }
    /**
     * Método para cambiar valor del elemento
     * @param genero Genero, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras
     * @returns genero
     */
    setGenero(genero: Genero) {
        this.genero_ = genero
        return this.genero_
    }
    /**
     * Método para cambiar valor del elemento
     * @param franquicia Franquicia, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
     * @returns franquicia
     */
    setFranquicia(franquicia: string) {
        this.franquicia_ = franquicia
        return this.franquicia_
    }
    /**
     * Método para cambiar valor del elemento
     * @param numero Número identificativo del Funko dentro de la franquicia correspondiente
     * @returns numero
     */
    setNumero(numero: number) {
        this.numero_ = numero
        return this.numero_
    }
    /**
     * Método para cambiar valor del elemento
     * @param exclusivo Verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario
     * @returns exclusivo
     */
    setExclusivo(exclusivo: boolean) {
        this.exclusivo_ = exclusivo
        return this.exclusivo_
    }
    /**
     * Método para cambiar valor del elemento
     * @param caracteristicasEspeciales Característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea
     * @returns caracteristicasEspeciales
     */
    setCaracteresEspeciales(caracteristicasEspeciales: string) {
        this.caracteristicasEspeciales_ = caracteristicasEspeciales
        return this.caracteristicasEspeciales_
    }
    /**
     * Método para cambiar valor del elemento
     * @param valorMercado Precio del Funko
     * @returns valorMercado
     */
    setValorMercado(valorMercado: number) {
        this.valorMercado_ = valorMercado
        return this.valorMercado_
    }

    /**
     * Método para mostrar valor del elemento
     * @returns ID
     */
    getID() {
        return this.ID_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns nombre
     */
    getNombre() {
        return this.nombre_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns descripcion
     */
    getDescripcion() {
        return this.descripcion_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns tipo
     */
    getTipo() {
        return this.tipo_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns genero
     */
    getGenero() {
        return this.genero_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns franquicia
     */
    getFranquicia() {
        return this.franquicia_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns numero
     */
    getNumero() {
        return this.numero_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns exclusivo
     */
    getExclusivo() {
        return this.exclusivo_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns caracteristicasEspeciales
     */
    getCaracteresEspeciales() {
        return this.caracteristicasEspeciales_
    }
    /**
     * Método para mostrar valor del elemento
     * @returns valorMercado_
     */
    getValorMercado() {
        return this.valorMercado_
    }
}
/**
 * Función que convierte el tipo de funko de String a el enum Tipo
 * @param type Tipo de Funko en string
 * @returns el tipo de funko de la Enum
 */
export function convertTipo(type: string) : Tipo {
    switch (type) {
      case Tipo.Pop: return Tipo.Pop;
      case Tipo.PopRides: return Tipo.PopRides;
      case Tipo.VynilGold: return Tipo.VynilGold;
      case Tipo.VynilSoda: return Tipo.VynilSoda;
      default: return Tipo.Pop
    }
}

/**
 * Función que convierte el genero de funko de String a el enum Genero
 * @param type Genero de Funko en string
 * @returns el genero de funko de la Enum
 */
export function convertGenero(gener: string) : Genero {
    switch (gener) {
      case Genero.Animacion: return Genero.Animacion;
      case Genero.TV: return Genero.TV;
      case Genero.Videojuegos: return Genero.Videojuegos;
      case Genero.Deportes: return Genero.Deportes;
      case Genero.Musica: return Genero.Musica;
      case Genero.Anime: return Genero.Anime;
      default: return Genero.TV
    }
  }
```
### Files.ts
```typescript
import { readFile, readdir, access, writeFile, mkdir, constants } from 'fs';
import { Tipo, Genero, Funko} from "./Funko.js";

/**
 * Callback para leer los ficheros de funkos de un usuario e inicializar un array de funkos
 * @param user Usuario de la aplicacion
 * @param cb Callback para guardar la coleccion de funkos
 */
export const getFunkos = (user: string, cb: (err: string | undefined, res: Funko[] | undefined) => void) => {
  const response: Funko[] = [];

  access(('./data/' + user), constants.F_OK, (err) => {
    if (!err) {
      readdir('./data/' + user, (erro, files) => {
        if (!erro) {
          let fileCount = files.length; // Inicializar el contador de archivos
          if (fileCount === 0) { // Si no hay archivos
            cb(undefined, response);
          }
          
          files.forEach(funkoFile => {
            readFile('./data/' + user + '/' + funkoFile, (error, data) => {
              if (!error) {
                let dataJson =  JSON.parse(data.toString());
                let funko: Funko = new Funko (dataJson.ID, dataJson.nombre, dataJson.descripcion, dataJson.tipo, dataJson.genero, dataJson.franquicia, dataJson.numeroFranquicia, dataJson.exclusivo, dataJson.caractericticasEspeciales, dataJson.valorMercado);
                response.push(funko);

                fileCount--; // Reducir el contador de archivos pendientes
                if (fileCount === 0) { // Si no quedan archivos pendientes, emitir el evento
                  cb(undefined, response);
                }
              }
            });
          });
        }
      });
    }
    else {
      cb(undefined, response);
    }
  });
};

/**
 * Callback para saber si existe un ID y para saber su índice
 * @param funkoPops Coleccion de funkos a buscar el ID
 * @param ID Identificador único del Funko
 * @param cb Callback que contendra la salida correspondiente a un error y el indice
 */
export const existeID = (funkoPops: Funko[], ID: number | undefined, cb: (err: string | undefined, res: number) => void) => {
  let indexFound: number = -1;

  if (ID !== undefined) {
    funkoPops.forEach((funko, index) => {
      if (funko.getID() === ID) {
        indexFound = index
      }
    })
  }

  cb(undefined, indexFound);
}

/**
 * Callback encargada de cargar un Funko a un fichero JSON
 * @param ID Identificador único del Funko
 * @param nombre Nombre del Funko
 * @param descripcion Descripcion del Funko
 * @param tipo Tipo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros
 * @param genero Genero, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras
 * @param franquicia Franquicia, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
 * @param numero Número identificativo del Funko dentro de la franquicia correspondiente
 * @param exclusivo Verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario
 * @param caracteristicasEspeciales Característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea
 * @param valorMercado Precio del Funko
 * @param cb Callback que retornara si hubo error
 */
export const writeFunkoFile = (usuario: string, ID: number, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numeroFranquicia: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number, cb: (err: string | undefined) => void) => {
  let funkoToSave = {ID: ID, nombre: nombre, descripcion: descripcion, tipo: tipo, genero: genero, franquicia: franquicia, numero: numeroFranquicia, exclusivo: exclusivo, caractericticasEspeciales: caracteristicasEspeciales, valorMercado: valorMercado};

  access(('./data/' + usuario), constants.F_OK, (err) => {
    if (err) {
      mkdir('./data/' + usuario, (err) => {
        if (err) {
          cb(`Error al crear el usuario: ${err}`);
        }
        else {
          console.log('Directory created successfully!');
        }
      });
    }

    writeFile('./data/' + usuario + '/' + ID + '.json', JSON.stringify(funkoToSave, null, 2), (error) => {
      if (error) {
        cb(`Error al guardar el funko: ${error}`);
      }
      else {
        cb(undefined);
      }
    });
  });
}
```
### servidor.ts
```typescript
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
```
### types.ts
```typescript
import { Genero, Tipo } from "./Funko.js";

export type FunkoPop = {
  ID: number;
  nombre: string;
  descripcion: string;
  tipo: Tipo;
  genero: Genero;
  franquicia: string;
  numeroFranquicia: number;
  exclusivo: boolean;
  caracteristicasEspeciales: string;
  valorMercado: number;
}

export type ResponseType = {
  type: 'add' | 'update' | 'remove' | 'show' | 'list';
  success: boolean;
  funkos?: FunkoPop[];
}
```
## Modificación
Hubo problemas en el desarrolo de la modificación y no se llegó a terminar.

### Servidor
```typescript
import express from 'express';
import { readNote } from './notes.js';

const app = express();

/**
 * Servidor visualiza URL
 */
app.get('/execmd', (req, res) => {
  if (!req.query.cmd) {
    res.status(404).send()
  } else {
    readNote(req.query.cmd as string, (err, data) => {
      if (err) {
        res.status(500).send({
          error: err,
        });
      } else if (!data!.success) {
        res.status(500).send({
          error: "Not found"
        })
      } else {
        res.status(200).send({
          notes: data!.args,
        });
      }
    });
  }
});

/**
 * Puerto esperando y escuchando
 */
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
```
## Conclusiones
<!-- propuestas de mejoras, con que me quedé al final -->
En conclusión, los servidores no solo son muy útiles hoy en día sino que también son muy versátiles. Pueden transmitir cualquier tipo de información deseada al cliente.

## Referencias

[Práctica referenciada](https://ull-esit-inf-dsi-2223.github.io/prct11-http-express-funko-app/).

[Estructura básica de proyecto](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-project-setup.html).

[GitHub Pages](https://pages.github.com/).
