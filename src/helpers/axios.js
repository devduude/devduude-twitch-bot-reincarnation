import axios from 'axios';


async function call ({ method = 'get', url, data, params } = {}) {
  try {
    const response = await axios({
      method,
      url,
      params: method.toLowerCase() == 'get' ? params : undefined,
      data: method.toLowerCase() != 'get' ? data : undefined,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}


export default call;
