document.getElementById('btn').addEventListener('click', function () {
    var birthday = document.getElementById('birthday').value;
    if (birthday) {
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        document.getElementById('result').innerText = 'Your age is ' + age + ' years old';
    } else {
        document.getElementById('result').innerText = 'Please enter your date of birth';
    }
});