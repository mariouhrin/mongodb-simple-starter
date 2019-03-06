## Test mongodb connection

### Need to install (Mac OS):

- Docker
- yarn
- Node.js 8+
- `brew install mongodb` (install mongodb)

### Additional installation before your first run:

- `chmod 775 ./run-mongo.sh` (make mongo init file executable)
- `yarn global add ts-node nodemon` (install globally nodemon and ts-node)
- `yarn` (install all dependencies)

### Try to run it

- `yarn start` (connect to mongodb)

or try to insert new document  

- `yarn test:db` 
