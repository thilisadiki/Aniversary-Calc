function calculateAndDisplayAnniversary() {
  let anniversaryType = document.getElementById('anniversaryType').value;
  let originalDate = document.getElementById('originalDate').value;
  let date = new Date(originalDate);

  if (isNaN(date)) {
    document.getElementById('result').innerHTML = 'Please provide a valid original date in the format "YYYY-MM-DD".';
    return;
  }

  let currentDate = new Date();
  let yearDifference = currentDate.getFullYear() - date.getFullYear();

  date.setFullYear(currentDate.getFullYear());
  if (date < currentDate) {
    date.setFullYear(currentDate.getFullYear() + 1);
    yearDifference += 1;
  }

  let anniversaryDate = date.toISOString().slice(0, 10);
  let typeText = anniversaryType === "other" ? "anniversary" : anniversaryType; // Display 'wedding', 'relationship', or 'anniversary' for 'other'
  document.getElementById('result').innerHTML = `The next ${typeText} anniversary date is: ${anniversaryDate}.<br>It will be the ${yearDifference}-year ${typeText} anniversary.`;
}

function shareToWhatsApp() {
  var text = "Check out this lovely Anniversary Calculator app: " + window.location.href;
  var whatsapp_url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(text);
  window.open(whatsapp_url);
  return false; // Prevent the default action
}

