import { expect } from 'chai';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import ordersService from '../../../src/services/orders.services';
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';
import UserModel from '../../../src/database/models/user.model';
import { Order } from '../../../src/types/Order';
import { Payload } from '../../../src/types/Login';
import { User } from '../../../src/types/User';

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
  it('testing validateCreateOrder is working properly', async function () {
    const id = 1;
    const productIds = [1];
    const userId = 1;
    const user: User = {
      id: 1,
      username: 'xablau',
      password: '123456',
      vocation: 'client',
      level: 1,
    };
    const buildingUser = UserModel.build(user);
    const buildingOrder = OrderModel.build({ userId });
    sinon.stub(UserModel, 'findByPk').resolves(buildingUser);
    sinon.stub(OrderModel, 'create').resolves(buildingOrder);
    sinon.stub(ProductModel, 'update').resolves();
    const { status, data } = await ordersService.validateCreateOrder(id, productIds, userId);
    expect(status).to.be.equal(201);
    expect(data).to.be.deep.equal({ userId, productIds });
  });    
});
