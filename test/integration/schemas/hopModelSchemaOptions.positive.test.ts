import { hopModelSchemaOptions } from '../../../dist';

describe('hopModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'hop',
        timestamps: true,
        validateModifiedOnly: true,
      };

      // Act
      const propsFound = { ...hopModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
