var airlines = null;
    cars = null;
    unit = null;
    selectedZone = null;
    selectedHotel = null;
    selectedService = null;
    selectedUnit = null;
    selectedArrivalDate = null;
    selectedArrivalTime = null;
    selectedArrivalAirline = null;
    selectedArrivalFlight = null;
    selectedDepartureDate = null;
    selectedDepartureTime = null;
    selectedDepartureAirline = null;
    selectedDepartureFlight = null;
    selectedAirlineArrival = '/images/icons/airlines/aeromexico.jpg';
    selectedAirlineDeparture = '/images/icons/airlines/aeromexico.jpg';
    selectedPassengerSuburban = null;
    selectedPassengerHiace = null;
    selectedPassengerSprinter = null;
    selectedName = null;
    selectedPhone = null;
    selectedEmail = null;
    hotelicon = null;
    pricePaypal = null;

$( document ).ready(function() {
    function getPosition(unit) {
        for(var car in cars) {
            if( cars[car].name === unit) return car;
        }
        return -1;
    }

    function getPositionAirline(airline) {
        for(var plane in planes) {
            if( planes[plane].name === airline) return plane;
        }
        return -1;
    }

    function getPositionOcation(special) {
        for(var ocation in ocations) {
            if( ocations[ocation].name === special) return ocation;
        }
        return -1;
    }

    $( "#reserve-private" ).click(function() {
        $(".modal-body img#carimage").attr("src","/images/units/suburban.png");
        $("h4#modalLabelSmall").html(`Private Car`);
    });

    function updatePrices(event) {
        // Inputs
        var selectedUnit = $( "#form-unit" ).val();
        var selectedService = $( "#form-service" ).val();
        var unitIndex = getPosition(selectedUnit);

        // Early checks
        if ($("#form-unit").val() == "1 passanger") {
          $(".modal-body img#carimage").attr("src","/images/units/suburban.png");
        };
        if ($("#form-unit").val() == "2 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/suburban.png");
        };
        if ($("#form-unit").val() == "3 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/suburban.png");
        };
        if ($("#form-unit").val() == "4 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/suburban.png");
        };
        if ($("#form-unit").val() == "5 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/suburban.png");
        };
        if ($("#form-unit").val() == "6 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/hiace.png");
        };
        if ($("#form-unit").val() == "7 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/hiace.png");
        };
        if ($("#form-unit").val() == "8 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/hiace.png");
        };
        if ($("#form-unit").val() == "9 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/hiace.png");
        };
        if ($("#form-unit").val() == "10 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/hiace.png");
        };
        if ($("#form-unit").val() == "11 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/crafter.png");
        };
        if ($("#form-unit").val() == "12 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/crafter.png");
        };
        if ($("#form-unit").val() == "13 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/crafter.png");
        };
        if ($("#form-unit").val() == "14 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/crafter.png");
        };
        if ($("#form-unit").val() == "15 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/crafter.png");
        };
        if ($("#form-unit").val() == "16 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/crafter.png");
        };
        if ($("#form-unit").val() == "17 passangers") {
          $(".modal-body img#carimage").attr("src","/images/units/crafter.png");
        };

        $( "#send-prebook" ).attr('disabled', 'disabled');
        if (unitIndex < 0 || selectedUnit === "false" || selectedZone  === "false") return;

        if ($("#form-service").val() === "Round Trip") {
          $("#only-oneway").css("display", "none");
          $( "#arrival-info").css("display", "block");
        };

        if($("#form-service").val() === "One Way") {
          $( "#only-oneway" ).css("display", "block");
          $( "#arrival-info").css("display", "none");
        };

        // Formulas
        var price = selectedService === "One Way"?
            cars[unitIndex].prices[selectedZone - 1].oneway :
            cars[unitIndex].prices[selectedZone - 1].roundtrip;

        price = parseInt(price);

        selectedName = $("#form-name").val(),
        selectedEmail = $("#form-email").val(),
        selectedPhone = $("#form-phone").val(),
        selectedArrivalDate = $("#form-arrival-date").val(),
        selectedArrivalTime = $("#form-arrival-time").val(),
        selectedArrivalAirline = $("#form-arrival-airline").val(),
        selectedArrivalFlight = $("#form-arrival-flight").val(),
        selectedDepartureDate = $("#form-departure-date").val(),
        selectedDepartureTime = $("#form-departure-time").val(),
        selectedDepartureAirline = $("#form-departure-airline").val(),
        selectedDepartureFlight = $("#form-departure-flight").val(),

        // Outputs
        $("#resume-hotel").html(`${selectedHotel}`);
        $("#resume-hotel-img").attr("src", `/${hotelicon}`);
        $("#resume-vehicle").html(`${selectedUnit}`);
        $("#resume-service").html(`${selectedService}`);
        $("#resume-name").html(`${selectedName}`);
        $("#resume-email").html(`${selectedEmail}`);
        $("#resume-phone").html(`${selectedPhone}`);
        $("#resume-arrival-date").html(`${selectedArrivalDate}`);
        $("#resume-arrival-time").html(`${selectedArrivalTime}`);
        $("#resume-arrival-airline-img").attr("src", `${selectedAirlineArrival}`);
        $("#resume-arrival-airline").html(`${selectedArrivalAirline}`);
        $("#resume-arrival-flight").html(`${selectedArrivalFlight}`);
        $("#resume-departure-date").html(`${selectedDepartureDate}`);
        $("#resume-departure-time").html(`${selectedDepartureTime}`);
        $("#resume-departure-airline-img").attr("src", `${selectedAirlineDeparture}`);
        $("#resume-departure-airline").html(`${selectedDepartureAirline}`);
        $("#resume-departure-flight").html(`${selectedDepartureFlight}`);

        $("#price").html(`$ ${price} USD ${ selectedUnit== "Shuttle"? "per 2 persons":"" }`);
        $("#priceBig").html(`$ ${price} USD`);
        $("#priceBig2").text(`$ ${price} USD`);

        var tax = Math.round(price * 0.06);

        $("#tax").html( `$ ${tax} USD` );

        var priceTotal = Math.round(tax + price);

        $("#priceTotal").html( `$ ${priceTotal} USD` );
        $("#price-paypal").val( priceTotal );
        $("#send-prebook").removeAttr('disabled');
    }

    $.getJSON( "../json/transfers.json", function( data ) {
        for (units in data.units){
            $("#form-unit").append("<option value='" + data.units[units].name + "'>" + data.units[units].name + "</option>");
        }
        cars = data.units

        for (airlines in data.airlines){
            $("#form-arrival-airline").append("<option value='" + data.airlines[airlines].name + "'>" + data.airlines[airlines].name + "</option>");
            $("#form-departure-airline").append("<option value='" + data.airlines[airlines].name + "'>" + data.airlines[airlines].name + "</option>");
        }
        planes = data.airlines

        for (ocations in data.ocation){
            $("#form-ocation").append("<option value='" + data.ocation[ocations].name + "'>" + data.ocation[ocations].name + "</option>");
        }
        planes = data.ocation
    });

    $("#send-prebook").on("click", function() {
        $("#step1").css("display", "none");
        $("#step2").css("display", "block");
        $("#arrival").show();

        if($('#form-service').val() === "One Way") {
            $("#departure").hide();
        };
    });

    $("#send-mail").on("click", function() {
        var formData = {
            "homepage": "https://cabotransportationservices.com",
            "selectedAirlineArrival": selectedAirlineArrival,
            "selectedAirlineDeparture": selectedAirlineDeparture,
            "hotel": selectedHotel,
            "hotelicon": hotelicon,
            "iconArrivalAirline": selectedAirlineArrival,
            "iconDepartureAirline": selectedAirlineDeparture,
            "unit": $("#form-unit").val(),
            "service": $("#form-service").val(),
            "name": $("#form-name").val(),
            "email": $("#form-email").val(),
            "phone": $("#form-phone").val(),
            "arrivaldate": $("#form-arrival-date").val(),
            "arrivaltime": $("#form-arrival-time").val(),
            "arrivalairline": $("#form-arrival-airline").val(),
            "arrivalflight": $("#form-arrival-flight").val(),
            "departuredate": $("#form-departure-date").val(),
            "departuretime": $("#form-departure-time").val(),
            "departureairline": $("#form-departure-airline").val(),
            "departureflight": $("#form-departure-flight").val(),
            "comments": $("#form-comment").val(),
            "destination": $("#form-destination").val(),
            "price-normal": $("#priceBig2").text()
        };
        $.ajax({
            type: 'POST',
            url: 'https://mailer.hnb.mx/cabotransportationservices.php',
            dataType: "json",
            data: formData,
            success: function(response) {
                $("#step2").css("display", "none");
                $("#step3").css("display", "block");
            },
            error: function(xhr, status, error){
                console.log(xhr);
            }
        });
        $("#step2").css("display", "none");
        $("#step3").css("display", "block");
    });

    // Binds
    $("#form-unit, #form-hotel, #form-service").on("change", updatePrices);
    $('#reserve-modal').on('hidden.bs.modal', function () {
        location.reload();
    });

    var options = {
        url: '../json/transfers.json',
        getValue: 'name',
        listLocation: "hotel",
        template: {
            type: "text",
            fields: {
                link: "name"
            }
        },

        list: {
            match: {
                enabled: true
            },
            onSelectItemEvent: function(elem) {
                selectedZone = $("#form-hotel").getSelectedItemData().zone;
                selectedHotel = $("#form-hotel").getSelectedItemData().name;
                hotelicon = $("#form-hotel").getSelectedItemData().logo;
            }
        },

        theme: "round"
    };
    $("#form-hotel").easyAutocomplete(options);
});
