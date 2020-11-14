import { ILesson } from "./ILesson";

const dec2bin = (dec: number): string => {
    return (dec >>> 0).toString(2);
}

const solution = (input: number): number => {
    const binaryRepresentation = dec2bin(input)
    const splitted = binaryRepresentation.split("1")

    // remove the last el anyway
    splitted.pop()

    const occurrences = splitted.filter(i => ! (i === ''))
    let sequenceLength = 0

    if (occurrences.length > 0) {
        sequenceLength = Math.max(...(occurrences.map(el => el.length)))
    }
    
    return sequenceLength
}

class Lesson1 implements ILesson {

    getResult (): string|number {

        //32 has zeroes, but hasn't 1 on the end
        //1041 should return 5 (longest sequence)
        return solution(9)
    }
}

export default Lesson1;
