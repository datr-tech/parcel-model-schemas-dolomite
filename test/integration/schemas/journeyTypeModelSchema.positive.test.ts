import { journeyTypeModelSchema } from '../../../dist';

describe('journeyTypeModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        _id: {
          alias: 'journeyTypeId',
          required: true,
          type: 'ObjectId',
        },
        name: {
          maxLength: 100,
          required: true,
          trim: true,
          type: 'String',
          unique: true,
        },
        description: {
          maxLength: 200,
          required: false,
          type: 'String',
        },
        adminUserId: {
          ref: 'persona/UserModel',
          required: true,
          type: 'ObjectId',
        },
        adminStatusId: {
          default: 'undefined',
          ref: 'admin/StatusModel',
          required: false,
          type: 'ObjectId',
        },
        createdAt: {
          required: false,
          type: 'Date',
        },
        updatedAt: {
          required: false,
          type: 'Date',
        },
      };

      // Act
      const propsFound = { ...journeyTypeModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
