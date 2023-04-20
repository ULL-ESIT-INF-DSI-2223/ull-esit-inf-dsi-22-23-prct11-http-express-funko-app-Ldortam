import fs from 'fs';
import {Args, ResponseType} from './args.js';

export const readNote = (title: string,
    cb: (err: string | undefined, res: ResponseType | undefined) => void) => {
  loadNotes((err, data) => {
    if (err) {
      cb(err, undefined);
    } else if (data) {
      const arg: Args[] = JSON.parse(data);
      const foundcmd = arg.find((arg) => arg.cmd === title);
      const response: ResponseType = {
        type: 'read',
        success: foundcmd?true:false,
        args: foundcmd?[foundcmd]:undefined,
      };
      cb(undefined, response);
    }
  });
};

const loadNotes = (
    cb: (err: string | undefined, data: string | undefined) => void) => {
  fs.readFile('public/execmd/notes.json', (err, data) => {
    if (err) {
      cb(`Error reading notes file: ${err.message}`, undefined);
    } else {
      cb(undefined, data.toString());
    }
  });
};