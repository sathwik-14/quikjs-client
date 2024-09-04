import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  node = signal(
    {}
  //   {
  //   name: '/',
  //   children: {
  //     controllers: {
  //       name: 'controllers',
  //       children: {
  //         'users.js': {
  //           name: 'users.js',
  //           content:
  //             "const db = require('../models/index');\n\nasync function createUsers(req, res) {\n  try {\n    const newUsers = await db.Users.create(req.body);\n    res.status(201).json(newUsers);\n  } catch (error) {\n    console.error(error.errors[0]);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function getAllUsers(req, res) {\n  try {\n    let { page = 1, limit = 10, sortBy, sortOrder } = req.query;\n\n    page = parseInt(page);\n    limit = parseInt(limit);\n\n    if (isNaN(page) || page < 1) {\n      page = 1;\n    }\n    if (isNaN(limit) || limit < 1 || limit > 100) {\n      limit = 10;\n    }\n\n    const options = {\n      offset: (page - 1) * limit, // Offset for pagination\n      limit: limit, // Limit the number of results per page\n      order: sortBy ? [[sortBy, sortOrder || 'ASC']] : [], // Sorting order\n    };\n\n    const usersList = await db.Users.findAll(options);\n\n    // Respond with the retrieved data\n    res.status(200).json(usersList);\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function getUsersById(req, res) {\n  try {\n    const { id } = req.params;\n    const users = await db.Users.findByPk(id);\n    if (!users) {\n      return res.status(404).json({ error: 'Users not found' });\n    }\n    res.status(200).json(users);\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function updateUsersById(req, res) {\n  try {\n    const { id } = req.params;\n    const [updatedCount, newValue] = await db.Users.update(req.body, {\n      where: { id },\n    });\n    if (updatedCount === 0) {\n      return res.status(404).json({ error: 'Users not found' });\n    }\n    res.status(200).json({ message: 'Users updated successfully', newValue });\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function deleteUsersById(req, res) {\n  try {\n    const { id } = req.params;\n    const deletedCount = await db.Users.destroy({ where: { id } });\n    if (deletedCount === 0) {\n      return res.status(404).json({ error: 'Users not found' });\n    }\n    res.status(200).json({ message: 'Users deleted successfully' });\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nmodule.exports = {\n  createUsers,\n  getAllUsers,\n  getUsersById,\n  updateUsersById,\n  deleteUsersById,\n};\n",
  //         },
  //         'tasks.js': {
  //           name: 'tasks.js',
  //           content:
  //             "const db = require('../models/index');\n\nasync function createTasks(req, res) {\n  try {\n    const newTasks = await db.Tasks.create(req.body);\n    res.status(201).json(newTasks);\n  } catch (error) {\n    console.error(error.errors[0]);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function getAllTasks(req, res) {\n  try {\n    let { page = 1, limit = 10, sortBy, sortOrder } = req.query;\n\n    page = parseInt(page);\n    limit = parseInt(limit);\n\n    if (isNaN(page) || page < 1) {\n      page = 1;\n    }\n    if (isNaN(limit) || limit < 1 || limit > 100) {\n      limit = 10;\n    }\n\n    const options = {\n      offset: (page - 1) * limit, // Offset for pagination\n      limit: limit, // Limit the number of results per page\n      order: sortBy ? [[sortBy, sortOrder || 'ASC']] : [], // Sorting order\n    };\n\n    const tasksList = await db.Tasks.findAll(options);\n\n    // Respond with the retrieved data\n    res.status(200).json(tasksList);\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function getTasksById(req, res) {\n  try {\n    const { id } = req.params;\n    const tasks = await db.Tasks.findByPk(id);\n    if (!tasks) {\n      return res.status(404).json({ error: 'Tasks not found' });\n    }\n    res.status(200).json(tasks);\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function updateTasksById(req, res) {\n  try {\n    const { id } = req.params;\n    const [updatedCount, newValue] = await db.Tasks.update(req.body, {\n      where: { id },\n    });\n    if (updatedCount === 0) {\n      return res.status(404).json({ error: 'Tasks not found' });\n    }\n    res.status(200).json({ message: 'Tasks updated successfully', newValue });\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function deleteTasksById(req, res) {\n  try {\n    const { id } = req.params;\n    const deletedCount = await db.Tasks.destroy({ where: { id } });\n    if (deletedCount === 0) {\n      return res.status(404).json({ error: 'Tasks not found' });\n    }\n    res.status(200).json({ message: 'Tasks deleted successfully' });\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nmodule.exports = {\n  createTasks,\n  getAllTasks,\n  getTasksById,\n  updateTasksById,\n  deleteTasksById,\n};\n",
  //         },
  //         'projects.js': {
  //           name: 'projects.js',
  //           content:
  //             "const db = require('../models/index');\n\nasync function createProjects(req, res) {\n  try {\n    const newProjects = await db.Projects.create(req.body);\n    res.status(201).json(newProjects);\n  } catch (error) {\n    console.error(error.errors[0]);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function getAllProjects(req, res) {\n  try {\n    let { page = 1, limit = 10, sortBy, sortOrder } = req.query;\n\n    page = parseInt(page);\n    limit = parseInt(limit);\n\n    if (isNaN(page) || page < 1) {\n      page = 1;\n    }\n    if (isNaN(limit) || limit < 1 || limit > 100) {\n      limit = 10;\n    }\n\n    const options = {\n      offset: (page - 1) * limit, // Offset for pagination\n      limit: limit, // Limit the number of results per page\n      order: sortBy ? [[sortBy, sortOrder || 'ASC']] : [], // Sorting order\n    };\n\n    const projectsList = await db.Projects.findAll(options);\n\n    // Respond with the retrieved data\n    res.status(200).json(projectsList);\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function getProjectsById(req, res) {\n  try {\n    const { id } = req.params;\n    const projects = await db.Projects.findByPk(id);\n    if (!projects) {\n      return res.status(404).json({ error: 'Projects not found' });\n    }\n    res.status(200).json(projects);\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function updateProjectsById(req, res) {\n  try {\n    const { id } = req.params;\n    const [updatedCount, newValue] = await db.Projects.update(req.body, {\n      where: { id },\n    });\n    if (updatedCount === 0) {\n      return res.status(404).json({ error: 'Projects not found' });\n    }\n    res\n      .status(200)\n      .json({ message: 'Projects updated successfully', newValue });\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nasync function deleteProjectsById(req, res) {\n  try {\n    const { id } = req.params;\n    const deletedCount = await db.Projects.destroy({ where: { id } });\n    if (deletedCount === 0) {\n      return res.status(404).json({ error: 'Projects not found' });\n    }\n    res.status(200).json({ message: 'Projects deleted successfully' });\n  } catch (error) {\n    console.error(error);\n    res.status(500).json({ error: 'Internal server error' });\n  }\n}\n\nmodule.exports = {\n  createProjects,\n  getAllProjects,\n  getProjectsById,\n  updateProjectsById,\n  deleteProjectsById,\n};\n",
  //         },
  //       },
  //     },
  //     models: {
  //       name: 'models',
  //       children: {},
  //     },
  //     routes: {
  //       name: 'routes',
  //       children: {
  //         'index.js': {
  //           name: 'index.js',
  //           content:
  //             "const router = require('express').Router();\n\n// import routes\nconst projectsRoutes = require('./projects');\nconst tasksRoutes = require('./tasks');\nconst usersRoutes = require('./users');\n\n// routes\nrouter.use('/projects', projectsRoutes);\nrouter.use('/tasks', tasksRoutes);\nrouter.use('/users', usersRoutes);\n\nmodule.exports = router;\n",
  //         },
  //         'users.js': {
  //           name: 'users.js',
  //           content:
  //             "const router = require('express').Router();\nconst usersController = require('../controllers/users');\nconst validate = require('../validation/validateMiddleware');\nconst {\n  createUsersSchema,\n  updateUsersSchema,\n} = require('../validation/schemas/usersSchema');\n\n// GET all users\n/**\n * @openapi\n * '/api/users':\n *  get:\n *     tags:\n *     - Users\n *     summary: Get all users\n *     responses:\n *      200:\n *        description: Fetched Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.get('/', usersController.getAllUsers);\n// GET users by ID\n/**\n * @openapi\n * '/api/users/{id}':\n *  get:\n *     tags:\n *     - Users\n *     summary: Get users by id\n *     parameters:\n *      - name: id\n *        in: path\n *        description: The id of the users\n *        required: true\n *     responses:\n *      200:\n *        description: Fetched Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.get('/:id', usersController.getUsersById);\n// Create a new users\n/**\n * @openapi\n * '/api/users':\n *  post:\n *     tags:\n *     - Users\n *     summary: Create new users entry\n *     requestBody:\n *      required: true\n *      content:\n *        application/json:\n *           schema:\n *            type: object\n *            properties:\n *              username:\n *                type: string\n *              email:\n *                type: string\n *              password:\n *                type: string\n *     responses:\n *      201:\n *        description: Created Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.post('/', validate(createUsersSchema), usersController.createUsers);\n// Update users by ID\n/**\n * @openapi\n * '/api/users/{id}':\n *  patch:\n *     tags:\n *     - Users\n *     summary: Modify existing users entry\n *     parameters:\n *      - name: id\n *        in: path\n *        description: The id of the users\n *        required: true\n *     requestBody:\n *      required: true\n *      content:\n *        application/json:\n *           schema:\n *            type: object\n *            properties:\n *              username:\n *                type: string\n *              email:\n *                type: string\n *              password:\n *                type: string\n *     responses:\n *      201:\n *        description: Modified Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.patch(\n  '/:id',\n  validate(updateUsersSchema),\n  usersController.updateUsersById,\n);\n// Delete users by ID\n/**\n * @openapi\n * '/api/users/{id}':\n *  delete:\n *     tags:\n *     - Users\n *     summary: Delete a users entry\n *     parameters:\n *      - name: id\n *        in: path\n *        description: The id of the users\n *        required: true\n *     responses:\n *      200:\n *        description: Deleted Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.delete('/:id', usersController.deleteUsersById);\n\nmodule.exports = router;\n",
  //         },
  //         'tasks.js': {
  //           name: 'tasks.js',
  //           content:
  //             "const router = require('express').Router();\nconst tasksController = require('../controllers/tasks');\nconst validate = require('../validation/validateMiddleware');\nconst {\n  createTasksSchema,\n  updateTasksSchema,\n} = require('../validation/schemas/tasksSchema');\n\n// GET all tasks\n/**\n * @openapi\n * '/api/tasks':\n *  get:\n *     tags:\n *     - Tasks\n *     summary: Get all tasks\n *     responses:\n *      200:\n *        description: Fetched Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.get('/', tasksController.getAllTasks);\n// GET tasks by ID\n/**\n * @openapi\n * '/api/tasks/{id}':\n *  get:\n *     tags:\n *     - Tasks\n *     summary: Get tasks by id\n *     parameters:\n *      - name: id\n *        in: path\n *        description: The id of the tasks\n *        required: true\n *     responses:\n *      200:\n *        description: Fetched Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.get('/:id', tasksController.getTasksById);\n// Create a new tasks\n/**\n * @openapi\n * '/api/tasks':\n *  post:\n *     tags:\n *     - Tasks\n *     summary: Create new tasks entry\n *     requestBody:\n *      required: true\n *      content:\n *        application/json:\n *           schema:\n *            type: object\n *            properties:\n *              title:\n *                type: string\n *              description:\n *                type: string\n *              status:\n *                type: string\n *              priority:\n *                type: string\n *              due_date:\n *                type: string\n *              user_id:\n *                type: integer\n *              project_id:\n *                type: integer\n *     responses:\n *      201:\n *        description: Created Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.post('/', validate(createTasksSchema), tasksController.createTasks);\n// Update tasks by ID\n/**\n * @openapi\n * '/api/tasks/{id}':\n *  patch:\n *     tags:\n *     - Tasks\n *     summary: Modify existing tasks entry\n *     parameters:\n *      - name: id\n *        in: path\n *        description: The id of the tasks\n *        required: true\n *     requestBody:\n *      required: true\n *      content:\n *        application/json:\n *           schema:\n *            type: object\n *            properties:\n *              title:\n *                type: string\n *              description:\n *                type: string\n *              status:\n *                type: string\n *              priority:\n *                type: string\n *              due_date:\n *                type: string\n *              user_id:\n *                type: integer\n *              project_id:\n *                type: integer\n *     responses:\n *      201:\n *        description: Modified Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.patch(\n  '/:id',\n  validate(updateTasksSchema),\n  tasksController.updateTasksById,\n);\n// Delete tasks by ID\n/**\n * @openapi\n * '/api/tasks/{id}':\n *  delete:\n *     tags:\n *     - Tasks\n *     summary: Delete a tasks entry\n *     parameters:\n *      - name: id\n *        in: path\n *        description: The id of the tasks\n *        required: true\n *     responses:\n *      200:\n *        description: Deleted Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.delete('/:id', tasksController.deleteTasksById);\n\nmodule.exports = router;\n",
  //         },
  //         'projects.js': {
  //           name: 'projects.js',
  //           content:
  //             "const router = require('express').Router();\nconst projectsController = require('../controllers/projects');\nconst validate = require('../validation/validateMiddleware');\nconst {\n  createProjectsSchema,\n  updateProjectsSchema,\n} = require('../validation/schemas/projectsSchema');\n\n// GET all projects\n/**\n * @openapi\n * '/api/projects':\n *  get:\n *     tags:\n *     - Projects\n *     summary: Get all projects\n *     responses:\n *      200:\n *        description: Fetched Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.get('/', projectsController.getAllProjects);\n// GET projects by ID\n/**\n * @openapi\n * '/api/projects/{id}':\n *  get:\n *     tags:\n *     - Projects\n *     summary: Get projects by id\n *     parameters:\n *      - name: id\n *        in: path\n *        description: The id of the projects\n *        required: true\n *     responses:\n *      200:\n *        description: Fetched Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.get('/:id', projectsController.getProjectsById);\n// Create a new projects\n/**\n * @openapi\n * '/api/projects':\n *  post:\n *     tags:\n *     - Projects\n *     summary: Create new projects entry\n *     requestBody:\n *      required: true\n *      content:\n *        application/json:\n *           schema:\n *            type: object\n *            properties:\n *              name:\n *                type: string\n *              description:\n *                type: string\n *              status:\n *                type: string\n *     responses:\n *      201:\n *        description: Created Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.post(\n  '/',\n  validate(createProjectsSchema),\n  projectsController.createProjects,\n);\n// Update projects by ID\n/**\n * @openapi\n * '/api/projects/{id}':\n *  patch:\n *     tags:\n *     - Projects\n *     summary: Modify existing projects entry\n *     parameters:\n *      - name: id\n *        in: path\n *        description: The id of the projects\n *        required: true\n *     requestBody:\n *      required: true\n *      content:\n *        application/json:\n *           schema:\n *            type: object\n *            properties:\n *              name:\n *                type: string\n *              description:\n *                type: string\n *              status:\n *                type: string\n *     responses:\n *      201:\n *        description: Modified Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.patch(\n  '/:id',\n  validate(updateProjectsSchema),\n  projectsController.updateProjectsById,\n);\n// Delete projects by ID\n/**\n * @openapi\n * '/api/projects/{id}':\n *  delete:\n *     tags:\n *     - Projects\n *     summary: Delete a projects entry\n *     parameters:\n *      - name: id\n *        in: path\n *        description: The id of the projects\n *        required: true\n *     responses:\n *      200:\n *        description: Deleted Successfully\n *      400:\n *        description: Bad Request\n *      404:\n *        description: Not Found\n *      500:\n *        description: Server Error\n */\nrouter.delete('/:id', projectsController.deleteProjectsById);\n\nmodule.exports = router;\n",
  //         },
  //       },
  //     },
  //     middlewares: {
  //       name: 'middlewares',
  //       children: {},
  //     },
  //     utils: {
  //       name: 'utils',
  //       children: {},
  //     },
  //     config: {
  //       name: 'config',
  //       children: {
  //         'db.js': {
  //           name: 'db.js',
  //           content:
  //             "const { Sequelize } = require('sequelize');\nrequire('dotenv').config();\n\nconst dbUri = process.env['DATABASE_URL'];\nconst sequelize = new Sequelize(dbUri, { logging: false });\n\nconst testDbConnection = async () => {\n  try {\n    await sequelize.authenticate();\n    console.log('Connection has been established successfully.');\n  } catch (error) {\n    console.error('Unable to connect to the database:', error);\n  }\n};\ntestDbConnection();\nmodule.exports = { sequelize };\n",
  //         },
  //       },
  //     },
  //     validation: {
  //       name: 'validation',
  //       children: {
  //         schemas: {
  //           name: 'schemas',
  //           children: {
  //             'usersSchema.js': {
  //               name: 'usersSchema.js',
  //               content:
  //                 "let Joi = require('joi');\n\n// Schema for creating a product, all fields are required\nlet createUsersSchema = Joi.object().keys({\n  username: Joi.string().required(),\n  email: Joi.string().required(),\n  password: Joi.string().required(),\n});\n\n// Schema for editing a product, all fields are optional and we can have a custom error message\nlet updateUsersSchema = Joi.object().keys({\n  username: Joi.string(),\n  email: Joi.string(),\n  password: Joi.string(),\n});\n\nmodule.exports = {\n  createUsersSchema,\n  updateUsersSchema,\n};\n",
  //             },
  //             'tasksSchema.js': {
  //               name: 'tasksSchema.js',
  //               content:
  //                 "let Joi = require('joi');\n\n// Schema for creating a product, all fields are required\nlet createTasksSchema = Joi.object().keys({\n  title: Joi.string().required(),\n  description: Joi.string(),\n  status: Joi.string().required(),\n  priority: Joi.string().required(),\n  due_date: Joi.date(),\n  user_id: Joi.number().required(),\n  project_id: Joi.number().required(),\n});\n\n// Schema for editing a product, all fields are optional and we can have a custom error message\nlet updateTasksSchema = Joi.object().keys({\n  title: Joi.string(),\n  description: Joi.string(),\n  status: Joi.string(),\n  priority: Joi.string(),\n  due_date: Joi.date(),\n  user_id: Joi.number(),\n  project_id: Joi.number(),\n});\n\nmodule.exports = {\n  createTasksSchema,\n  updateTasksSchema,\n};\n",
  //             },
  //             'projectsSchema.js': {
  //               name: 'projectsSchema.js',
  //               content:
  //                 "let Joi = require('joi');\n\n// Schema for creating a product, all fields are required\nlet createProjectsSchema = Joi.object().keys({\n  name: Joi.string().required(),\n  description: Joi.string(),\n  status: Joi.string().required(),\n});\n\n// Schema for editing a product, all fields are optional and we can have a custom error message\nlet updateProjectsSchema = Joi.object().keys({\n  name: Joi.string(),\n  description: Joi.string(),\n  status: Joi.string(),\n});\n\nmodule.exports = {\n  createProjectsSchema,\n  updateProjectsSchema,\n};\n",
  //             },
  //           },
  //         },
  //         'validateMiddleware.js': {
  //           name: 'validateMiddleware.js',
  //           content:
  //             "const createValidator = require('./createValidator');\n\nconst validateMiddleware = (schema) => (req, res, next) => {\n  const payload = req.body;\n  const validate = createValidator(payload, schema);\n\n  // proceed next if validated otherwise catch error and pass onto express error handler\n  validate\n    .then((validated) => {\n      req.body = validated;\n      next();\n    })\n    .catch((error) => {\n      res.status(400).send(error.details);\n    });\n};\n\nmodule.exports = validateMiddleware;\n",
  //         },
  //         'createValidator.js': {
  //           name: 'createValidator.js',
  //           content:
  //             'const createValidator = async (payload, schema) => {\n  const { error, value } = await schema.validate(payload, {\n    // shows all error messages instead of first error message\n    abortEarly: false,\n  });\n  if (error) {\n    throw error;\n  }\n  return value;\n};\n\nmodule.exports = createValidator;\n',
  //         },
  //       },
  //     },
  //     '.env': {
  //       name: '.env',
  //       content: 'DATABASE_URL=""',
  //     },
  //     '.gitignore': {
  //       name: '.gitignore',
  //       content: 'node_modules\n.env\n',
  //     },
  //     'README.md': {
  //       name: 'README.md',
  //       content: '# Your Project Name\n\nProject documentation goes here.',
  //     },
  //     'config.json': {
  //       name: 'config.json',
  //       content:
  //         '{"schema":{"users":[{"name":"username","type":"STRING","size":"","defaultValue":"","primaryKey":false,"allowNulls":false,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false},{"name":"email","type":"STRING","size":"","defaultValue":"","primaryKey":false,"allowNulls":false,"unique":true,"autoIncrement":false,"foreignKey":false,"add_another":false},{"name":"password","type":"STRING","size":"","defaultValue":"","primaryKey":false,"allowNulls":false,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false}],"tasks":[{"name":"title","type":"STRING","size":"","defaultValue":"","primaryKey":false,"allowNulls":false,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false},{"name":"description","type":"TEXT","defaultValue":"","primaryKey":false,"allowNulls":true,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false},{"name":"status","type":"STRING","size":"","defaultValue":"pending","primaryKey":false,"allowNulls":false,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false},{"name":"priority","type":"STRING","size":"","defaultValue":"medium","primaryKey":false,"allowNulls":false,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false},{"name":"due_date","type":"DATE","defaultValue":"","primaryKey":false,"allowNulls":true,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false},{"name":"user_id","type":"INTEGER","defaultValue":"","primaryKey":false,"allowNulls":false,"unique":false,"autoIncrement":false,"foreignKey":true,"refTable":"users","refField":"id","add_another":false},{"name":"project_id","type":"INTEGER","defaultValue":"","primaryKey":false,"allowNulls":false,"unique":false,"autoIncrement":false,"foreignKey":true,"refTable":"projects","refField":"id","relationshipType":"Many-to-One","add_another":false}],"projects":[{"name":"name","type":"STRING","size":"","defaultValue":"","primaryKey":false,"allowNulls":false,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false},{"name":"description","type":"TEXT","defaultValue":"","primaryKey":false,"allowNulls":true,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false},{"name":"status","type":"STRING","size":"","defaultValue":"active","primaryKey":false,"allowNulls":false,"unique":false,"autoIncrement":false,"foreignKey":false,"add_another":false}]}}',
  //     },
  //     'access.log': {
  //       name: 'access.log',
  //       content: '',
  //     },
  //     'error.log': {
  //       name: 'error.log',
  //       content: '',
  //     },
  //     'app.js': {
  //       name: 'app.js',
  //       content:
  //         "const express = require('express');\nconst cors = require('cors');\nconst dotenv = require('dotenv');\nconst helmet = require('helmet');\nconst compression = require('compression');\nconst morgan = require('morgan');\nconst fs = require('node:fs');\nconst path = require('node:path');\n\nconst swaggerJSDoc = require('./swagger');\nconst routes = require('./routes');\n\nconst PORT = process.env.PORT || '3000';\n\n// Load environment variables from .env file\ndotenv.config();\n\n// Initialize Express app\nconst app = express();\n\n// Middlewares\napp.use(cors());\napp.use(express.json()); // Parses JSON bodies\napp.use(express.urlencoded({ extended: true })); // Parses URL-encoded form data\napp.use(helmet()); // Set security HTTP headers\napp.use(\n  morgan('combined', {\n    stream: fs.createWriteStream(path.join(process.cwd(), 'access.log'), {\n      flags: 'a',\n    }),\n  }),\n); // Logging to file\napp.use(compression()); // Gzip compression\n\napp.get('/', (req, res) => {\n  res.status(200).send('Welcome ! to test');\n});\n\napp.use('/api', routes);\n\n// Routes\n\napp.use((err, req, res, next) => {\n  console.error('Custom error handler - ' + err.stack);\n\n  // Log the error to a file\n  const logStream = fs.createWriteStream(path.join(__dirname, 'error.log'), {\n    flags: 'a',\n  });\n  logStream.write(new Date().toISOString() + ': ' + err.stack + '\\n');\n  logStream.end();\n\n  res.status(500).send('Something went wrong!');\n});\n\n// Start the server\napp.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});\nswaggerJSDoc(app, PORT);\n",
  //     },
  //     'swagger.js': {
  //       name: 'swagger.js',
  //       content:
  //         "const swaggerJsdoc = require('swagger-jsdoc');\nconst swaggerUi = require('swagger-ui-express');\n\nconst options = {\n  definition: {\n    openapi: '3.0.0',\n    info: {\n      title: 'test API',\n      description: 'API endpoints for a test services documented on swagger',\n      contact: {\n        name: 'Desmond Obisi',\n        email: 'info@miniblog.com',\n        url: 'https://github.com/DesmondSanctity/node-js-swagger',\n      },\n      version: '1.0.0',\n    },\n    servers: [\n      {\n        url: 'http://localhost:3000/',\n        description: 'Local server',\n      },\n      //   {\n      //     url: \"<your live url here>\",\n      //     description: \"Live server\"\n      //   },\n    ],\n  },\n  // looks for configuration in specified directories\n  apis: ['./routes/*.js'],\n};\nconst swaggerSpec = swaggerJsdoc(options);\nfunction swaggerDocs(app, port) {\n  // Swagger Page\n  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));\n  // Documentation in JSON format\n  app.get('/docs.json', (req, res) => {\n    res.setHeader('Content-Type', 'application/json');\n    res.send(swaggerSpec);\n  });\n}\nmodule.exports = swaggerDocs;\n",
  //     }
  //   },
  // }
)
  currentNode = signal({
    name:'',
    children:{},
    content:''
  })
  constructor() { }
}
