<?php
$Homepage           = $_POST["homepage"];
$Unit               = $_POST["unit"];
$Hotel              = $_POST["hotel"];
$Service            = $_POST["service"];
$Destination        = $_POST["destination"];
$Name               = $_POST["name"];
$Email              = $_POST["email"];
$Phone              = $_POST["phone"];
$PaxSuburban        = $_POST["pax-suburban"];
$PaxHiace           = $_POST["pax-hiace"];
$PaxSprinter        = $_POST["pax-sprinter"];
$ArrivalDate        = $_POST["arrival-date"];
$ArrivalTime        = $_POST["arrival-time"];
$ArrivalAirline     = $_POST["arrival-airline"];
$ArrivalFlight      = $_POST["arrival-flight"];
$DepartureDate      = $_POST["departure-date"];
$DepartureTime      = $_POST["departure-time"];
$DepartureAirline   = $_POST["departure-airline"];
$DepartureFlight    = $_POST["departure-flight"];
$Comments           = $_POST["comments"];
$PriceNormal        = $_POST["price-normal"];
$PricePaypal        = $_POST["price-paypal"];
$Reservation = rand(1,100);

$headers .= "From: sistema@luiscabodriver.com \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$to = "luiscabodriver23@gmail.com, $Email";
$subject = "From Luis Cabo Driver";
$validationOK=true;

if ($validationOK) {
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');
    $response = array();
    $response[0] = array(
        'response' => 'success'
    );
    echo json_encode($response);

    $message .= "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n";
    $message .= "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n";
    $message .= "<head>\n";
    $message .= "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n";
    $message .= "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n";
    $message .= "<title>Luis Cabo Driver</title>\n";
    $message .= "</head>\n";
    $message .= "<body>\n";
    $message .= "<table style=\"border: 2px solid #000229; font-size: 14px; text-align: center; width: 800px;\">\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background: url(https://luiscabodriver.com/images/backgrounds/header-banner.jpg) no-repeat; height: 200px; width: 796px;\"></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000229;\"><h1 style=\"font-size: 14px;text-align: center;margin: 0;padding: 0;color: #000; width: 100%;\">Transfer Voucher - Reservation Number: LCD-$ArrivalDate-$Reservation</h1></td></tr>\n";
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 50%;\"><strong>Service:</strong> $Service</td><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 50%;\"><strong>Vechile: </strong>$Unit</td></tr>\n";
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 50%;\"><strong>Hotel:</strong> $Hotel</td><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; text-align: left; width: 50%;\"><strong>Arrival Date: </strong>$ArrivalDate - $ArrivalTime</td></tr>\n";
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 50%;\"><strong>Name: </strong>$Name</td><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 50%;\"><strong>Email: </strong>$Email</td></tr>\n";
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 50%;\"><strong>Phone: </strong>$Phone</td>\n";
    if($Unit  === 'Chevrolet Suburban') {
      $message .= "<td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 50%;\"><strong>Pax: </strong>$PaxSuburban</td></tr>\n";
    }
    if($Unit  === 'Toyota Hiace') {
      $message .= "<td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 50%;\"><strong>Pax: </strong>$PaxHiace</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: 30px; line-height: 30px; text-align: left; width: 50%;\"><strong>Arrival Airline: </strong> $ArrivalAirline - $ArrivalFlight</td><td colspan=1 style=\"border: 1px solid #000229; padding: 5px; font-size: 14px; text-align: left; width: 50%;\"><strong>Comments: </strong>$Comments</td></tr>\n";
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=2 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: auto; line-height: 30px; text-align: left; width: 100%;\">Your transportation is reserved and confirmed, please read the following information; When you arrive at the airport, you will proceed to immigration and then collect your luggage from the carousels. You will then be directed to Customs where you may be subject to luggage inspection. After you clear customs you will proceed through the first set of sliding doors and into an area of Time Share/Tour Sales.</td></tr>\n";
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=2 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: auto; line-height: 30px; text-align: left; width: 100%;\">If you are not interested in Timeshares, and to avoid any issues, we highly recommend you avoid any interaction with the sales people located in this area. Please note that <strong>LUIS CABO DRIVER is NOT AFFILIATED with any Time Share operation</strong>, even though some airport Time Share sales agents may try to trick you, by saying so. As you exit the Timeshare Sales area through the next set of sliding doors, please proceed through the last set of sliding doors to the outside of the terminal. Walk past the Taxi Union staff located outside the terminal and straight forward to the Tented Areas #10 located directly in front of the terminal.</td></tr>\n";
    $message .= "<tr style=\"width: 796px; height: 30px;\"><td colspan=2 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; height: auto; line-height: 30px; text-align: left; width: 100%;\">Here you will find all the private transportation companies, and our Airport Representative holding a sign upon arrival with our logo. <strong>LUIS CABO DRIVER</strong> is located under Tent #10 and your personal driver will assist with your luggage and direct you to your vehicle.</td></tr>\n";
    if($Service === 'Round Trip') {
      $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000229; margin: 0; padding: 5px; font-size: 14px; text-align: left; width: 50%;\"><strong>Departure Date: </strong>$DepartureDate - $DepartureTime</td><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; text-align: left; width: 50%;\"><strong>Departure Airline: </strong> $DepartureAirline - $DepartureFlight</td></tr>\n";
      $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000229; margin: 0; padding: 5px; font-size: 14px; text-align: left; width: 100%;\">Meeting at the lobby at ______________________</td></tr>\n";
      $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000229; margin: 0; padding: 5px; font-size: 14px; text-align: left; width: 100%;\">Note: Please be ready at the main lobby 5 minutes before your pick-up time. For any changes, please call 6241610334 ( 2- 4 hours prior to your flight).</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; text-align: left; width: 50%;\"><strong>Total in Cash: </strong> $ $PriceNormal USD</th><th colspan=1 style=\"border: 1px solid #000229; margin: 0;padding: 5px; font-size: 14px; text-align: left; width: 50%;\"><strong>Total in Paypal: </strong> $ $PricePaypal USD</td></tr>\n";

    $message .= "</table></body></html>\n";
    $success = @mail($to, $subject, $message, $headers);


} else {
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');
    $response = array();
    $response[0] = array(
        'response' => 'error'
    );

    echo json_encode($response);
}

?>
