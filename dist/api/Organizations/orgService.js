"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Reviews } from '../Review';
const orgModel_1 = require("./orgModel");
class OrganizationService {
    constructor() {
        this.getAllOrganizations = async () => {
            return await orgModel_1.Organizations.find({ relations: ['reviews'] });
        };
    }
}
exports.OrganizationService = OrganizationService;
