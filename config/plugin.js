'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  senecaGateway: {
    enable: true,
    package: 'egg-seneca-gateway',
  },
};
