"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterRouter = void 0;
const adapterRouter = require('express').Router();
exports.adapterRouter = adapterRouter;
const adapter_controller_1 = require("../controllers/adapter.controller");
adapterRouter.get('/', adapter_controller_1.get);
//# sourceMappingURL=adapter.route.js.map