import request from 'supertest';
import server from '../server';

describe('Graph API', () => {
  afterEach((done) => {
    server.close();
    done();
  });

  it('staff form', (done) => {
    request(server)
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
