class Solution {
    BST(target, arr, startIdx) {
        let start = startIdx;
        let end = arr.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (target === arr[mid]) return mid + 1;

            if (target > arr[mid]) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }

    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length - 1; i++) {
            let index = this.BST(target - numbers[i], numbers, i + 1);
            if (index !== -1) {
                return [i + 1, index];
            }
        }
    }
}
