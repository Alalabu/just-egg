/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587180421842_4041';

  // add your middleware config here
  config.middleware = [];

  config.cluster = {
    listen: {
      port: 20982,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    },
  };

  config.senecaGateway = {
    server: {
      host: '127.0.0.1',
      port: 50005,
    },
    users: [
      { appid: 'Alalabu', appsecret: '002f61118a6045d1ae7c49173805b0cd' },
      { appid: 'xiaofei', appsecret: '0034211ec4c5420f9171f2724af9e34a' },
    ],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
