<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

//SMTP validate form starts from here
require_once "Mail.php";
//$from = "Greg Howes <gihowes@gmail.com>";
$from = $email_address;
$to = "Howes Greg <info@howesgreg.com>";
$subject = "Website Contact Form:  $name";
//$body = "Hi,\n\nHow are you?";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$host = "ssl://cpanel.freehosting.com";
$username = "info@howesgreg.com";
$password = "Gr3g0ry1@nh0w35";
$port = "465";
$headers = array ('From' => $from,
  'To' => $to,
  'Subject' => $subject);
//$smtp = Mail::factory('smtp',
//  array ('host' => $host,
//    'auth' => true,
//    'username' => $username,
//    'password' => $password));

$smtp = Mail::factory('smtp',
  array ('host' => $host,
    'port' => $port,
    'auth' => true,
    'username' => $username,
    'password' => $password));

$mail = $smtp->send($to, $headers, $body);
if (PEAR::isError($mail)) {
  echo("<p>" . $mail->getMessage() . "</p>");
 } else {
  echo("<p>Message successfully sent!</p>");
 }
//and stops here!

// Create the email and send the message
//$to = 'gihowes@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
//$email_subject = "Website Contact Form:  $name";
//$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
//$headers = "From: info@howesgreg.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
//$headers .= "Reply-To: $email_address";	
//mail($to,$email_subject,$email_body,$headers);
return true;			
?>