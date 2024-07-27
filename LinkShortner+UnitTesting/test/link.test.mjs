import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../server.js";
import Link from "../models/link.js";

const { expect } = chai; // Extract 'expect' assertion style from Chai
chai.use(chaiHttp); // Use Chai HTTP plugin

describe("Link Shortener API", () => {
  // Before running tests, clear the Link collection in the database
  before(async () => {
    await Link.deleteMany({});
  });

  // Test case for creating a short link
  it("should create a short link", (done) => {
    chai
      .request(app) // Initiate a request to the Express app
      .post("/api/links/shorten") // Specify that this is a POST request to the endpoint /api/links/shorten
      .send({ originalUrl: "https://www.google.com" }) // Send the request body with the original URL
      .end((err, res) => {
        // Define the callback function to handle the response
        // Check if the response status is 201 (Created)
        expect(res).to.have.status(201);
        // Check if the response body contains the original URL
        expect(res.body).to.have.property(
          "originalUrl",
          "https://www.google.com"
        );
        // Check if the response body contains a short URL
        expect(res.body).to.have.property("shortUrl");
        done(); // Indicate that the test is complete
      });
  });

  // Test case for redirecting to the original URL
  it("should redirect to the original URL", (done) => {
    // Create a new link document directly in the database
    const link = new Link({ originalUrl: "https://www.google.com" });
    link.save().then(() => {
      // Save the link document to the database
      chai
        .request(app) // Initiate a request to the Express app
        .get(`/api/links/${link.shortUrl}`) // Specify that this is a GET request to the short URL endpoint
        .end((err, res) => {
          // Define the callback function to handle the response
          // Check if the response redirects to the original URL
          expect(res).to.redirectTo(/^https:\/\/www\.google\.com\/?$/);
          done(); // Indicate that the test is complete
        });
    });
  });

  // Test case for returning analytics for a short link
  it("should return analytics for a short link", (done) => {
    // Create a new link document directly in the database
    const link = new Link({ originalUrl: "https://www.google.com" });
    link.save().then(() => {
      // Save the link document to the database
      // Simulate a click by accessing the short URL
      chai
        .request(app) // Initiate a request to the Express app
        .get(`/api/links/${link.shortUrl}`) // Specify that this is a GET request to the short URL endpoint
        .end((err, res) => {
          // Define the callback function to handle the response
          // Request analytics for the short URL
          chai
            .request(app) // Initiate another request to the Express app
            .get(`/api/links/${link.shortUrl}/analytics`) // Specify that this is a GET request to the analytics endpoint
            .end((err, res) => {
              // Check if the response status is 200 (OK)
              expect(res).to.have.status(200);
              // Check if the response body contains the original URL
              expect(res.body).to.have.property(
                "originalUrl",
                "https://www.google.com"
              );
              // Check if the response body contains the click count (should be 1)
              expect(res.body).to.have.property("clicks", 1);
              done(); // Indicate that the test is complete
            });
        });
    });
  });

  // Test case for URL not found
  it("should return 404 for a non-existent short URL", (done) => {
    chai
      .request(app)
      .get("/api/links/nonExistentShortUrl")
      .end((err, res) => {
        expect(res).to.have.status(404); // Check if the response status is 404 (Not Found)
        done();
      });
  });

  // Test case for incrementing clicks
  it("should increment clicks on accessing the short URL", (done) => {
    const link = new Link({ originalUrl: "https://www.example.com" });
    link.save().then(() => {
      chai
        .request(app)
        .get(`/api/links/${link.shortUrl}`)
        .end((err, res) => {
          chai
            .request(app)
            .get(`/api/links/${link.shortUrl}/analytics`)
            .end((err, res) => {
              expect(res.body).to.have.property("clicks", 1); // Should be 1 after one access
              done();
            });
        });
    });
  });

  // Test case for creating multiple short links
  it("should create multiple short links", (done) => {
    const urls = [
      "https://www.site1.com",
      "https://www.site2.com",
      "https://www.site3.com",
    ];
    let count = 0;

    urls.forEach((url) => {
      chai
        .request(app)
        .post("/api/links/shorten")
        .send({ originalUrl: url })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("originalUrl", url);
          expect(res.body).to.have.property("shortUrl");
          count += 1;
          if (count === urls.length) done(); // Call done() when all URLs have been tested
        });
    });
  });
});
