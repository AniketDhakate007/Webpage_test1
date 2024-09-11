<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Contact.aspx.cs" Inherits="Contact" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form</title>
</head>
<body>
    <form id="Form1" runat="server">
        <input type="text" name="name" placeholder="Your Name" required /><br>
        <input type="email" name="email" placeholder="Your Email" required /><br>
        <textarea name="message" placeholder="Your Message" required></textarea><br>
        <button type="submit" onserverclick="SubmitForm">Send</button>
    </form>
</body>
</html>
