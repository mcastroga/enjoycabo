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

$headers .= "From: sistema@enjoysjd.com \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$to = "enjoysjd@gmail.com, $Email";
$subject = "From Enjoy SJD";
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
    $message .= "<title>Enjoy SJD</title>\n";
    $message .= "</head>\n";
    $message .= "<body>\n";
    $message .= "<table style=\"border: 2px solid #000229; font-size: 14px; text-align: center; width: 800px;\">\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"background: url(https://enjoysjd.com/images/backgrounds/header-banner.jpg) no-repeat; height: 200px; width: 796px;\"></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000;\"><h1 style=\"font-size: 28px;text-align: center;margin: 0;padding: 0;color: #265485; width: 100%;\">Reservation Number: $aDate-$numero_reserva</h1></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 16px; text-align: center; width: 100%;\">Dear <strong>$Name</strong> thanks for chosing us, for your transportation service.</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; text-align: center; width: 100%;\">YOUR BOOKING IS CONFIRMED WITH ENJOY SJD</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #000; border: 1px solid #000; color: #FFF; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">CLIENT INFORMATION</th></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Name: </strong>$Name</td><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Email: </strong>$Email</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Phone: </strong>$Phone</th><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Hotel: </strong>$Hotel</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Travel type: </strong>$Service</th>\n";
    if($Unit === 'Chevrolet Suburban') {
        $message .= "<td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Passengers: </strong>$PaxSuburban</td></tr>\n";
    }
    if($Unit === 'Toyota Hiace') {
        $message .= "<td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Passengers: </strong>$PaxHiace</td></tr>\n";
    }
    if($Unit === 'Mercedes-Benz Sprinter') {
        $message .= "<td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Passengers: </strong>$PaxSprinter</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><th colspan=3 style=\"background-color: #000; border: 1px solid #000; color: #fff; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">ARRIVAL INFORMATION</th></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Arrival: </strong>$aDate - $aTime</td><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Arrival Airline: </strong>$aAirline - $aFlight</td></td></tr>\n";
    if($Service === 'Round Trip') {
        $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #000; border: 1px solid #000; color: #FFF; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">DEPARTURE INFORMATION</th></tr>\n";
        $message .= "<tr style=\"width: 796px\"><td style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Departure: </strong>$dDate - $dTime</td><td style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Departure Airline: </strong>$dAirline - $dFlight</td></tr>\n";
    }
    $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #000; border: 1px solid #000; color: #FFF; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">INFORMATION</th></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Price: </strong>$PriceNormal USD | <strong>Price Paypal: </strong>$PricePaypal USD</th><th colspan=1 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 50%;\"><strong>Unit: </strong> $Unit</strong></td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000; margin: 0;padding: 5px; font-size: 14px; width: 100%;\"><strong>Comments: </strong>$Comments</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><th colspan=2 style=\"background-color: #29A7E1; border: 1px solid #000; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">NOTICE INFORMATION</th></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">When you arrive at the airport you will see many people trying to stop you, that a time share people, we will be outside the terminal, they push to hard. We will be waiting out of the airport in the umbrella number 10 with a sign with your name on it.</td></tr>\n";
    $message .= "<tr style=\"width: 796px\"><td colspan=2 style=\"border: 1px solid #000; margin: 0; padding: 5px; font-size: 14px; text-align: center; width: 100%;\">Local contact 52 1 624 263 1304.</td></tr>\n";
    $message .= "</table></body></html>\n";


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
