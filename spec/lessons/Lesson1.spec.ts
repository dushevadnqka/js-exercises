import Lesson1 from '../../src/lessons/Lesson1'; 

const lesson1 = new Lesson1()

describe('Lesson 1', () => {
    it('lesson 1 should return correct result when ....', () => {
      
      const result = lesson1.getResult(32)

      expect (result === 0)
    });
  });
  