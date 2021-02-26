const categoryService = require('../../services/category.services');
const categoryHandler = require('../category.handler');

describe('Store in DB ', () => {
  it('store the categories and items in db set status code 200', async () => {
    const mockReq = {
      body: {
        category: 'abc',
      },
    };
    const category = ['abc'];
    const spyStore = jest.spyOn(categoryService, 'storeInDb').mockResolvedValue('abc');
    const mockSend = jest.fn();
    const mockRes = {
      status: jest.fn(() => ({ send: mockSend })),
    };
    const result = await categoryHandler.storeInDb(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
  });
});
describe('fetch features ', () => {
  it('get all  db set status code 200', async () => {
    const mockReq = {
      params: {
        category: 'abc',
      },
    };
    const category = ['abc'];
    const spyStore = jest.spyOn(categoryService, 'getFeatures').mockResolvedValue('abc');
    const mockSend = jest.fn();
    const mockRes = {
      status: jest.fn(() => ({ json: mockSend })),
    };
    const result = await categoryHandler.getFeatures(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
  });
});
