# Node.js Lab 05 – Async JavaScript & Food Delivery

**Lab Number:** 05  
**Date:** 26 August 2026

## Overview

This lab demonstrates asynchronous JavaScript in Node.js using callbacks, Promises, Promise chaining, async/await, and concurrent execution with `Promise.all()`.

## JavaScript Files

1. **callback-version.js** – Demonstrates asynchronous programming using callbacks and shows how nested callbacks can make code harder to manage.

2. **promise-version.js** – Demonstrates how Promises use `resolve` and `reject` to handle successful and failed asynchronous operations.

3. **chaining-version.js** – Demonstrates Promise chaining using `.then()` and `.catch()` to execute multiple asynchronous order steps sequentially.

4. **async-await-version.js** – Demonstrates how `async/await` makes Promise-based asynchronous code easier to read and manage while supporting proper error handling with `try...catch`.

5. **concurrent-orders.js** – Demonstrates running multiple independent orders concurrently using `Promise.all()` and shows that the total time is roughly equal to the longest individual delay.

## Key Concepts Covered

- Callbacks
- Promises
- `resolve()` and `reject()`
- Promise chaining
- `.then()` and `.catch()`
- `async` / `await`
- `try...catch`
- Concurrent asynchronous operations
- `Promise.all()`
- Node.js Event Loop
- `setTimeout()`

## How to Run

Run each JavaScript file using Node.js:

```bash
node callback-version.js
node promise-version.js
node chaining-version.js
node async-await-version.js
node concurrent-orders.js