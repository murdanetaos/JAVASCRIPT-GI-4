function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; // return 0 if the input array is empty
    }
  
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;
    return average;
  }

const numbers =[1,4,6];
const average = calculateAverage(numbers);
console.log(average);