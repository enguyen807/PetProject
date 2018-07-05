'use strict'
const path = require('path')
const feathers = require('feathers')
const configuration = require('feathers-configuration')
const middleware = require('./middleware')

const app = feathers()

app.configure(configuration(path.join(__dirname, './')))
  .configure(middleware)

// Register a simple todo service that returns the name and some text
app.use('todos', {
  async get(name) {
    // Return an object in the form of { name, text }
    return {
      name,
      text: `You have to do ${name}`
    };
  }
});

// A function that gets and logs a todo from the service
async function getTodo(name) {
  // Get the service we registered above
  const service = app.service('todos');
  // Call the `get` method with a name
  const todo = await service.get(name);

  // Log the todo we got back
  console.log(todo);
}

getTodo('dishes');





const host = app.get('host')
const port = app.get('port')

process.on('nuxt:build:done', (err) => {
  if (err) {
    console.error(err) // eslint-disable-line no-console
    process.exit(1)
  }
  const server = app.listen(port)
  server.on('listening', () =>
    console.log(`Feathers application started on ${host}:${port}`) // eslint-disable-line no-console
  )
})

module.exports = app
