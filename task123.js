// Task 1: Array Manipulation
function findUniqueElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueElements = findUniqueElements(inputArray);
  console.log(uniqueElements);

  
  // Task 2: Object Operations
function mergeCarObjects(car1, car2) {
    return { ...car1, ...car2 };
  }
  
  const car1 = { brand: "Toyota", model: "Camry", year: 2022 };
  const car2 = { color: "Blue", fuelType: "Gasoline" };
  
  const mergedCar = mergeCarObjects(car1, car2);
  console.log(mergedCar);

  
// Task 3: Logical Operations
function findCommonElements(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) !== -1) {
        result.push(arr1[i]);
      }
    }
    return result;
  }
  
  //example
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  
  const commonElements = findCommonElements(array1, array2);
  console.log(commonElements);  