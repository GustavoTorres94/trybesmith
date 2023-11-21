import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
import productsServices from '../../../src/services/products.services';
import ProductModel from '../../../src/database/models/product.model';

chai.use(sinonChai);

describe('testing ProductsService', function () {
  afterEach(sinon.restore);

  it('should return a product', async function () {
    const product = {
      id: 6,
      name: 'xablau',
      price: '100',
      orderId: 4,
    };
    const productReturn = {
      name: 'xablau',
      price: '100',
      orderId: 4,
    };
    const baraban = ProductModel.build(product);
    sinon.stub(ProductModel, 'create').resolves(baraban);
    const { data } = await productsServices.validateInsertProduct(productReturn);
    expect(data).to.have.keys('id', 'name', 'price');
    expect(data.id).to.be.equal(6);
    expect(data.name).to.be.equal('xablau');
  });
});
