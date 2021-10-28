// Function to accept two integers and display the larger
// In this task, could you please verify covered test cases and give additional point? 

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));
check_empty_myStr("") 
check_empty_myStr("Hefj kjillo o998  u")
check_empty_myStr("             ")
