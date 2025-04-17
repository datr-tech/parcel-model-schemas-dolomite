import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

export const journeyModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'journeyId',
  },
  frameworkId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'entity/FrameworkModel',
  },
  journeyTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'JourneyTypeModel',
  },
  ...commonSchemaFieldGroupModelType,
};
