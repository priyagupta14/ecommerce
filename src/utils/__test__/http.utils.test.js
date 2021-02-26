const { default: axios } = require('axios');
const { httpGet } = require('../http.utils');

describe(' get data', () => {
  it('should get data', async () => {
    const response = {
      data: 'abc',
    };
    jest.spyOn(axios, 'get').mockResolvedValue(response);
    const result = await httpGet('anyLink');
    expect(result).toBe('abc');
  });
});
