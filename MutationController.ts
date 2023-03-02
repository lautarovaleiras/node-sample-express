

export class MutationController  {

  static getHelloMsg(){
    return "Hello world with typescript + sls framework using AWS"
  }

  static hasConsecutivesDuplicated(text){
    return new RegExp(/([a-z])\1\1\1/gi).test(text)
  }


  /**
   * Returns rows, columns and diagonals from the matrix reicived
   * eg. matrix: [[1,2,3],[1,2,3],[7,7,8]]
   */
  static getMatrixDetail(matrix:string[][]):{rows:string[],columns:string[],diagonals:string[]}{
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Get rows
    const rows:any []= [];
    for (let i = 0; i < numRows; i++) {
      rows.push(matrix[i]);
      //rows+=matrix[i]
    }

    // Get columns
    //// const arrayColumn = (arr, n) => arr.map(x => x[n]).join('');
    const cols: any[] = [];
    for (let j = 0; j < numCols; j++) {
      const col:any[] = [];
      for (let i = 0; i < numRows; i++) {
        col.push(matrix[i][j]);
      }
      cols.push(col);
    }

    // Get diagonals
    const diagonals:any[] = [];
    const mainDiag:any[]  = [];
    const antiDiag:any[]  = [];
    for (let i = 0; i < numRows; i++) {
      mainDiag.push(matrix[i][i]);
      antiDiag.push(matrix[i][numCols - i - 1]);
    }
    diagonals.push(mainDiag);
    diagonals.push(antiDiag);

    return {
      rows: rows.map(elem=>elem.join('')),
      columns: cols.map(elem=>elem.join('')),
      diagonals: diagonals.map(elem=>elem.join(''))
    };
  }

  static hasMutation(matrix:string[][]): boolean {
    let hasMutation = false;

    const matrixParsed = this.getMatrixDetail(matrix)
    
    const collection = [matrixParsed.rows,matrixParsed.columns,matrixParsed.diagonals].flat()
    
    for (let i=0; i<collection.length ;i++){
      hasMutation = this.hasConsecutivesDuplicated(collection[i])
      if(hasMutation) return hasMutation
    }
    return hasMutation;
  }

  /**
   * 
   * @param list dna = ["ATGCGA","CAGTGC", "TTATGT, "AGAAGG", "CCCCTA", "TCACTG"]
   * @returns  matrix = [
                  [ 'A', 'T', 'G', 'C', 'G', 'A' ],
                  [ 'C', 'A', 'G', 'T', 'G', 'C' ],
                  [ 'T', 'T', 'A', 'T', 'G', 'T' ],
                  [ 'A', 'G', 'A', 'A', 'G', 'G' ],
                  [ 'C', 'C', 'C', 'C', 'T', 'A' ],
                  [ 'T', 'C', 'A', 'C', 'T', 'G' ]
                ]
   */
  static buildMatrix(list: string[]) : string[][]{
    return list.map(elem=>elem.split(''))
  }

}