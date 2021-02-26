const httpUtils = require('../../utils/http.utils');
const { Category } = require('../../models');
const { Item } = require('../../models');
const categoryService = require('../category.services');

xdescribe('Store categories in DB', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const utilSpy = jest.spyOn(httpUtils, 'httpGet');
  const catSpy = jest.spyOn(Category, 'create');
  const category = ['items', 'phone'];
  const resolvedValue = {
    name: 'shoes',
    itemMetadata: [
      {
        id: 'shoe_1',
      },
      {
        id: 'shoe_2',
      },
      {
        id: 'shoe_3',
      },
    ],
  };
  it('should store categories and items in db', async () => {
    utilSpy.mockResolvedValueOnce(resolvedValue);
    catSpy.mockResolvedValue('abc');
    const result = await categoryService.storeInDb(category);
    console.log(68, result);
    expect(result).toBe(1);
  });
});

xdescribe(' DB store items', () => {
  const utilSpy = jest.spyOn(httpUtils, 'httpGet');
  const itemSpy = jest.spyOn(Item, 'create');

  it('should store items in item table', async () => {
    const resolvedValue = { features: [{ value: 'Red' }, { value: 7 }, { value: 'Nike' }] };
    utilSpy.mockResolvedValueOnce(resolvedValue);
    itemSpy.mockResolvedValue(1);
    const result = await categoryService.dbStoreItems(['1', '2']);
    console.log(47, result);
  });
});
xdescribe(' Get All Distinct Feature', () => {
  it('should return all distinct features', async () => {
    const category = 'items';
    const spyItem = jest.spyOn(Item, 'findAll').mockResolvedValue(1);
    const result = await categoryService.getFeatures(category);
    expect(result).toBe(1);
  });
});
