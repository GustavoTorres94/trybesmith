import chai, { expect } from 'chai';
import bcrypt from 'bcryptjs';
import UserModel from '../../../src/database/models/user.model';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginServices from '../../../src/services/login.services';
import loginController from '../../../src/controller/login.controller';

chai.use(sinonChai);

describe('tsting', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(sinon.restore);

  it('testing login is working properly', async function () {
    const req = {
      body: {
        username: 'test',
        password: 'test',
      },
    } as Request;
    sinon.stub(loginServices, 'validateLogin').resolves({ status: 200, data: { token: 'token' } });

    const result = await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ token: 'token' });
  });

  it('testing if return error when not passing username in request', async function () {
    const req = {
      body: {
        password: 'test',
      },
    } as Request;
    sinon.stub(loginServices, 'validateLogin').resolves({ status: 400, data: { message: '"username" and "password" are required' } });

    const result = await loginController.login(req, res);
    console.log('RESULT', result);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"username" and "password" are required' });
  });

  it('testing if return error when not passing password in request', async function () {
    const req = {
      body: {
        username: 'test',
      },
    } as Request;
    sinon.stub(loginServices, 'validateLogin').resolves({ status: 400, data: { message: '"username" and "password" are required' } });

    const result = await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"username" and "password" are required' });
  });

  it('testing if returns error when user pass wrong username', async function () {
    const req = {
      body: {
        username: 'test',
        password: 'terrivel',
      },
    } as Request;
    sinon.stub(loginServices, 'validateLogin').resolves({ status: 401, data: { message: 'Username or password invalid' } });

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: 'Username or password invalid' });
  });
  
});
