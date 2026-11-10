"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Problem 1: Function with Default Parameter
function multiplyValue(value, multiplier = 2) {
    return value * multiplier;
}
// Problem 2: Union Types and Type Narrowing
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
}
// Problem 3: Readonly Tuple and Destructuring
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// Problem 4: Generic Function with Rest Parameters
function concatenateArrays(...arrays) {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
}
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => course.isPublished === true &&
        course.students >= minStudents);
}
// Problem 6: Generics and keyof Operator
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
// Problem 7: Classes, Inheritance and Access Modifiers
class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
// Problem 8: Async Function and Promise Handling
async function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}
