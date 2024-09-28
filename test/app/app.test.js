const request = require("supertest");
const app = require("../../src/app/app");

describe("GET /api/health/", () => {
    it("check the response message", async () => {
      const res = await request(app).get(
        "/api/v1/health/"
      );
      expect(res.body.message).toBe("health hello");
    });

    it("check the http code", async () => {
        const res = await request(app).get(
          "/api/v1/health/"
        );
        expect(res.statusCode).toBe(200);
      });
  });

  
  describe("GET /api/health/", () => {
    it("check the response message", async () => {
      const res = await request(app).get(
        "/api/v1/users/"
      );
      expect(res.body.message).toBe("hello");
    });

    it("check the http code", async () => {
        const res = await request(app).get(
          "/api/v1/users/"
        );
        expect(res.statusCode).toBe(200);
      });
  });

  
