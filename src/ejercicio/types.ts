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