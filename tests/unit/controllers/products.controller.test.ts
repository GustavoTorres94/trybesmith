import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsService from '../../../src/services/products.services';
import produtsController from '../../../src/controller/products.controller';
import { validBodyFunctionReturn } from '../../mocks/products.mock';

chai.use(sinonChai);

describe(' testing ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });
  
  afterEach(sinon.restore)

  it('should return status 201 and a json with the product inserted', async function () {
    const product = {
      name: 'xablau',
      price: 100,
      orderId: 1,
    };

    const req = {
      body: product,
    } as Request;

    sinon.stub(productsService, 'validateInsertProduct').resolves({ data: validBodyFunctionReturn });

    await produtsController.insertProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(validBodyFunctionReturn);
  });
});
