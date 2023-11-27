import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
import productsServices from '../../../src/services/products.services';
import ProductModel from '../../../src/database/models/product.model';
// import { validBodyFunctionReturnGetAll } from '../../mocks/products.mock';
// import { Product } from '../../../src/types/Product';

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
    const building = ProductModel.build(product);
    sinon.stub(ProductModel, 'create').resolves(building);
    const { data } = await productsServices.validateInsertProduct(productReturn);
    expect(data).to.have.keys('id', 'name', 'price');
    expect(data.id).to.be.equal(6);
    expect(data.name).to.be.equal('xablau');
  });

  // it('testing validateGetAllProducts is working properly', async function () {
  //   const teste: Product[] = [
  //     {
  //       id: 1,
  //       name: 'xablau',
  //       price: '100',
  //       orderId: 4,
  //     },
  //     {
  //       id: 2,
  //       name: 'xablau',
  //       price: '100',
  //       orderId: 4,
  //     },
  //     {
  //       id: 3,
  //       name: 'xablau',
  //       price: '100',
  //       orderId: 4,
  //     },
  //     {
  //       id: 4,
  //       name: 'xablau',
  //       price: '100',
  //       orderId: 4,
  //     },
  //     {
  //       id: 5,
  //       name: 'xablau',
  //       price: '100',
  //       orderId: 4,
  //     },
  //   ];
  //   const building = ProductModel.build(teste);
  //   sinon.stub(ProductModel, 'findAll').resolves(building);
  //   const { data } = await productsServices.validateGetAllProducts();
  //   expect(data).to.be.an('array');
  //   expect(data[0]).to.have.keys('id', 'name', 'price', 'orderId');
  //   expect(data[0].id).to.be.equal(1);
  //   expect(data[0].name).to.be.equal('xablau');
  // });
});
