import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../app';

/* eslint-disable no-unused-vars */
const should = chai.should();

chai.use(chaiHttp);

describe('Get all Red-Flags from database', () => {
  it('Should get all Red-Flags from database', (done) => {
    chai.request(app)
      .get('/api/v1/redFlags')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Delete a Red-Flag from the database', () => {
  it('Should delete a Red-flag by ID', (done) => {
    chai.request(app)
      .get('/api/v1/redFlags/:redFlagId')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
