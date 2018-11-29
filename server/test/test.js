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
        expect(res).to.have.status(200);
        done();
      });
  });
});
