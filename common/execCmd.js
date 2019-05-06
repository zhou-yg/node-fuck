const exec = require('child_process').exec;


module.exports = (cmd, options, callback) => {
  return new Promise((resolve, reject) => {

    exec(cmd, options, function (error, stdout, stderr) {

      if (error) {
        console.error(`exec error: ${error}`);
        reject(error)
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);

      resolve({stdout, stderr})
    });
  });
}
