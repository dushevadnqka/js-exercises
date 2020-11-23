import { ILesson } from "./ILesson";

class Lesson3 implements ILesson {

    findUnPaired (arr: Array<number>): number {
        let repeated: any = {}

        arr.forEach(x => {
          repeated[x] = (repeated[x] || 0)+1
        })

        const result = Object.keys(repeated).find(key => repeated[key] === 1)

        return result ? parseInt(result, 10) : 0
    }

    // odd occurrences
    getResult (input: string|number): number {
        const inputCatsed = typeof input === "number" ? input : parseInt(input, 10)

        const arrayOfNumbers = [3, 7, inputCatsed, 7, 3, 5, 5]

        return this.findUnPaired(arrayOfNumbers)
    }
}

export default Lesson3;
