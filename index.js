'use strict';
const path = require('path');
const Command = require('common-bin');

class Main extends Command {
  constructor (v) {
    super(v)

    this.usage = 'Usage: node-cli <command> [options]';

    this.load(path.join(__dirname, 'cmd'))
  }
}


new Main().start();
