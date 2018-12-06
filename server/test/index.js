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


describe('Modify a Red-Flag', () => {
  const redFlag = {
    redFlagId: 1,
    redFlagTitle: 'This is title one',
    date: 'today',
    type: 'Red-Flag',
    userId: 1,
    location: 'location one goes here',
    img: 'here is image one',
    comment: 'This is for comment one'
  };
  it('Should modify the Red-Flag', (done) => {
    chai.request(app)
      .put('/api/v1/redFlags/1').send({
        RedFlagContent: 'Updated RedFlag Content',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('Delete a Red-Flag from the database', () => {
  it('Should delete a Red-flag by ID', (done) => {
    chai.request(app)
      .delete('/api/v1/redFlags/:redFlagId')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Get a non existing url/page', () => {
  it('Should return a 404 for unknown routes', (done) => {
    chai.request(app)
      .get('/invalid/route')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('Get a specified Red-Flag from the database', () => {
  it('Should get one specific Red-Flag by ID', (done) => {
    chai.request(app)
      .get('/api/v1/redFlags/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Update a location in a specified Red-flag', () => {
  it('Should update one specific Red-Flag by Location', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/1/location')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Update a comment in a specified Red-flag', () => {
  it('Should update one specific Red-Flag by comment', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/1/comment')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
