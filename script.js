function totalCoffee() {
    // Prevent form submission for calculating total
    event.preventDefault();
 
   const category = document.getElementById("category").value;
   const qty = parseInt(document.getElementById("qty").value) || 0;
 
   // Prices for each item
   const prices = {
     "LATE": 2.50,
     "AMER": 2.00,
     "GREEN": 2.00,
     "CAPO": 3.00,
     "LEMON": 1.25,
     "MILK": 1.50,
     "ST": 0.75,
     "COCA": 0.75,
     "PRIME": 6.00
   };
 
   // Calculate total based on selected item and quantity
   const price = prices[category];
   const total = qty * price;
 
   // Display the total in the 'total' input field
   document.getElementById("total").value = total.toFixed(2);
 }
 