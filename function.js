function calculateAge() {
    var dob = new Date(document.getElementById("date").value);
    var today = new Date();

    var years = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days += lastMonth.getDate();
    }

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
    <div class="bg-white p-4 rounded-lg">
        <p class="text-lg font-bold text-gray-800">Your age is:</p>
        <div class="bg-white p-4 rounded-lg mt-4">
            <div class="flex justify-between">
                <div class="text-center">
                    <p class="text-lg font-bold text-black-500">${years}</p>
                    <p class="text-gray-800">Years</p>
                </div>
                <div class="text-center">
                    <p class="text-lg font-bold text-black-500">${months}</p>
                    <p class="text-gray-800">Months</p>
                </div>
                <div class="text-center">
                    <p class="text-lg font-bold text-black-500">${days}</p>
                    <p class="text-gray-800">Days</p>
                </div>
            </div>
        </div>
    </div>
    `;


    if (today.getMonth() === dob.getMonth() && today.getDate() === dob.getDate()) {
        congratulateBirthday();
    } else {
        displayNextBirthday(dob, today);
    }
}

function congratulateBirthday() {
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML += `
    <div class="mt-4 text-center">
        <img src="birthday-cake-happy-birthday.gif" alt="Birthday Cake" class="birthday-cake mx-auto">
        <p class="text-lg font-bold text-blue-500">Happy Birthday! 🎉</p>
    </div>
    `;
}

function displayNextBirthday(dob, today) {
    var nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    var daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML += `
    <div class="mt-4 text-center">
        <p class="text-lg font-bold text-gray-800">Your next birthday is in:</p>
        <p class="text-lg font-bold text-black-500">${daysUntilNextBirthday} days</p>
    </div>
    `;
}

document.getElementById("calculateButton").addEventListener("click", calculateAge);