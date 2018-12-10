import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../app';

/* eslint-disable no-unused-vars */
const should = chai.should();
const validEntry = {
	id: 1,
	createdOn: '2018-12-09T16:38:49.739Z',
  createdBy: 1,
  type: 'Red-flag',
	location: 'new location goes here',
	comment: 'new comment goes here'
};
const invalidEntry1 = {
	id: 1,
	createdOn: '2018-12-09T16:38:49.739Z',
  createdBy: 1,
  type: 'Red-flag',
};
const invalidEntry2 = {
	id: 1,
	createdOn: '2018-12-09T16:38:49.739Z',
  createdBy: 1,
  type: 'Red-flag',
	location: 1,
	comment: 1
};
const invalidEntry3 = {
	id: 1,
	createdOn: '2018-12-09T16:38:49.739Z',
  createdBy: 1,
  type: 'Red-flag',
	location: 1
};
const invalidEntry4 = {
	id: 1,
	createdOn: '2018-12-09T16:38:49.739Z',
  createdBy: 1,
  type: 'Red-flag',
  comment: 1,
  location: 'location here'
};
const invalidEntry5 = {
	id: 1,
	createdOn: '2018-12-09T16:38:49.739Z',
  createdBy: 1,
  type: 'Red-flag',
  comment: 'comment here',
  location: '  '
};
const invalidEntry6 = {
	id: 1,
	createdOn: '2018-12-09T16:38:49.739Z',
  createdBy: 1,
  type: 'Red-flag',
  comment: '  ',
  location: 'Location here'
};

chai.use(chaiHttp);
describe('Test for creating new Red-flag', () => {
  it('Should create a new Red-flag with a valid comment and location', (done) => {
    chai.request(app)
      .post('/api/v1/redFlags').send(validEntry)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should return an error for incomplete request', (done) => {
    chai.request(app)
      .post('/api/v1/redFlags').send(invalidEntry1)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not be an integer', (done) => {
    chai.request(app)
      .post('/api/v1/redFlags').send(invalidEntry2)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should return an error for invalid location', (done) => {
    chai.request(app)
      .post('/api/v1/redFlags').send(invalidEntry3)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });  

  it('Should not contain an integer', (done) => {
    chai.request(app)
      .post('/api/v1/redFlags').send(invalidEntry4)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not contain an empty string for Red-flags location', (done) => {
    chai.request(app)
      .post('/api/v1/redFlags').send(invalidEntry5)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not contain an empty string for Red-flags comment', (done) => {
    chai.request(app)
      .post('/api/v1/redFlags').send(invalidEntry6)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });


});


describe('Test for getting all Red-Flags from database', () => {
  it('Should get all Red-Flags from database', (done) => {
    chai.request(app)
      .get('/api/v1/redFlags')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Test for deleting a Red-Flag from the database', () => {
  it('Should delete a Red-flag by ID', (done) => {
    chai.request(app)
      .delete('/api/v1/redFlags/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not delete a Red-flag with an unknown ID', (done) => {
    chai.request(app)
      .delete('/api/v1/redFlags/50')
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
      .get('/api/v1/redFlags/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not get a Red-flag for an invalid ID', (done) => {
    chai.request(app)
      .get('/api/v1/redFlags/50')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        done();
      });
  });  
});

describe('Test for patch requests', () => {
  it('Should be a string for updated Red-flag location', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/2/location').send({location: 'Enugu'})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not update a Red-flag location with an Invalid ID', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/50/location').send({location: 'Enugu'})
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not update a Red-flag location if it is an integer', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/2/location').send({location:1})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not update a Red-flag location if it contain empty spaces', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/2/location').send({location:''})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should update a Red-flag comment with a valid ID and string', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/2/comment').send({comment: 'updated comment'})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not update a Red-flag comment with an invalid ID', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/50/comment').send({comment: 'updated comment'})
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not update a Red-flag comment with an integer', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/2/comment').send({comment:1})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('Should not update a Red-flag comment if it contains empty spaces', (done) => {
    chai.request(app)
      .patch('/api/v1/redFlags/2/comment').send({comment:''})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});


