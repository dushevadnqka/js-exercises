import { ILesson } from "./ILesson";

const dec2bin = (dec: number): string => {
    return (dec >>> 0).toString(2);
}

const solution = (input: number): number => {
    const binaryRepresentation = dec2bin(input)
    const splitted = binaryRepresentation.split("1")

    // remove the last el anyway
    splitted.pop()

    const occurrences = splitted
                            .filter(i => ! (i === ''))
                            .filter(i => i.length > 1)
    let sequenceLength = 0

    if (occurrences.length > 0) {
        sequenceLength = Math.max(...(occurrences.map(el => el.length)))
    }
    
    return sequenceLength
}

class Lesson1 implements ILesson {

    getResult (input: string|number): string|number {
        const inputCatsed = typeof input === "number" ? input : parseInt(input, 10)
        return solution(inputCatsed)
    }
}

export default Lesson1;
