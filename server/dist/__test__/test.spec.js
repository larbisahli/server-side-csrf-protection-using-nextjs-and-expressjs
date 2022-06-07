"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe('Graph API', () => {
    afterEach((done) => {
        server_1.default.close();
        done();
    });
    it('Login in user', (done) => {
        (0, supertest_1.default)(server_1.default)
            .post('/graphql')
            .send({
            query: `
        mutation { staffLogin(email: "larbi@gmail.com"  password: "1905" remember_me: false){success} }
      `,
        })
            .end((err, res) => {
            if (err) {
                return done(err);
            }
            expect(JSON.parse(res.text)).toMatchObject({
                data: { staffLogin: { success: true } },
            });
            done();
        });
    });
});
//# sourceMappingURL=test.spec.js.map