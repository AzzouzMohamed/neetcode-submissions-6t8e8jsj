class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boxes = Array.from({ length: 9 }, () => new Set());

            for (let i = 0; i < 9; i++) {
            const rowSet = new Set();
            const colSet = new Set();

            for (let j = 0; j < 9; j++) {
                const rowVal = board[i][j];
                const colVal = board[j][i];

                // Row check
                if (rowVal !== '.') {
                if (rowSet.has(rowVal)) return false;
                rowSet.add(rowVal);

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (boxes[boxIndex].has(rowVal)) return false;
                boxes[boxIndex].add(rowVal);
                }

                // Column check
                if (colVal !== '.') {
                if (colSet.has(colVal)) return false;
                colSet.add(colVal);
                }
            }
            }

        return true;

    }
}
