npm install
Downloads and installs all the dependencies (packages/libraries) listed in your package.json file.
Use case: Setting up a project for the first time after cloning it from GitHub, or updating your local node_modules folder.

npx tsc
Transpiles (converts) TypeScript code into pure JavaScript.
Use case: Checking for type errors and preparing the code to run in production.

node index.js
Runs a JavaScript file once.
Use case: Running the project in production or testing a finished script.

node --watch index.ts
Runs a TypeScript file and monitors it for changes.
Use case: Development; the app automatically restarts every time you save your code.

npx prisma studio
Opens a visual dashboard (in your browser) to manage your database.
Use case: Viewing, creating, editing, or deleting data without using SQL or external software.

npx prisma migrate dev
Tracks history by creating SQL migration files and applies structural changes to your development database.
Use case: Keeping your database structure synchronized with your schema.prisma file during development while preserving existing data (unlike --force-reset). It also prompts you to name the change (e.g., add-user-table) for tracking purposes.

prisma db push --force-reset
Completely wipes (deletes) the database and recreates the structure from scratch.
Use case: Resetting the database during development to test major changes (⚠️ deletes all data!).

npx prisma generate
Generates/updates the "Prisma Client" based on your schema file.
Use case: Enabling autocomplete and correct type definitions in your code editor after changing your tables.

npx tsx index.ts
Runs a TypeScript file directly and instantly in memory.
Use case: Fast testing and running of TypeScript scripts or servers during development without manual compilation.

npx tsx --watch index.ts
Runs a TypeScript file directly in memory and monitors it for changes.
Use case: Development; it combines the instant execution of tsx with an automatic restart every time you save your code, making it the ultimate tool for a fast TypeScript workflow.
