// Problem 3
import { Professor, Class, Student } from "../types";

// Function that returns the names of all students a professor teaches in increasing order by age
export function studentsTaughtByProf(professor: Professor): string[] {
    // TODO: Implement logic to collect and sort students by age
    const classes = professor.classes
    const allStudents: Student[] = []
    for(let i = 0; i < classes.length; i++){
        const one_class = classes[i]
        const stud_in = one_class.students
        for(let j = 0; j < stud_in.length; j++){
            if (!allStudents.some(student => student.name === stud_in[j].name))
            allStudents.push(stud_in[j])
        }
    }
    allStudents.sort((a,b) => a.age - b.age)
    return allStudents.map(student => student.name); // Placeholder return statement
}
export default studentsTaughtByProf
