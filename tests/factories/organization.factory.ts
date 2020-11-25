import { Organizations } from '../../src/api';
import { Factory } from './factory';

const factory = new Factory<Organizations>(Organizations);

factory.define((faker) => {
    return {
        name: faker.name.firstName(1),
        description: faker.name.lastName(1),
    };

});

export const OrganizationFactory = factory;
