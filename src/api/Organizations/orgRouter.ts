import express from 'express';
import { controllerHandler } from '../../utils/controllerHandler';
import { OrgController } from './orgController';

const router = express.Router();
const call = controllerHandler;
const Organization = new OrgController();

router.get('/', call(Organization.getAllOrganizations, (req, _res, _next) => []));

export const orgRouter = router;
