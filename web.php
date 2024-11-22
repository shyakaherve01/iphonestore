<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Mail to the website owner (example)
    $to = "support@buyyouriphone.com";
    $subject = "New Contact Form Submission";
    $messageContent = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $messageContent, $headers)) {
        echo "Thank you for contacting us!";
    } else {
        echo "There was an error submitting the form. Please try again later.";
    }
}
?>
