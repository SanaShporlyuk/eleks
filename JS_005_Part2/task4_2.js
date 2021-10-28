// Function to check a string is blank
// In this task, could you please verify covered test cases and give additional point? 

function check_empty_myStr(str1) {
    if (str1 === "" || str1.trim().length===0) {
        console.log("Looks like my_string is empty")
        }
        else{
        console.log("Looks like my_string has something") 
        }
    }
check_empty_myStr("") 
check_empty_myStr("Hefj kjillo o998  u")
check_empty_myStr("             ")
