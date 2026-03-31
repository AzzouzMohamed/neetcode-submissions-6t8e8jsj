class MaxHeap {
    constructor(values = []) {
        this.heap = this.buildHeap([...values]);
    }

    /* ---------- Internal helpers ---------- */

    siftDown(arr, index) {
        let largestIndex = index;
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;

        if (
            leftChildIndex < arr.length &&
            arr[leftChildIndex] > arr[largestIndex]
        ) {
            largestIndex = leftChildIndex;
        }

        if (
            rightChildIndex < arr.length &&
            arr[rightChildIndex] > arr[largestIndex]
        ) {
            largestIndex = rightChildIndex;
        }

        if (largestIndex !== index) {
            [arr[index], arr[largestIndex]] =
            [arr[largestIndex], arr[index]];

            this.siftDown(arr, largestIndex);
        }
    }

    siftUp() {
        let childIndex = this.heap.length - 1;

        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            if (this.heap[childIndex] <= this.heap[parentIndex]) break;

            [this.heap[childIndex], this.heap[parentIndex]] =
            [this.heap[parentIndex], this.heap[childIndex]];

            childIndex = parentIndex;
        }
    }

    buildHeap(arr) {
        const lastParentIndex = Math.floor(arr.length / 2) - 1;

        for (let i = lastParentIndex; i >= 0; i--) {
            this.siftDown(arr, i);
        }

        return arr;
    }

    /* ---------- Public API ---------- */

    insert(value) {
        this.heap.push(value);
        this.siftUp();
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.siftDown(this.heap, 0);

        return max;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


class MinHeap {
    constructor(values = []) {
        this.heap = this.buildHeap([...values]);
    }

    /* ---------- Internal helpers ---------- */

    siftDown(arr, index) {
        let smallestIndex = index;
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;

        if (
            leftChildIndex < arr.length &&
            arr[leftChildIndex] < arr[smallestIndex]
        ) {
            smallestIndex = leftChildIndex;
        }

        if (
            rightChildIndex < arr.length &&
            arr[rightChildIndex] < arr[smallestIndex]
        ) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            [arr[index], arr[smallestIndex]] = [arr[smallestIndex], arr[index]];
            this.siftDown(arr, smallestIndex);
        }
    }

    siftUp() {
        let childIndex = this.heap.length - 1;

        while (childIndex > 0) {
            const parentIndex = Math.floor((childIndex - 1) / 2);

            if (this.heap[childIndex] >= this.heap[parentIndex]) break;

            [this.heap[childIndex], this.heap[parentIndex]] =
                [this.heap[parentIndex], this.heap[childIndex]];

            childIndex = parentIndex;
        }
    }

    buildHeap(arr) {
        const lastParentIndex = Math.floor(arr.length / 2) - 1;

        for (let i = lastParentIndex; i >= 0; i--) {
            this.siftDown(arr, i);
        }

        return arr;
    }

    /* ---------- Public API ---------- */

    insert(value) {
        this.heap.push(value);
        this.siftUp();
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(this.heap, 0);

        return min;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const heap = new MaxPriorityQueue((x) => x[1]);
        for(const [ num , frq] of Object.entries(count)){
            heap.enqueue([ num , frq]);
        }

        let res = []
        for(let j = 1 ; j <= k ; j++){
            const [ num , frq] = heap.dequeue();
            res.push(num);
        }   

        return res;
       
    }

}
