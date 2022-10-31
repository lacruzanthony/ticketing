# Before start

This project is made by seven services: auth, client, common, expiration, orders, payments & tickets. Using NATS as a message broker. To start the proyect we will need:

- Docker, install windows version [here](https://docs.docker.com/desktop/install/windows-install/)
- Skaffold, install windows version [here](https://skaffold.dev/docs/install/#). You will to update your env variables after download the `.exe`
- Node.js. [Install](https://nodejs.org/en/download/)
- npm. It will be installed with Node.js

## Getting started

Once we have all our dependencies installed, we need to create our Docker images, to do so, we have to go to each service
folder and run the following command:

### Auth service:

Once in `ticketing` folder:

`cd auth`

and then

`Docker build -t <your_repository_name/image_name>`

The repository name could be your Docker user, and the image name is a random name, for example:

`Docker build -t anthonyla/auth`

Once the image is build we can push it to our local Docker context:

`Docker push anthonyla/auth`

Once you have ran for each service the steps above, we can execute the skaffold command. It's important to be placed in `ticketing` folder:

`skaffold dev`

This will load and launch the `infra/k8s/ingress-serv.yaml` configuration.

Now you can go to your browser and type in the URL: `localhost`

You should see the main page:
![main page](./assets/main-page.png.png 'a title')
