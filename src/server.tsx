import express, { Response } from 'express';
import { renderToString } from 'react-dom/server';
import path from 'path';
import App from './app';
import template from './template';
import fetch from 'isomorphic-fetch';

const app = express();
app.use(express.static(path.resolve(__dirname, './dist/public')));

app.get('/', (res: Response) => {
  fetch('https://api.github.com/users/gaearon/gists')
    .then((resp) => resp.json())
    .then((gists) => {
      const body = renderToString(<App gists={gists} />);
      const html = template(body, gists);
      res.send(html);
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
