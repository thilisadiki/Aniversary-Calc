function calculateAndDisplayAnniversary() {
    let originalDate = document.getElementById('originalDate').value;
    let date = new Date(originalDate);
  
    if (isNaN(date)) {
      document.getElementById('result').innerText = 'Please provide a valid original date in the format "YYYY-MM-DD".';
      return;
    }
  
    let currentDate = new Date();
    let yearDifference = currentDate.getFullYear() - date.getFullYear();
  
    // Set the anniversary year based on the current date
    date.setFullYear(currentDate.getFullYear());
  
    // If the anniversary date has already passed this year, set it to next year
    if (date < currentDate) {
      date.setFullYear(currentDate.getFullYear() + 1);
      yearDifference += 1;
    }
  
    let anniversaryDate = date.toISOString().slice(0, 10);
    document.getElementById('result').innerHTML = `The next anniversary date is: ${anniversaryDate}. <hr/>   It will be the ${yearDifference} - year anniversary.`;
  }
  