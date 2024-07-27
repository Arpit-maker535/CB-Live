import { createRequire } from "module";
const require = createRequire(import.meta.url);

const chai = require("chai");
const chaiHttp = require("chai-http");
import { app } from "../server.js";
import Link from "../models/link.js";

const { expect } = chai;

chai.use(chaiHttp);

describe("Load Testing", function () {
  this.timeout(1000); // Increase timeout for load test

  it("should handle multiple requests", (done) => {
    let completedRequests = 0;
    const numRequests = 100;

    for (let i = 0; i < numRequests; i++) {
      chai
        .request(app)
        .post("/api/links/shorten")
        .send({ originalUrl: `https://www.example${i}.com` })
        .end((err, res) => {
          expect(res).to.have.status(201);
          completedRequests += 1;
          if (completedRequests === numRequests) done();
        });
    }
  });
});
