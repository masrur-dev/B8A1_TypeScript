# Understanding Type Narrowing in TypeScript

## Introduction

Type Narrowing is an important feature of TypeScript that helps developers handle different types of data safely. When a variable can contain multiple types, TypeScript uses conditional checks to identify its specific type before performing an operation.

This makes applications more reliable and helps prevent common programming mistakes.

## What Is Type Narrowing?

Type Narrowing is the process of reducing a broad type into a more specific type using conditions.

For example, a variable might accept both strings and numbers. Before using string-specific methods, we need to confirm that the value is actually a string.

## 1. Using the typeof Operator

The `typeof` operator checks the type of a value.

```typescript
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
}
```

Here, TypeScript understands that `value` is a string inside the first condition and a number inside the second condition.

## 2. Using the instanceof Operator

The `instanceof` operator checks whether an object was created from a particular class.

```typescript
function checkDate(value: Date | string): void {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  } else {
    console.log(value.toUpperCase());
  }
}
```

## 3. Using the in Operator

The `in` operator checks whether a property exists in an object.

```typescript
type Admin = { role: string };
type Guest = { name: string };

function checkUser(user: Admin | Guest): void {
  if ("role" in user) {
    console.log(user.role);
  } else {
    console.log(user.name);
  }
}
```

## Conclusion

Type Narrowing helps TypeScript developers work safely with union types. Operators such as `typeof`, `instanceof`, and `in` help identify specific types and prevent invalid operations. Understanding Type Narrowing is especially useful when working with API responses, user information, and real-world applications.
