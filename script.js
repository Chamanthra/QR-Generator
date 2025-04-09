// Get the DOM elements
let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

// Function to generate the QR code
function generateQR() {
    // Check if the input text is not empty
    if (qrText.value.trim().length > 0) {
        // Set the src of the image element to the generated QR code from the API
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        // Show the image box with the QR code
        imgBox.classList.add("show");
    } else {
        // If input is empty, add an error class to the input
        qrText.classList.add("error");
        // Remove the error class after 1 second (so it shakes again after the timeout)
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
