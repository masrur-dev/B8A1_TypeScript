# Type Alias vs Interface in TypeScript

## Introduction

TypeScript provides two useful ways to define the structure of data: Type Alias and Interface. Both help developers write safer, cleaner, and more maintainable code. Although they are similar in many situations, they have some important differences.

## What Is a Type Alias?

A Type Alias allows developers to create a custom name for a type. It can represent objects, primitive types, unions, tuples, and more.

**Example:**

```typescript
type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Rahim",
  age: 22
};
```

Here, the `User` type defines the required properties of the object.

## What Is an Interface?

An Interface mainly defines the structure of objects and provides a contract that objects or classes can follow.

**Example:**

```typescript
interface IUser {
  name: string;
  age: number;
}

const user2: IUser = {
  name: "Karim",
  age: 25
};
```

## Key Differences

**1. Union Types:** Type Aliases can directly define union types, while Interfaces cannot.

**2. Extension:** Interfaces use `extends` to inherit properties. Type Aliases commonly use intersection types with `&` to combine structures.

**3. Declaration Merging:** Interfaces with the same name can merge their declarations. Type Aliases cannot be redeclared in the same scope.

**4. Flexibility:** Type Aliases can represent primitive types and tuples, while Interfaces are mainly used for object structures.

## Conclusion

Both Type Alias and Interface improve TypeScript code quality. Interfaces are useful for defining object structures, while Type Aliases are flexible for unions and complex types. Choosing between them depends on the requirements and coding conventions of the project.
