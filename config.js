'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://todos:todos8888@ds117623.mlab.com:17623/expotodos' //'mongodb://localhost/sup-universal';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL;
exports.PORT = process.env.PORT || 8080;

exports.AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || 'nikoniko.auth0.com';
;
exports.AUTH0_API_AUDIENCE = process.env.AUTH0_API_AUDIENCE || 'https://www.puppycakes.com';

