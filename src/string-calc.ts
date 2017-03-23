
export function calc(inputString: string){
     if (inputString === '') return 0;
     let separators = ['\n', ','];
     if (inputString.startsWith('//')) {
        separators = [inputString.match(/\/\/(.)\n/)[1]];
     }
     let numbers = inputString.split(new RegExp(`[${separators.join()}]`)).map(x => parseInt(x));
     numbers = numbers.filter(x => x<1000);
     if (numbers.find(x => x<0))
     {
         throw new Error('No negative number');
     }
     return numbers.reduce((a, b) => a+b, 0);
}