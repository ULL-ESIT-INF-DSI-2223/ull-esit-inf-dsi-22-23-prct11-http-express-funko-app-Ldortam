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
