"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const adapter_service_1 = require("../services/adapter.service");
function get(res, req, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.send(yield (0, adapter_service_1.getMeta)());
        }
        catch (err) {
            // tslint:disable-next-line: no-console
            console.error('Error-', err.message);
            next(err);
        }
    });
}
exports.get = get;
//# sourceMappingURL=adapter.controller.js.map