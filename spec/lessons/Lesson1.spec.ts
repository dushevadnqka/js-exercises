import Lesson1 from '../../src/lessons/Lesson1'; 

const lesson1 = new Lesson1()

// 32 has zeroes, but hasn't 1 on the end
// 1041 should return 5 (longest sequence)
// 5 has 101 which is one zero
describe('Lesson 1', () => {
    it('lesson 1 should return correct result on various input', () => {
      const inputs = [
        {input: 32, result: 0},
        {input: 1041, result: 5},
        {input: 5, result: 0}
      ] 

      inputs.forEach(e => {
        expect (lesson1.getResult(e.input) === e.result)
      });
    });
  });
  