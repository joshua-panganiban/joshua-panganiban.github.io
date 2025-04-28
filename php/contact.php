<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joshua Panganiban</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/contact.css">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script> 
</head>

<body>
    <?php include 'navbar.php'; ?>

    <main class="contact-page">
        <div class="contact-left">
            <h2>Contact Me</h2>
            <p>For inquiries, consultations, or just to say hello, feel free to reach out!</p>
        </div>

        <div class="contact-right">
            <form id="contact-form" method="POST" action="contact_form_process.php"> 
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>

                <!-- Google reCAPTCHA v2 widget -->
                <div class="g-recaptcha" data-sitekey="6LcyVhorAAAAAKo6KWYpDDvQqVs2tHoW-Cpsmy1R" data-callback="enableSubmit"></div>
                <p id="captcha-warning" style="color: red; display: none;">Please verify the CAPTCHA before submitting.</p>

                <button type="submit" class="submit-button" id="submit-button">Send Message</button>

            </form>
            <div id="response-message"></div>
        </div>
    </main>

    <?php include 'footer.php'; ?>
    <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script src="../js/script.js"></script>
</body>

</html>