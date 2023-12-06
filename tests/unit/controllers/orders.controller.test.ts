import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ordersService from '../../../src/services/orders.services';
import ordersController from '../../../src/controller/orders.controller';
import { ordersMockResponseAll, ordersMockResponse } from '../../mocks/orders.mock';

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

  it('testing CreateOrder funcs', async function(){
    const req = {
      body: {
        decoded: {
          id: 1,
        },
        productIds: [1, 2],
        userId: 1,
      },
    } as Request;

    sinon.stub(ordersService, 'validateCreateOrder').resolves({ status: 201, data: ordersMockResponse });

    await ordersController.createOrder(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(ordersMockResponse);
  });
});
