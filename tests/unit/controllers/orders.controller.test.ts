import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ordersService from '../../../src/services/orders.services';
import ordersController from '../../../src/controller/orders.controller';
import { ordersMockResponseAll } from '../../mocks/orders.mock';

chai.use(sinonChai);

describe('testing OrdersController funcs', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });
  afterEach(sinon.restore)
  it('testing getAllOrders is working properly', async function () {
    sinon.stub(ordersService, 'validateGetAllOrders').resolves({ data: ordersMockResponseAll });

     await ordersController.getAllOrders(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(ordersMockResponseAll);
  });
});
