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
class Staff {
    constructor() {
        this.createStaff = (parent, values, { req, csrf }) => __awaiter(this, void 0, void 0, function* () {
            // CSRF Validation, this will throw an error if the token is not valid.
            csrf === null || csrf === void 0 ? void 0 : csrf.verify(req);
            console.log('values :>', values);
            // Your database logic
            // ....
            return values;
        });
    }
}
exports.default = Staff;
//# sourceMappingURL=resolvers.js.map