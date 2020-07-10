#!/usr/bin/env node
const clipboardy = require('clipboardy');
const sade = require('sade');

const pkg = require('./package.json');

const prog = sade('vitorify');

prog.version(pkg.version);

prog.example('refuse Roberto');

prog.command('refuse <name>').action(name => {
  const str = `
Oi, ${name}!

Entendi, infelizmente não estou com janela de tempo disponível para realizar esse serviço
e não possuo nenhum profissional de confiança disponível para indicação no momento.
De todo modo, vou ficar atento ao mercado e, caso surja algum profissional disponível,
passarei seu email para contato ok?

Gostaria de poder ajudar mais! Abraços,
`.trim();

  clipboardy.writeSync(str);
  console.log(str);
  console.log('-----');
  console.log('Sua desculpa foi copiada. Basta colar no email!');
});

prog.parse(process.argv);
