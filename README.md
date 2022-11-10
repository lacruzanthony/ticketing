# Before to start

Seven services make this project: auth, client, common, expiration, orders, payments & tickets. Using NATS as a message broker. To start the project, we will need the following:

- Docker, install windows version [here](https://docs.docker.com/desktop/install/windows-install/)
- Skaffold, install windows version [here](https://skaffold.dev/docs/install/#). You will update your env variables after downloading the `.exe`
- Node.js. [Install](https://nodejs.org/en/download/)
- npm. who comes with Node.js
- Make sure you are using your local Docker context.

## Getting started

Once we have all our dependencies installed, we must create our Docker images. To do so, we have to go to each service
folder and run the following command:

### Auth service:

Once in the `ticketing` folder:

`cd auth`

and then

`Docker build -t <your_repository_name/image_name>`

The repository name could be your Docker user, and the image name is a random name, for example:

`Docker build -t anthonyla/auth`

Once the image is built, we can push it to our local Docker context:

`Docker push anthonyla/auth`

Once you run the steps above for each service, we can execute the skaffold command. It's essential to be placed in the `ticketing` folder:

`skaffold dev`

This will load and launch the `infra/k8s/ingress-serv.yaml` configuration.

Now you can go to your browser and type in the URL: `localhost`

You should see the main page:

![main page](./assets/main-page.png 'a title')

# The application
### Not logged in
- Main page: list of tickets created.
- Sign up: create a user.
- Sign-in: uses an existing user.

### Logged in
- Sell tickets: create a new ticket for the current user
- My orders: tickets already purchased
- Sign out: close the current session

## Using the application
To create a ticket, you must create a user using the `Sign up` option. Then you will see the `Sell tickets` in the header bar. Next, you will type a random name and price, and then you should see the ticket on the main page.
