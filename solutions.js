"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplyValue(value, multiplier = 2) {
    return value * multiplier;
}
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
}
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
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
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
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
