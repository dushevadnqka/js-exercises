import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { ILesson } from 'src/lessons/ILesson';
import Lesson1 from 'src/lessons/Lesson1';
import Lesson2 from 'src/lessons/Lesson2';

const router = Router();
const { OK } = StatusCodes;
const dict = new Map([['Lesson1', Lesson1], ['Lesson2', Lesson2]]);

router.get('/lesson/:id', async (req: Request, res: Response) => {
    const id = req.params.id

    const lessonClass: string = 'Lesson' + id;

    const match = dict.get(lessonClass)
    
    const instance: ILesson = match ? new (match)() : new Lesson1() // by default

    return res.status(OK).json(instance.getResult());
});

export default router;