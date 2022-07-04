import axios from 'axios';

const Landing = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing Page</h1>;
};

Landing.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // we are on the server.
    // request should be made to http://ingress-nginx...
    const { data } = axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: {
          Host: 'ticketing.dev'
        }
      }
    );

    console.log('on the server------------------');
    return { data };
  } else {
    // we are on the browser.
    // the base URL could be ''
    const { data } = axios.get('/api/users/currentuser');
    return { data };
  }
};

export default Landing;
