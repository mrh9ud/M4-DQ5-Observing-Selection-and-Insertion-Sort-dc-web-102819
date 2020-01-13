array = [5, 4, 2, 6]

function selectionSort(arr) {
  let i,j

  for(i = 0; i < arr.length-1; i++){
    let  jMin = i
    for(j = i+1; j< arr.length; j++){
      if(arr[j] < arr[jMin]){
        jMin = j
      }
    }
    if(jMin != i)
    {
      swap(arr, i, jMin)
    }
  }
  console.log(arr)
}
function swap(A, x, y) {
  let temp = A[x]
  A[x] = A[y]
  A[y] = temp
  // return [ y , x]
}
console.log(selectionSort(array))
