# node-sample-express
sample-node
const matrix = [[1,2,3],[1,2,3],[7,7,8]];

function getConsecutivesDuplicated(text){
  return !new RegExp(/([a-z])\1\1\1/gi).test(text)

  
}

function isMutated (matrix){
  let column = ""
  let cantRows = matrix.length;
  
  const arrayColumn = (arr, n) => arr.map(x => x[n]).join('');
  
  // get Columns
  for (x=0;x<cantRows;x++) { 
            row = ""
      let indexColumn= 0

     for (y=0;y<matrix[x].length;y++) {
                 row+=matrix[x][y]
                if(x===0){
                  console.log({"column": arrayColumn(matrix,y)})
                }
       // Acceder al elemento      
     }  
       console.log({"row": row})
        


    
  }
  //console.log({"column": column})
  // console.log({"row": row})


  
}

isMutated(matrix)
const arrayColumn = (arr, n) => arr.map(x => x[n]).join('');
const array_column = (array, column) => array.reduce((a, c) => {
  a.push(c[column]);
  return a;
}, []);


console.log(arrayColumn(matrix, 1));
getConsecutivesDuplicated("acssss")  

