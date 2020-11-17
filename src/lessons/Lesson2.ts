import { ILesson } from "./ILesson";

class Lesson2 implements ILesson {

    getResult (input: string|number): string {
        return `test lesson 2 input(${input})`
    }
}

export default Lesson2;
