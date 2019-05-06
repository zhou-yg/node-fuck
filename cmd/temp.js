'use strict';
const path = require('path');
const Command = require('common-bin');
const exec = require('../common/execCmd');

const templateNameMap = {
  'cli': 'https://github.com/zhou-yg/node-cli.git',
};

class Template extends Command {
  constructor (rawArgv) {
    super(rawArgv);

    this.usage = ('Usage: node-cli temp <templateNameOrLink> [<dir>]');

    this.yargs.options({
      depth: {
        type: 'number',
        description: 'Create a shallow clone with a history truncated to the specified number of commits',
      },
    });
  }

  * run ({argv, cwd}) {
    let [k, dir] = argv._;
    k = templateNameMap[k] || k;

    console.log(argv, cwd);

    if (k && /^http/.test(k)) {
      yield exec(`git clone ${k} ${dir}`, {
        cwd,
      });

      console.log('clone done')
    } else {
      throw new Error('tempName must valid');
    }
  }

  get description() {
    return 'Create a repository into a new directory';
  }
}


module.exports = Template;
