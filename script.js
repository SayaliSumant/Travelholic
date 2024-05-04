// Home page
function search(){
    var country = document.getElementById('stxt').value;
    if (country == 'Argentina' || country == 'argentina'){
        window.location = "argentina.html";
    }
    else if(country == 'India' || country == 'india'){
        window.location = "india.html";
    }
    else if(country == 'Belize' || country == 'belize'){
        window.location = "belize.html";
    }
    else if(country == 'US' || country == 'USA' || country == 'us' ||country == 'usa' ||country == 'United States' || country == 'united states'){
        window.location = "usa.html";
    }
    else if(country == 'new zealand' || country == 'New zealand' || country == 'New Zealand' || country == 'nz' ||country == 'NZ'){
        window.location = "nz.html";
    }
    else if(country == 'UAE' || country == 'uae' || country == 'united arab emirates' ||country == 'United Arab Emirates' ||country == 'United arab emirates' || country == 'Dubai' || country == 'dubai'){
        window.location = "uae.html";
    }
    else if(country == 'Japan' || country == 'japan'){
        window.location = "japan.html";
    }
    else if(country == 'Thailand' || country == 'thailand'){
        window.location = "thailand.html";
    } 
    else if(country == 'Spain' || country == 'spain'){
        window.location = "spain.html";
    }    
    else{
        alert("No country found!!");
    }  
}

//Budget page
function calcBudget(event){
    event.preventDefault();
const destinationBudgets = {
    Argentina:{Acc: 150, Flight: 400, Fda: 100,Transportation: 14, Link:'https://travellersworldwide.com/trip-to-aruba-cost/'},
    Belize:{Acc: 100, Flight: 500, Fda: 100,Transportation: 42, Link:'https://travellersworldwide.com/trip-to-belize-cost/'},
    Japan:{Acc: 50, Flight: 550, Fda: 30,Transportation: 10, Link:'https://travellersworldwide.com/trip-to-brazil-cost/'},
    Thailand:{Acc: 75, Flight: 800, Fda: 60,Transportation: 55, Link:'https://travellersworldwide.com/trip-to-egypt-cost/'},
    India:{Acc: 75, Flight: 1200, Fda: 70,Transportation: 70, Link:'https://travellersworldwide.com/trip-to-india-cost/'},
    NZ:{Acc: 100, Flight: 1200, Fda: 100,Transportation: 7, Link:'https://travellersworldwide.com/trip-to-new-zealand-cost/'},
    Spain:{Acc: 100, Flight: 700, Fda: 100,Transportation: 42, Link:'https://travellersworldwide.com/trip-to-spain-cost/'},
    UAE:{Acc: 1400, Flight: 700, Fda: 560,Transportation: 12, Link:'https://travellersworldwide.com/trip-to-dubai-cost/'},
    US:{Acc: 259, Flight: 438, Fda: 58,Transportation: 46, Link:'https://www.budgetyourtrip.com/united-states-of-america'}
};

// Get selected destination from the form
const selectedDestination = document.getElementById('d').value;
const persons = document.getElementById('num').value;
const days = document.getElementById('days').value;

// Check if a destination is selected
if (selectedDestination) {
    // Get the budget value for the selected destination
    const budget = destinationBudgets[selectedDestination];
    if(budget){
    document.getElementById('budget-section').style.display="none";
    document.getElementById('budget-result').style.display="block";
    document.getElementById('addname').innerHTML="Average expenses per person in " +selectedDestination;
    document.getElementById('d1').innerHTML="Accommodation : &dollar;" +budget.Acc;
    document.getElementById('d2').innerHTML="Flight Ticket : &dollar;" +budget.Flight;
    document.getElementById('d3').innerHTML="Food, Drinks & Activities : &dollar;" +budget.Fda;
    document.getElementById('d4').innerHTML="Transportation : &dollar;" +budget.Transportation;

    var total = (budget.Acc * days) + (budget.Flight * 2) +
                (budget.Fda * days) + (budget.Transportation * days);
    var totalBudget = total * persons;
    
    document.getElementById('d5').innerHTML = "No. of Persons : " +persons;
    document.getElementById('d6').innerHTML= "Total Expenses for one Person : &dollar;" +total;
    document.getElementById('d7').innerHTML = "Your approximate trip budget is &dollar;" +totalBudget;
    document.getElementById('d8').href = budget.Link;
    document.getElementById('d9').style.display = "block";
    document.getElementById('d9').innerHTML = "Our Reccomended tours in " +selectedDestination+"&raquo;";
}
else{
    alert("Invalid Destination");
}
}
else{
    alert("Enter Proper details!!");
}
}

function showTours(){
    const country = document.getElementById('d').value;
    document.getElementById(country).style.display = "block";
}


//Contact Page
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var msg = document.getElementById("msg").value;
    
    // Simple validation - checking if the fields are not empty
    if (name == "" || email == "" || subject == "" || msg == "") {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    // Additional email validation
    var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }
    
    document.getElementById('submitMsg').style.display = "block";
    document.getElementById('name').value = " ";
    document.getElementById('email').value = " ";
    document.getElementById('subject').value = " ";
    document.getElementById('msg').value = " ";
    
}

//Login box function
function login(){
    document.getElementById('head').innerHTML = "One step closer to your dream trip!";
    document.getElementById('head').style.color = "green";
    document.getElementById('info').innerHTML = "Check your inbox and confirm your email to get all thr inspirations <br> and insider tips to fill your travel wishlist";
    document.getElementById('info').style.color = "green";
    document.getElementById('signButton').style.display = "none";
    document.getElementById('sId').style.display = "none";
}


//India page tour display
function displayTrek(num){
    var n = num;
    document.getElementById('trekList').style.display = 'none';
    document.getElementById(n).style.display = 'block';
}
function displayList(num){
    var n = num;
    document.getElementById(n).style.display = 'none';
    document.getElementById('trekList').style.display = 'block';
}