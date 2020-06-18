// There are two ways to create regex in js

// 1. Using the constructor

let regex1 = new RegExp("hello")
// the param is the pattern we want to find

// 2. literal syntax

let regex2 = /world/;
// note the forward slashes

let txt = "Programming courses always start with a hello world."

// methods available
/*

NOTE Method 1: Test
we can use the .test method to see if the pattern of our regex is matched.

regex1.test(txt) // true
regex2.test(txt) // true
> if we replaced "word" with "worlds", regex2.test would fail here
*/


// NOTE to clarify: there is a RegEx object in JS that takes a pattern. 
// We can use the test method on that object to see if a string contains that pattern.

/**
 * NOTE Method 2: Exec
 * regex1.exec(txt)
 * > exec returns an array of all the matches to the pattern.
* > If it doesn't match, this method will return null
 *
 */


 //? String methods 
/*
* NOTE Method 3: Match - String method!!
* The match method does the exact same thing as exec, just the object relationship is reversed.
*
* NOTE method 4: search
* Search gives us the index of the first regex match
*
* NOTE method 5: replace
    * we replace every pattern with the second param (string)
    * This will not change the original (immutable) string, but will return a new string

* NOTE method 6: split
* turns a method into an array.
* uses the passed regex as a delimeter.

*/
