import "@freight/common-schema-fields";
import { hopModelSchema } from '../../../dist';

describe('hopModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      console.log({ hopModelSchema });

      // Arrange
      const propsExpected = {
        _id: {
          alias: 'hopId',
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
        journeyId: {
          ref: 'JourneyModel',
          required: true,
          type: 'ObjectId',
        },
        resourceId: {
          ref: 'entity/ResourceModel',
          required: true,
          type: 'ObjectId',
        },
        order: {
          default: 0,
          required: false,
          type: 'Number',
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
      const propsFound = { ...hopModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
