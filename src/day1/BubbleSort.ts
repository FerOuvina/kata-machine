export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i];

        if (x > arr[i + 1]) {
            arr[i] = arr[i + 1];
            arr[i + 1] = x;
            i = -1;
        }
    }
}
