export const getDeliveryDate = async () =>{
    // Create a Date object for the order date
    let date = new Date().toISOString().split('T')[0]; 

    // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
    let dayOfWeek = date.getUTCDay();

    // Calculate the delivery date based on the order day
    let todayDate; 

    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday to Wednesday
        todayDate = new Date(date);
        todayDate.setUTCDate(date.getUTCDate() + (5 - dayOfWeek)); // Set to next Friday
    } else if (dayOfWeek >= 4 && dayOfWeek <= 0) { // Thursday to Sunday
        todayDate = new Date(date);
        let daysUntilNextTuesday = (9 - dayOfWeek) % 7;
        todayDate.setUTCDate(date.getUTCDate() + daysUntilNextTuesday); // Set to next Tuesday
    }

    return todayDate.toISOString().split('T')[0]; // Return the date in YYYY-MM-DD format
}
