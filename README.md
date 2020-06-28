# Strapi application

A quick description of your strapi application

Yarn is the package manager for this project.

# Backend

## Run locally

#### Setup with local database
- Get heroku postgres credential
- create a .env file and fill DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORTa and DATABASE_USERNAME with the postgress info
- Get the cloudinary account credentil
- Fill the the .env file with CLOUDINARY_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET

From the backend directory run
`yarn develop`

## Deploying to heroku
From the root directory run
`git subtree push --prefix backend heroku master`

*Note: package.json.lock should be removed as it confused heroku deployment.*

**Heroku url:** https://casey-sokol-website.herokuapp.com/

# Frontend

## Run locally with local strapi server

Set up **.env.development** with local strapi information (API_URL, IMAGE_BASE_URL)

From the **frontend** directory.

- Install packages by running `yarn`

- Run development by running `yarn develop`

Note: Make sure strapi server is running in your local machine

## Run locally with production strapi server

Set up **.env.staging** with local strapi information (API_URL, IMAGE_BASE_URL)

From the **frontend** directory.

- Install packages by running `yarn`

- Run development by running `yarn staging`

## Deploy gatsby to Netlify

Have your changes in the **release** branch. Push the **release** branch to github.

After **release** branch is updated, netlify starts building the frontend. It usually takes a few minutes before you can see the updates.

**Frontend url:** https://casey-sokol.netlify.app/
