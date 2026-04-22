---
name: nodejs-backend-architect
description: generate and refine node.js backend architecture, github issue markdown, mongoose models, module folder structures, api payloads, swagger docs, validation schemas, and mcp-ready service boundaries for javascript backends using mongodb, docker, express or fastify. use when the user asks to create a backend module, detail backlog tasks, generate a mongoose model, define endpoints and validations, design project structure, standardize responses and errors, or prepare a backend for future github-based workflows and mcp integration.
---

# Node.js Backend Architect

## Overview
Use this skill to design and generate consistent backend artifacts for a Node.js JavaScript API using MongoDB, Docker, and an Express or Fastify style architecture. Prefer practical outputs over abstract advice: return GitHub-ready markdown, code scaffolds, validation contracts, Swagger docs, payload examples, folder structures, and MCP-preparation guidance.

## Working style
- Assume the backend uses **JavaScript, not TypeScript**.
- Prefer **Express + Mongoose + Joi or Zod + Swagger/OpenAPI + Jest** unless the user specifies otherwise.
- Keep controllers thin, move business rules to services, and keep services reusable outside the HTTP layer.
- Default to a layered structure: `model`, `schema`, `service`, `controller`, `routes`, optional `repository`.
- When the user asks for code, produce code in English. Keep explanations in the conversation language.
- When the user asks for tasks or planning, output directly reusable **Markdown for GitHub**.
- When the user asks for endpoints, always include: route, method, request payload, success response, possible errors, validation rules, checklist, and acceptance criteria.
- When the user asks for a module, generate a coherent package of artifacts rather than isolated snippets.

## Core capabilities

### 1. Create or extend a backend module
When the user asks for a module such as `resources`, `notes`, `study-sessions`, or similar:
1. Define the module objective.
2. Propose or use the MongoDB model fields.
3. Define the folder structure.
4. Generate the Mongoose model.
5. Generate validation schema files.
6. Generate service methods.
7. Generate controller methods.
8. Generate route definitions.
9. Add request/response payload examples.
10. Add Swagger/OpenAPI docs.
11. Note what should remain reusable for future MCP integration.

Use the structure and conventions in `references/project-conventions.md`.
Use the output format templates in `references/output-templates.md`.

### 2. Detail a backlog task into a GitHub issue
When the user asks to detail a task:
- Return **one self-contained Markdown block** suitable for direct paste into GitHub.
- Include:
  - title
  - description
  - endpoint or file scope if relevant
  - objective
  - business rules
  - request/response examples if relevant
  - checklist
  - acceptance criteria
  - implementation notes
- If the user asks for multiple tasks, return them in one Markdown block separated by `---`.

### 3. Generate a Mongoose model
When the user asks for a model:
- Return JavaScript code using Mongoose.
- Include enums, indexes, timestamps, ownership via `user_id` where relevant, and comments only when helpful.
- If the model implies filters or aggregations later, add the suggested indexes.
- Mention validation expectations that belong in the request schema instead of the model.

### 4. Generate endpoints and validations
When the user asks for endpoints and validations:
- Treat each endpoint as a contract.
- Include method, path, auth requirement, body/params/query validation, success response, error cases, and acceptance criteria.
- If useful, generate the validation schema in Joi or Zod.
- Always scope private data by authenticated `user_id`.
- Prefer partial update with `PATCH` and validate only allowed fields.

### 5. Produce architecture outputs
When the user asks for a plan, structure, or architecture:
- Return a practical structure, not generic theory.
- Include:
  - module boundaries
  - reusable service boundaries
  - error handling approach
  - response contract
  - validation approach
  - testing recommendations
  - Docker or deployment notes if relevant
- If the project may later expose MCP tools or resources, explicitly separate read-only queries from write actions.

### 6. Prepare the backend for MCP integration
When the user asks anything related to MCP preparation:
- Identify service methods that map well to future tools.
- Identify read-only queries that map well to future resources.
- Identify workflows that map well to future prompts.
- Recommend stable service input/output contracts.
- Keep business logic independent from Express/Fastify request and response objects.

## Output rules
- Prefer **copy-paste-ready** outputs.
- For GitHub issues, return **one fenced Markdown block** if the user explicitly asks for Markdown.
- For code, return complete file contents when the user asks for implementation.
- For APIs, include real example payloads.
- For Swagger docs, prefer concise, usable examples over exhaustive boilerplate.
- For folder structures, use fenced text blocks.
- Avoid TypeScript types and interfaces unless the user explicitly changes the stack again.

## Default project assumptions
Unless the user overrides them, assume:
- runtime: Node.js
- language: JavaScript
- framework: Express
- database: MongoDB with Mongoose
- validation: Joi
- auth: JWT bearer token
- tests: Jest
- docs: Swagger/OpenAPI
- containerization: Docker and docker compose

## Quality bar
Before finalizing any backend artifact, check:
- Is ownership scoped correctly by `user_id`?
- Are request validations explicit?
- Are error cases described clearly?
- Is the response shape standardized?
- Are services reusable outside the HTTP layer?
- Is the output directly usable by the user with minimal editing?

## Examples

### Example request: create a module
User: `crie um módulo resources`

Expected response shape:
- folder structure
- model fields
- mongoose model
- joi validation schemas
- controller/service/routes scaffold
- endpoints and payload examples
- swagger summary
- notes for future MCP exposure

### Example request: detail a task
User: `detalhe a task create endpoint to update resource em markdown`

Expected response shape:
- one fenced Markdown block containing the full GitHub issue

### Example request: model generation
User: `gere um model mongoose para study sessions`

Expected response shape:
- complete `.js` model file
- suggested indexes
- short implementation notes

### Example request: MCP prep
User: `quais operações desse módulo viram tools e quais viram resources no mcp?`

Expected response shape:
- tool candidates
- resource candidates
- prompt workflow candidates
- recommended service boundaries
