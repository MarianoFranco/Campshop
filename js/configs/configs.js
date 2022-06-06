export const BASE_URL = `https://campshop-semester-project.herokuapp.com`;

export const headers = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
};
