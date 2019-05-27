# redux-testing-library

Simple and maintainable tests for your react/redux application inspired by [react-testing-library](https://testing-library.com/).

[![Build Status](https://travis-ci.org/jabro86/redux-testing-library.svg?branch=master)](https://travis-ci.org/jabro86/redux-testing-library)
[![Coverage Status](https://coveralls.io/repos/github/jabro86/redux-testing-library/badge.svg?branch=master)](https://coveralls.io/github/jabro86/redux-testing-library?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- simple data-driven integration tests
- dispatch actions, wait for store changes and assert the result
- do not test implementation details: just rely on your actions and selectors
- it also covers all middleware functionalities, e.g. async code via redux-saga
- includes the full power of react-testing-library (no other dependencies)

## How to use?

```typescript
import * as React from "react";
import { render } from "redux-testing-library";

import { TodoApp, TodoActions, TodoSelectors } from "./example";

describe("when addTodo action is dispatched", () => {
  it("adds todo item to the store", async () => {
    const { store, waitForStoreChange } = render(<TodoApp.UI />, TodoApp.store);

    store.dispatch(TodoActions.addTodo("Test your application"));

    await waitForStoreChange(state => {
      const todos = TodoSelectors.getTodos(state);
      expect(todos[0].text).toBe("Test your application");
    });
  });
});
```
