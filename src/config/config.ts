let config: any;

if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev') {
    config = require(`/etc/config/${process.env.NODE_ENV}-config.json`);
} else {
    config = require('../../config-local.json');
}

export = config;
