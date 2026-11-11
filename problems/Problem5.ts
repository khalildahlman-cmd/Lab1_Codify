// Problem 5

// Function that counts occurrences of a specific item in an array using generics

export function countOccurrences<T>(arr: T[], item: T): number {
    // TODO: Implement logic to count occurrences of item in arr
    let counter = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == item){
            counter = counter + 1
        }
    }
    return counter; // Placeholder return statement
}
export default countOccurrences
