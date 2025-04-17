import { journeyModelSchemaOptions } from './../../../dist';

describe('journeyModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'journey',
        timestamps: true,
        validateModifiedOnly: true,
      };

      // Act
      const propsFound = { ...journeyModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
