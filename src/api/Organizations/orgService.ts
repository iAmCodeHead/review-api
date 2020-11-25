// import { Reviews } from '../Review';
import { Organizations} from './orgModel';

export class OrganizationService {

    public getAllOrganizations = async () => {
       return await Organizations.find({ relations: ['reviews'] });
    }

}
