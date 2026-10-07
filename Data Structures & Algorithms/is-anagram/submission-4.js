class Solution {
    isAnagram(s,t){
        if (s.length !== t.length){
        return false; }

      
        const sSort = s.split('').sort().join('');
        const tSort = t.split('').sort().join('');
        return sSort === tSort;
        }
        }
