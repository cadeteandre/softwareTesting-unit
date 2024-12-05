export function factorial(n: number): number {
    if(n < 0) {
        throw new Error('Input must be a non-negative integer');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}