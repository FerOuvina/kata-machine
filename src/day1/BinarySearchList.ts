export default function bs_list(haystack: number[], needle: number): boolean {
  // Binary search only works on a sorted array

    let min = 0;
    let max = haystack.length;
    
    do {
      let midPoint = Math.floor(min + (max - min) / 2);
      const value = haystack[midPoint];

      if (value === needle) {
        return true;
      } else if (value < needle) {
        min = midPoint + 1;
      } else {
        max = midPoint;
      }

    } while (min < max);

    return false;
}
