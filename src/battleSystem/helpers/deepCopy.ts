/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */

// Procurando sobre deepClone no typescript, para ver se clones poderiam herdar tipos, encontrei coisas interessantes...
// tive de ajeitar algumas coisas para o typescript compilar...
// src => https://stackoverflow.com/questions/28150967/typescript-cloning-object

export default function deepCopy(obj: any): unknown {
  // Handle the 3 simple types, and null or undefined
  if (obj == null || typeof obj !== 'object') return obj;
  // Handle Date
  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  // Handle Array
  if (obj instanceof Array) {
    const copy = [];
    for (let i = 0, len = obj.length; i < len; i += 1) {
      copy[i] = deepCopy(obj[i]);
    }
    return copy;
  }
  // Handle Object
  if (obj instanceof Object) {
    let copy = {};
    const objKeys = Object.keys(obj) as string[];
    objKeys.forEach((att) => {
      const origAtt = obj[att];
      copy = Object.defineProperty(
        copy,
        att,
        { value: deepCopy(origAtt) as typeof origAtt },
      );
    });
    return copy;
  }
  throw new Error('Unable to copy obj! Its type isn\'t supported.');
}

// const clone = deepCopy(customer) as Customer;

// alert(`${clone.name} ${clone.example.type}`); // David DavidType
// // alert(clone.greet()); // Not OK - not really a customer

// clone.name = 'Steve';
// clone.example.type = 'SteveType';

// alert(`${customer.name} ${customer.example.type}`); // David DavidType
