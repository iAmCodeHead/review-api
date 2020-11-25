import { Reviews } from '../../src/api';
import { Factory } from './factory';

const factory = new Factory<Reviews>(Reviews);

factory.define((faker) => {
    return {
        reviewer: faker.name.firstName(1),
        review: faker.name.jobDescriptor(),
    };

});

export const ReviewFactory = factory;
