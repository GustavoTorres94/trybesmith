import { expect } from 'chai';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import ordersService from '../../../src/services/orders.services';
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';
import { Order } from '../../../src/types/Order';

chai.use(sinonChai);

describe('testing OrdersService funcs', function () {
  beforeEach(sinon.restore);
  it('testing validateGetAllOrders is working properly', async function () {
    const order = {
      id: 1,
      userId: 1,
      totalPrice: '100',
      deliveryAddress: 'Rua dos bobos',
      deliveryNumber: '0',
      saleDate: '2021-09-09T00:00:00.000Z',
      status: 'Pendente',
    };
    const product = {
      id: 1,
      name: 'xablau',
      price: '100',
      orderId: 1,
    };
    const orderReturn = {
      id: 1,
      userId: 1,
      productIds: [1],
    };
    const buildingOrder = OrderModel.build(order);
    const buildingProduct = ProductModel.build(product);
    sinon.stub(OrderModel, 'findAll').resolves([buildingOrder]);
    sinon.stub(ProductModel, 'findAll').resolves([buildingProduct]);
    const { data } = await ordersService.validateGetAllOrders();
    expect(data).to.be.deep.equal([orderReturn]);
    expect(data[0]).to.have.keys('id', 'userId', 'productIds');
  });
});
