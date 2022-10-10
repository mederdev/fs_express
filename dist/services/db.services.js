"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const db_config_1 = require("../configs/db.config");
const Pool = require('pg').Pool;
exports.pool = new Pool(db_config_1.dbConfig);
//# sourceMappingURL=db.services.js.map