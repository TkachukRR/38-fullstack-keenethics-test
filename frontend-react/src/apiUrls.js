const URL = 'localhost';
const PROTOCOL = 'http';
const PORT = '5000';
const ADMIN_API_PATH = 'api/admin/bikes';

const BASE_URL = `${PROTOCOL}://${URL}:${PORT}/${ADMIN_API_PATH}`;

export const ADMIN_BIKES_URL = {
  getAll: `${BASE_URL}/all`,
  createBike: `${BASE_URL}/create`,
  updateBikeStatus: `${BASE_URL}`,
  deleteBike: `${BASE_URL}/delete`,
  getStats: `${BASE_URL}/stats`,
};
