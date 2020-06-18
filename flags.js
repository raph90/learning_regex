/**
 * SECTION Flags
 * if we want to specify a flag, we do it after the forward slash, (like in Vim)
 * /pattern/flags, or new RegExp("pattern", "flags")
 *
 * NOTE g: global, will match every occurence in the line
 * NOTE i: case insensitive, case doesn't matter
 * NOTE m: multi-line match
 */


let txt = "Programming courses always starts with a helloS world"

let regex1 = /s\s/
let regex2 = /s\s/g
let regex3 = /s\s/gi

console.log(txt.match(regex1)) // returns a single s(space) at position 18
console.log(txt.match(regex2)) // returns 3 matches 
console.log(txt.match(regex3)) // returns 4 matches, including the upper case 

// ! This applies to the .exec regex method
// NOTE - there is a cursor that moves along when we do this. An index is retained by the regex object. 



