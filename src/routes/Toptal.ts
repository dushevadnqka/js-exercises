import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { ILesson } from 'src/lessons/ILesson';
import Lesson1 from 'src/lessons/Lesson1';
import Lesson2 from 'src/lessons/Lesson2';
import Lesson3 from 'src/lessons/Lesson3';
import Lesson4 from 'src/lessons/Lesson4'

const router = Router();
const { OK } = StatusCodes;
const dict = new Map([['Lesson1', Lesson1], ['Lesson2', Lesson2], ['Lesson3', Lesson3], ['Lesson4', Lesson4]]);

router.get('/lesson/:id/:input', (req: Request, res: Response) => {
    const id = req.params.id
    const input = req.params.input

    const lessonClass: string = 'Lesson' + id;

    const match = dict.get(lessonClass)

    let instance: ILesson

    if (match) {
      instance = new (match)()
    } else {
      throw new Error("There is not such lesson in the catalogue.")
    }

    return res.status(OK).json(instance.getResult(input));
});

export default router;
