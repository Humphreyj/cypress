## Project setup

This is a simple Node server developed to help refine a set of best practices for Cypress testing.

## To get started

Clone the project and in your terminal run `npm i`

This project uses a Postgres database, there are a few commands you will need to run to get it set up.

To run the database migrations:
`npm run migrate`

To seed the database:
`npm run seed`

If you wish to rollback the database:
`npm run rollback`
Then just run the above commands again to get it back to working.

Finally, to run the server:
`npm run server`

It will run on port 3030 by default, but you can change it if you want.

## ENV Variables

You'll need to create an env file and populate it with the following values

NODE_ENV = development
PGUSER = postgres
PGPASSWORD = yourPgPassword
PGDATABASE = cypress-testing
PGPORT = 5432
CLIENT_URL = http://localhost:3000/
