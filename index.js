let array = [];

const upSort = (array) => {
  const arraySize = array.length;
  let processedArray = [];
  for (let i = 0, endI = arraySize - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            wasSwap = true;
        }
    }
    if (!wasSwap) break;
    processedArray.push(array[i]);
}
return array;
};

const downSort = (array) => {
  const arraySize = array.length;
  let processedArray = [];
  for (let i = 0, endI = arraySize - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (array[j] < array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            wasSwap = true;
        }
    }
    if (!wasSwap) break;
    processedArray.push(array[i]);
}
return array;
};

const wayOfSorting = (input, array) => {
  if (Number(input) == 1) {
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
  array.push(Number(input));
}
  for (let i = 0; i < 1; i += 1) {
    const choose = prompt('Для сортировки чисел по возрастанию введите 1. По убыванию - 2');
    if (isNaN(Number(choose))) {
      alert('Ввод некорректен. Попробуйте снова');
      i = i - 1;
      continue;
    }
      if (Number(choose) > 2 || Number(choose) < 1) {
      alert('Неверный идентификатор способа. 1 - по-возрастанию, 2 - по убыванию');
      i = i - 1;
      continue;
      }
    const processArray = String(wayOfSorting(choose, array));
    alert('Успешно. Отсортированный массив: ' + processArray);
  }

  //mario
// Реализация

let countEnergyWithSuperJump = (array, acc, counter, placeOfSuperJump, superJumpEnergy) => {
  const arrayEnd = array.length - 1;
  if (counter === arrayEnd) return acc;
  if (counter == placeOfSuperJump) return countEnergyWithSuperJump(array, acc + superJumpEnergy, counter + 2);
  const jump = Math.abs(array[counter + 1] - array[counter]);
  const currentResult = jump;
  return countEnergyWithSuperJump(array, acc + currentResult, counter + 1);
  };
  
  let getMinSuperJumpEnergy = (array, acc, counter, flag, lastFlag) => {
  const arrayEnd = array.length - 1;
  if (isSuperJumpBeforeEnd(flag, array)) return [acc, lastFlag];
  if (counter === arrayEnd) return [acc, flag];
  const result = Math.abs(array[counter + 2] - array[counter]) * 2;
  if (result < acc) return getMinSuperJumpEnergy(array, result, counter + 1, counter, flag);
  return getMinSuperJumpEnergy(array, acc, counter + 1);
  // Считает рекурсивно разницу суперпрыжка со всех позиций + сравнивает и возвращает позицию минимально энергозатратного прыжка
  };
  
  let isNeedToUseSuperJump = (superJumpEnergy, commonJumpEnergy, energyWithSuperJump) => {
    return (superJumpEnergy + energyWithSuperJump) > commonJumpEnergy ? true : false;
  };
  
  let isSuperJumpBeforeEnd = (position, array) => (position == array.length - 2) ? true : false;
  
  let commonJumpEnergy = (array, acc, counter) => {
    if (counter == array.length - 1) return acc;
    return commonJumpEnergy(array, Math.abs(array[counter + 1] - array[counter]), counter + 1);
  };
  
  let countMinEnergy = (array) => {
  const [superJumpEnergy, superJumpPlace] = getMinSuperJumpEnergy(array, 2000, 0, 0, 0); // [acc, flag]
  const energyWithSuperJump = countEnergyWithSuperJump(array, 0, 0, superJumpPlace, superJumpEnergy);
  let result = 0;
  const jumpEnergy = commonJumpEnergy(array, 0, 0);
  if (isNeedToUseSuperJump(superJumpEnergy, jumpEnergy, energyWithSuperJump)) {
    return energyWithSuperJump;
  }
  console.log(jumpEnergy);
  return jumpEnergy;
  };
    // Счётчик энергии
    const resultEnergy = countMinEnergy(array);
    const message = 'Герой затратит ' + resultEnergy + 'единиц энергии.';
    alert(message);