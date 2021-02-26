const { healthHandler } = require('../health.handler');

describe('Health Handler', () => {
  const mockSend = jest.fn();

  const mockResponse = {
    status: jest.fn(() => ({ send: mockSend })),
    // send: jest.fn(),
  };
  it('should set response status code to 200', () => {
    healthHandler(null, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });

  it('should "Health Handler"', () => {
    healthHandler(null, mockResponse);
    expect(mockSend).toHaveBeenCalledWith('Health Handler');
  });
});
