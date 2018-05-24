/**
 * Given an NxN character matrix, write a method to rotate the matrix clockwise by 90 degrees.
 * Example 1:
 *  [a,b] -> [c,a]
 *  [c,d]    [d,b]
 * 
 * Example 2:
 *  [a,b,c] -> [g,d,a]
 *  [d,e,f]    [h,e,b]
 *  [g,h,i]    [i,f,c]
 * 
 * @param {[][]} matrix - two dimensional array 
 * @return {[][]} 90 degree rotated matrix
 * 
 */ 

let rotateMatrix = (matrix) => {
	/*
	 * Reverse rows
	 * [c,d]
	 * [a,b]
	 */
	let rotatedMatrix = matrix.reverse();
	
	/*
	 * Swap the symmetric elements
	 * [c,a]
	 * [d,b]
	 */ 
	for (let i = 0; i < rotatedMatrix.length; i++) {
		for (let j = 0; j < i; j++) {
			let temp = rotatedMatrix[i][j];
			rotatedMatrix[i][j] = rotatedMatrix[j][i];
			rotatedMatrix[j][i] = temp;
		}
	}
	
	return rotatedMatrix;
};

// DO NOT DELETE
module.exports = rotateMatrix;
