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
    it('staff form', (done) => {
        (0, supertest_1.default)(server_1.default)
            .post('/graphql')
            .send({
            query: `
        mutation { createStaff(first_name: "larbi", last_name: "sahli", email: "larbisahli1905@gmail.com"  password: "password"){first_name} }
      `,
        })
            .end((err, res) => {
            if (err) {
                return done(err);
            }
            expect(JSON.parse(res.text)).toMatchObject({
                data: { createStaff: null },
            });
            done();
        });
    });
});
//# sourceMappingURL=test.spec.js.map