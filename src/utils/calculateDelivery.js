export const getDeliveryDate = async () => {
    // Get the current date and create a Date object
    let today = new Date();
  
    // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
    let dayOfWeek = today.getDay();
  
    // Calculate the delivery date based on the order day
    let deliveryDate = new Date(today);
  
    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday to Wednesday
      deliveryDate.setDate(today.getDate() + (5 - dayOfWeek)); // Set to next Friday
    } else if (dayOfWeek === 4) { // Thursday
      deliveryDate.setDate(today.getDate() + 5); // Set to next Tuesday
    } else if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) { // Friday to Sunday
      let daysUntilNextTuesday = (9 - dayOfWeek) % 7;
      deliveryDate.setDate(today.getDate() + daysUntilNextTuesday); // Set to next Tuesday
    }
  
    return deliveryDate.toISOString().split('T')[0]; // Return the date in YYYY-MM-DD format
  }
  