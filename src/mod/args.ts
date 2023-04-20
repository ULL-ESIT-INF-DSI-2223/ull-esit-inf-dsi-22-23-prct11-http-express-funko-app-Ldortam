/**
 * Tipo Args
 * @param cmd Comando
 * @param arg Argumento
 */
export type Args = {
  cmd: string;
  arg?: string;
}

/**
 * Tipo ResponseType
 * @param type Tipo
 * @param succes Funciona correctamente?
 * @param args Argumentos
*/
export type ResponseType = {
  type: 'add' | 'remove' | 'read' | 'list';
  success: boolean;
  args?: Args[];
}
