import chai from "chai"; // Import Chai assertion library
import chaiHttp from "chai-http"; // Import Chai HTTP plugin for HTTP integration testing
import { app } from "../server.js"; // Import the Express app from the server file

const { expect } = chai; // Extract 'expect' assertion style from Chai
chai.use(chaiHttp); // Use Chai HTTP plugin

describe("Load Testing", function () {
  this.timeout(1000); // Increase timeout for load test

  it("should handle multiple requests", (done) => {
    let completedRequests = 0;
    const numRequests = 1000;

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
