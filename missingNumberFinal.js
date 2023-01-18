//Please review
//case1
var nums = []
var a = [3, 0, 1]
var count = 4
var found = false

for (var j = 1; j < count; j++) {
    found = false
    for (var i = 0; i <= a.length; i++) {
        if (a[i] == j) {
            found = true
            break;
        }
    }
    if (!found) {
        nums.push(j)
    }
}

console.log (nums)

//case2
var nums = []
var a = [0, 1]
var count = 3
var found = false

for (var j = 1; j < count; j++) {
    found = false
    for (var i = 0; i <= a.length; i++) {
        if (a[i] == j) {
            found = true
            break;
        }
    }
    if (!found) {
        nums.push(j)
    }
}

console.log (nums)

//case3
var nums = []
var a = [9,6,4,2,3,5,7,0,1]
var count = 10
var found = false

for (var j = 1; j < count; j++) {
    found = false
    for (var i = 0; i <= a.length; i++) {
        if (a[i] == j) {
            found = true
            break;
        }
    }
    if (!found) {
        nums.push(j)
    }
}

console.log (nums)


//follow-up1
var nums = []
var a = [1]
var count = 2
var found = false

for (var j = 0; j < count; j++) {
    found = false
    for (var i = 0; i <= a.length; i++) {
        if (a[i] == j) {
            found = true
            break;
        }
    }
    if (!found) {
        nums.push(j)
    }
}

console.log (nums)


//follow-up2
var nums = []
var a = []
var count = 1
var found = false

for (var j = 0; j < count; j++) {
    found = false
    for (var i = 0; i <= a.length; i++) {
        if (a[i] == j) {
            found = true
            break;
        }
    }
    if (!found) {
        nums.push(j)
    }
}

console.log (nums)
