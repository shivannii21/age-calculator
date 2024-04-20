function calculateAge() {
    var dobDay = parseInt(document.getElementById('dobDay').value);
    var dobMonth = parseInt(document.getElementById('dobMonth').value);
    var dobYear = parseInt(document.getElementById('dobYear').value);
    
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    
    var age = currentYear - dobYear;
    
    if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDay < dobDay)) {
        age--;
    }
    
    document.getElementById('result').textContent = "Your age is " + age + " years.";
}

  