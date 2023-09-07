let merge = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;

    let i = 0;
    let j = 0;

    let res = [];
    
    while (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            res.push(nums1[i]);
            i++;
        } else {
            res.push(nums2[j]);
            j++;
        }
    }

    if (i < j) {
        res.concat(nums1.slice(i));
    } else {
        res.concat(nums2.slice(j));
    }

    return res;
};

let merge2 = function(nums1, nums2) {
    // Make copies of the arrays just in case we don't want to mutate the originals
    nums1 = nums1.slice();
    nums2 = nums2.slice();
    
    let res = [];

    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            res.push(nums1.shift());
        } else {
            res.push(nums2.shift());
        }
    }

    if (nums1.length) {
        res.concat(nums1);
    } else {
        res.concat(nums2)
    }

    return res;
}

let nums1 = [1,2,3,10,11,15,17];
let nums2 = [3,4,5,8,12,13,20,21];

let res = merge(nums1, nums2);
let res2 = merge2(nums1, nums2);

console.log(res);
console.log(res2);