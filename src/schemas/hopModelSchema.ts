import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

export const hopModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'hopId',
  },
  journeyId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'JourneyModel',
  },
  resourceId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'entity/ResourceModel',
  },
  order: {
    required: false,
    type: 'Number',
    default: 0,
  },
  ...commonSchemaFieldGroupModelType,
};
