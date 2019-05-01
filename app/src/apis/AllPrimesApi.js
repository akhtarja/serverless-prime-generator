import GatewayApi from './GatewayApi';
import apiUrl from '../config/prime-viewer';

const AllPrimesApi = {
  get() {
    return GatewayApi.get(`${apiUrl.url}/allprimes`)
  }
};

export default AllPrimesApi;
