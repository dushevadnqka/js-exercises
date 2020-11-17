import { ILesson } from "./ILesson";

class Lesson2 implements ILesson {

    rotateArray (arrayOfNumbers: Array<number>, k: number): Array<number> {
        let i;
        for (i = 0; i < k; i++) { 
            const popEd = arrayOfNumbers.pop()
            if (popEd) {
                arrayOfNumbers.unshift(popEd)
            }
        }

        return arrayOfNumbers
    }
    
    // array rotation
    getResult (input: string|number): string {
        const arrayOfNumbers = [3, 8, 9, 7, 6] //[1, 2, 3, 4]
        const inputCatsed = typeof input === "number" ? input : parseInt(input, 10)

        const result = this.rotateArray(arrayOfNumbers, inputCatsed)

        return `[${result.join(", ")}]`
    }
}

export default Lesson2;
