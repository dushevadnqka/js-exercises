import { ILesson } from "./ILesson";

class Lesson4 implements ILesson {

  countJumpsNumber (distanceStartPoint: number, distanceEndPoint: number, jumpDistance: number): number {
    return (distanceEndPoint - distanceStartPoint) / jumpDistance
  }

  /*
   * example: http://localhost:3000/api/toptal/lesson/4/10,85,30 {distanceStartPoint: 10, distanceEndPoint: 85, jumpDistance: 30}
   */
  getResult (input: string|number): number {
      if (typeof input !== 'string') {
        throw new Error("this lesson accepts only string of numbers (10,20,40)")
      }

      const arrayOfNumbers = input.split(',').map(function(item) {
          return parseInt(item, 10);
      });

      let [distanceStartPoint, distanceEndPoint, jumpDistance] = arrayOfNumbers

      const calc = this.countJumpsNumber(distanceStartPoint, distanceEndPoint, jumpDistance)

      return Math.ceil(calc)
    }
}

export default Lesson4;
