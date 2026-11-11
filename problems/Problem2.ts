//Problem 2
import { Student } from "../types";

// Function that returns an array of students given names and ages
export function arrayOfStudents(names: string[], ages: number[]): Student[] {
    // TODO: Implement logic to create an array of Student objects
    const students: Student[] = [];
    for (let i = 0; i < names.length; i++){
        const one: Student = {
            name: names[i],
            age: ages[i]
        }
        students.push(one)
    }
    return students; // Placeholder return statement
}
export default arrayOfStudents
// Example
// arrayOfStudents(names, ages));
// Expected output:
// [
//     { name: "Joe", age: 50 },
//     { name: "Schmo", age: 60 }
// ]

