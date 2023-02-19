const request = require('supertest');
const app = require("../app");

describe('Waddi API specs', () => {
    it('tests /api/users/register endpoint', async(done) => {
        const loginRes = await request(app).post("/api/users/login").send({
            email: "admin@waddi.com",
            password: "admin123"
        });
        const token = loginRes.body.access_token;
        console.log(token);
        const response = await request(app).post("/api/users/register")
            .set('Authorization', `Bearer ${token}`).send({
                name: "Juan Editor",
                email: "juan.editor@waddi.com",
                password: "editor123",
                role: "editor"
            });
        console.log(response.body);
        expect(response.body.name).toBe("Juan Editor");
        expect(response.body.email).toBe("juan.editor@waddi.com");
        expect(response.body.role).toBe("editor");
        expect(response.statusCode).toBe(201)
        .end(done);
    });
});