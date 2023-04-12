export const useArray = () => {
  function splitArray(arr, chunkSize) {
    let result = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      let chunk = arr.slice(i, i + chunkSize);
      result.push(chunk);
    }
    console.log(result);
    return result;
  }
  function sortArrayOfObjects(array, key) {
    array.sort((a, b) => {
      if (typeof a[key] == "number") {
        return b[key] - a[key];
      } else if (typeof a[key] == "string") {
        let wa = a[key].toLowerCase(),
          wb = b[key].toLowerCase();
        if (wa < wb) return -1;
        if (wa > wb) return 1;
        return 0;
      }
    });
    return array;
  }
  return {
    splitArray,
    sortArrayOfObjects,
  };
};
