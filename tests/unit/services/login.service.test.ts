import { expect } from 'chai';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import loginService from '../../../src/services/login.services';
import UserModel from '../../../src/database/models/user.model';

chai.use(sinonChai);

describe('LoginService', function () {
  beforeEach(sinon.restore);

  it('should return a 400 status when username or password are not provided', async function () {
    const { status, data } = await loginService.validateLogin('', '');
    expect(status).to.be.equal(400);
    expect(data).to.be.deep.equal({ message: '"username" and "password" are required' });
  });
});
