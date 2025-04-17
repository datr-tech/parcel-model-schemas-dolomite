import { journeyTypeModelSchemaOptions } from './../../../dist';

describe('journeyTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'journeyType',
        timestamps: true,
        validateModifiedOnly: true,
      };

      // Act
      const propsFound = { ...journeyTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
