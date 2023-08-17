
    // Get the user's mobile number.
    const mobileNumber = prompt("Enter your mobile number:");
  
    // Ask the user what they want to do.
    const option = prompt("Dial The Short Code For?\n1. Dial *321#  For Transfer \n2. Dial *311#  For Recharge\n3. Dial *312# To Pay Bill\n4. Exit");
  
    // Check if the user entered a valid option.
    if (option === "*321#" || option === "311#" || option === "*312#" || option === "4") {
      // The user entered a valid option.
      // Do something based on the user's choice.
      if (option === "*321#") {
        // Transfer.
        const recipientMobileNumber = prompt("Enter the recipient's mobile number:");
        const amount = prompt("Enter the amount you want to transfer:");
        alert("You have transferred $" + amount + " to " + recipientMobileNumber);
      } else if (option === "311#") {
        // Recharge.
        const network = prompt("Enter the network you want to recharge:");
        const amount = prompt("Enter the amount you want to recharge:");
        alert("Your mobile has been recharged with $" + amount);
      } else if (option === "312#") {
        // Pay bill.
        const biller = prompt("Enter the biller:");
        const amount = prompt("Enter the amount you want to pay:");
        alert("Your bill has been paid for $" + amount);
      } else {
        // Exit.
        alert("Thank you for using our telecom services.");
      }
    } else {
      // The user entered an invalid option.
      alert("Invalid option.");
    }
 
  
console.log(mobileNumber);