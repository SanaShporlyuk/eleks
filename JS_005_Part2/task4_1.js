// Write a JavaScript function to check if given string includes given symbol
// In this task, could you please verify covered test cases and give additional point? 

global.str1 =""

function check (s, str1) {
    
    if (str1===true && str1.indexOf(s) >0) {

        console.log(`The string "${str1}" has symbol " ${s}" that you are looking for`);
    } else {
        console.log(`You are not lucky to find "${s}" in given string`);
 
    }
}

check ('@', '')
check ('d', 'sfh y846    wr')
check (' ', 5689335)
