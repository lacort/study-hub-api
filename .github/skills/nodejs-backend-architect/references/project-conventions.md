# Project Conventions

## Stack assumptions
- Node.js
- JavaScript
- Express
- MongoDB + Mongoose
- Joi
- JWT auth
- Swagger/OpenAPI
- Jest
- Docker

## Folder structure
```txt
src/
  config/
  database/
  shared/
    errors/
    utils/
    constants/
  middlewares/
  modules/
    <module-name>/
      <module>.model.js
      <module>.schema.js
      <module>.service.js
      <module>.controller.js
      <module>.routes.js
      <module>.repository.js   # optional
  app.js
  server.js
```

## Architectural rules
- Controllers handle request/response only.
- Services contain business rules.
- Models define persistence structure.
- Schemas validate body, params, and query.
- Repositories are optional; use them when access logic is becoming noisy.
- Services must accept plain JavaScript objects and return plain JavaScript objects.
- Avoid passing Express/Fastify `req` or `res` into services.

## Endpoint contract expectations
For private endpoints:
- always scope reads and writes by authenticated `user_id`
- validate params, query, and body
- return consistent response shapes
- describe possible errors clearly

## Standard success response
```json
{
  "success": true,
  "message": "Resource created successfully",
  "data": {}
}
```

## Standard error response
```json
{
  "success": false,
  "error": "ValidationError",
  "details": {
    "field": "title",
    "message": "Title is required"
  }
}
```

## Mongoose guidelines
- Use timestamps where possible.
- Add indexes for common filters.
- Use enums for controlled fields.
- Keep ownership fields explicit, usually `user_id`.
- Leave request-shape validation to Joi schemas.

## MCP preparation guidelines
- Keep write actions in service methods with stable input/output.
- Group read-only queries into reusable query methods.
- Separate CRUD services from aggregate/reporting services when useful.
