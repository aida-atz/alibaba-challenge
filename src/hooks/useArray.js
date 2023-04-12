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
  return {
    splitArray,
  };
};
