<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Recipient Email Address (where you want to receive the form submissions)
    $recipient_email = "info@poterbymedia.com";

    // Create the email message
    $email_subject = "New Contact Form Submission: $subject";
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n";
    $email_message .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($recipient_email, $email_subject, $email_message, $headers)) {
        // Email sent successfully
        echo "Thank you for your message. We will get back to you soon!";
    } else {
        // Email sending failed
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    // If the request method is not POST, redirect to the contact page
    header("Location: contact");
}
?>
