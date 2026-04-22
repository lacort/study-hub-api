# Output Templates

## GitHub issue template
````markdown
# Task XX — <task name>

## Title
feat: <title>

## Description
<what should be implemented>

## Endpoint
`METHOD /path`

## Objective
<practical outcome>

## Business Rules
- <rule 1>
- <rule 2>

## Suggested Request Payload
```json
{}
```

## Success Response
**Status:** `200 OK`

```json
{}
```

## Possible Errors
- `400 Bad Request` ...
- `401 Unauthorized` ...
- `404 Not Found` ...

## Technical Checklist
- [ ] ...
- [ ] ...

## Acceptance Criteria
- [ ] ...
- [ ] ...

## Notes
- ...
````

## Mongoose model template
```js
const mongoose = require('mongoose')
const { Schema } = mongoose

const ExampleSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

module.exports = mongoose.model('Example', ExampleSchema)
```

## Joi body schema template
```js
const Joi = require('joi')

const createExampleSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().allow('', null)
})

module.exports = {
  createExampleSchema
}
```

## Service method template
```js
async function createExampleService({ userId, title, description }) {
  const created = await ExampleModel.create({
    user_id: userId,
    title,
    description
  })

  return {
    id: created._id,
    title: created.title,
    description: created.description,
    created_at: created.created_at,
    updated_at: created.updated_at
  }
}
```
