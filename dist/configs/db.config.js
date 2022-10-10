"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const env = process.env;
const fs = require('fs');
const dbConfig = {
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME || 'postgres',
};
exports.dbConfig = dbConfig;
//# sourceMappingURL=db.config.js.map