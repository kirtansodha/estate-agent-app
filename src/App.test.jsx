/**
 * Test 4: Properties data structure validation
 */
test('properties data has correct structure', () => {
  const propertiesData = require('./data/properties.json');
  
  expect(propertiesData).toBeDefined();
  expect(Array.isArray(propertiesData)).toBe(true);
  expect(propertiesData.length).toBe(7);
});

/**
 * Test 5: Each property has required fields
 */
test('each property contains required fields', () => {
  const propertiesData = require('./data/properties.json');
  
  propertiesData.forEach(property => {
    expect(property).toHaveProperty('id');
    expect(property).toHaveProperty('type');
    expect(property).toHaveProperty('price');
    expect(property).toHaveProperty('bedrooms');
    expect(property).toHaveProperty('postcode');
  });
});
