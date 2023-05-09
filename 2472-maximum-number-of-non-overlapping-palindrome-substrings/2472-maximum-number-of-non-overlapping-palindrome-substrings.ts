function maxPalindromes(s: string, k: number): number {
    const sLen = s.length;
    let palindromes = 0;

    for (let i = 0; i < sLen; i++) {
        for (let j = i; i < sLen; j++) {
            const cLen = (j - i) + 1;
            if (cLen > k + 1) break;
            if (cLen >= k && isPalindrome(s, i, j)) {
                palindromes++;
                i = j;
                break;
            }
        }
    }

    return palindromes;
};

function isPalindrome(s: string, left: number, right: number): boolean {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}