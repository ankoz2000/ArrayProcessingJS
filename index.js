//разрешить вставку
array = [];
/*processArray = (array) => {
  const arraySize = array.length;
  if (arraySize == 0) return 0;
  for (let i = 0, end = arraySize - 1; i < end; i += 1) {
    let isSwap = false;
    for (let j = 0; j < end - i; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return array;
};*/
upSort = (array) => {
  console.log(array);
  const arraySize = array.length;
  if (arraySize == 0) return 0;
  for (let i = 0, end = arraySize - 1; i < end; i += 1) {
    for (let j = 0; j < end - i; j += 1) {
      if (array[j] > array[j + 1]) {
        const rest = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = rest;
      }
    }
  }
  return array;
};

const cocktailSort = array => {
  let left = firstSwap = 0;
  let right = lastSwap = array.length - 1;    
  while (left < right) {
    for (let i = left; i < right; i++) {
          if (array[i] > array[i + 1]) {
              [array[i], array[i + 1]] = [array[i + 1], array[i]]
              lastSwap = i;
          }
      }
      right = lastSwap;
      for (let i = right; i > left; i--) {
          if (array[i] < array[i - 1]) {
              [array[i], array[i - 1]] = [array[i - 1], array[i]]
              firstSwap = i;
          }
      }
      left = firstSwap;
  }    return array;
};

downSort = (array) => {
  const arraySize = array.length;
  if (arraySize == 0) return 0;
  for (let i = 0, end = arraySize - 1; i < end; i += 1) {
    let isSwap = false;
    for (let j = 0; j < end - i; j += 1) {
      if (array[j] < array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwap = true;
      }
      //if (array[j] == array[j + 1]) isSwap = true
    }
    if (!isSwap) break;
  }
  return array;
};

wayOfSorting = (input, array) => {
  if (Number(input) == 1) {
    //const processedArray = upSort(array);
    return upSort(array);
  }
  return downSort(array);
};

for (let i = 0; i < 20; i += 1) {
  const input = prompt('Введите последовательно числа, но не более 20!');
  if (input == null) {
    const isEnd = confirm('Закончить ввод?');
    if(isEnd) break;
  }
  if (isNaN(Number(input)) || input == '') {
    alert('Ввод некорректен. Попробуйте снова');
    i = i - 1;
    continue;
  }
  array.push(input);
}
  for (let i = 0; i < 1; i += 1) {
    const choose = prompt('Для сортировки чисел по возрастанию введите 1. По убыванию - 2');
    if (isNaN(Number(choose))) {
      alert('Ввод некорректен. Попробуйте снова');
      i = i - 1;
      continue;
    }
      if (Number(choose) > 2 || Number(choose) < 1) {
      alert('Неверный код способа. 1 - по-возрастанию, 2 - по убыванию');
      i = i - 1;
      continue;
      }
    const processArray = String(wayOfSorting(choose, array));
    x = processArray;
    console.log(x);
    alert('Успешно. Отсортированный массив: ' + processArray);
  }
