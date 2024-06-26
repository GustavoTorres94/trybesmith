import { expect } from 'chai';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import loginService from '../../../src/services/login.services';
import UserModel from '../../../src/database/models/user.model';
import { Login, Payload } from '../../../src/types/Login';
import { User } from '../../../src/types/User';

chai.use(sinonChai);

describe('LoginService', function () {
  beforeEach(sinon.restore);

  it('should return a 400 status when username or password are not provided', async function () {
    const { status, data } = await loginService.validateLogin('', '');
    expect(status).to.be.equal(400);
    expect(data).to.be.deep.equal({ message: '"username" and "password" are required' });
  });
  it('should return a 401 status when username or password are invalid', async function () {
    const { status, data } = await loginService.validateLogin('xablau', 'xablau');
    expect(status).to.be.equal(401);
    expect(data).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('testing if payloadToken is working', async function () {
    const payload = { id: 1, username: 'xablau' };
    const token = loginService.payloadToken(payload);
    expect(token).to.be.a('string');
  });
  
  it('testing if payloadToken is working', async function () {
    const payload = { id: 1, username: 'xablau' };
    const token = loginService.payloadToken(payload);
    expect(token).to.be.a('string');
  });
});
