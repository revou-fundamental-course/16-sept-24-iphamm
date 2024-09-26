// ini js

replaceName();

function replaceName() {
    let name = prompt('Masukkan nama anda');
    console.log(name);
    document.getElementById('user-name').innerHTML = name;
}

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    document.getElementById('error-name').innerHTML = "";
    document.getElementById('error-birth-date').innerHTML = "";
    document.getElementById('error-gender').innerHTML = "";
    document.getElementById('error-messages').innerHTML = "";

    if (name == "") {
        document.getElementById('error-name').innerHTML = "Nama tidak boleh kosong.";
        return false;
    } else if(birthDate == "") {
        document.getElementById('error-birth-date').innerHTML = "Isi Tanggal Lahir.";
        return false;
    } else if(gender == "") {
        document.getElementById('error-gender').innerHTML = "Isi Gender Anda.";
        return false;
    } else if(messages == "") {
        document.getElementById('error-messages').innerHTML = "Harap tinggalkan pesan Anda.";
        return false;
    }

    //ketika isi form sudah benar maka data akan direset
    document.forms["message-form"].reset();

    setSenderUI(name, birthDate, gender, messages);
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(index) {
    // Get DOM semua image banner
    let listImage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide);
    console.log(listImage);

    // Reset Index Slide
    if (index > listImage.length) indexSlide = 1
    
        // Hide all images
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    // Show Selected image
    listImage[indexSlide - 1].style.display = 'block';
}

// Autoslide banner
setInterval(() => nextSlide(1), 2000);
