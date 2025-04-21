import { journeyModelSchema } from '@dist-pmsd';

describe('journeyModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        _id: {
          alias: 'journeyId',
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
        journeyTypeId: {
          ref: 'JourneyTypeModel',
          required: true,
          type: 'ObjectId',
        },
        frameworkId: {
          ref: 'entity/FrameworkModel',
          required: true,
          type: 'ObjectId',
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
      const propsFound = { ...journeyModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
