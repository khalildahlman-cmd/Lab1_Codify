// Problem 4
import { Student, Athlete } from "../types";

// Function that converts all students into athletes with a default sport
export function allAthletes(students: (Student | Athlete)[], defaultSport: string): Athlete[] {
    // TODO: Implement logic to ensure all students have a sport
    const allAthletes: Athlete[] = []
    for (let i = 0; i < students.length; i++){
        if ("sport" in students[i]){
            allAthletes.push(students[i])
        }
        else{
            const athlete1: Athlete = {
                name: students[i].name,
                age: students[i].age,
                sport: defaultSport
            }
            allAthletes.push(athlete1)
        }
    }
    return allAthletes; // Placeholder return statement
}
export default allAthletes
