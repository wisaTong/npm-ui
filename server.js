#!/usr/bin/env node
import '@babel/polyfill';
import app from './src/app';
import opn from 'opn';

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${server.address().port}`);
  opn('http://localhost:3000');
});

export default server;
