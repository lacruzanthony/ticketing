import axios from 'axios';

const ExportClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // server.
    return axios.create({
      baseURL: 'http://anthonyla.dev',
      headers: req.headers
    });
  } else {
    // browser.
    return axios.create({
      baseURL: '/'
    });
  }
};

export default ExportClient;
