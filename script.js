var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var date = tomorrow.toString().slice(0, 15);

var select = document.getElementById('booking-date');
var bookButton = document.getElementsByClassName('book-button')[0];

var option = document.createElement('option');
option.appendChild(document.createTextNode(date));
option.setAttribute('value', date);
select.appendChild(option);

const submitForm = () => {
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var bookingTime = document.getElementById('booking-time').value;
    var bookingDate = document.getElementById('booking-date').value;

    var bookingData = {
        'Full name' : fullName,
        'Email' : email,
        'Phone' : phone,
        'Booking date' : bookingDate,
        'Booking time' : bookingTime,
    }
}

bookButton.addEventListener('click', submitForm);