var airlines = null;
    unit = 'Chevrolet Suburban';
    selectedService = null;
    selectedZone = null;
    selectedHotel = null;
    selectedPassengers = null;
    tax = null;
    pricetotal = null;

$( document ).ready(function() {

  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 500,
  });


  $.getJSON( "../json/transfers.json", function( data ) {
    for (units in data.units){
      $("#form-unit").append("<option value='" + data.units[units].name + "'>" + data.units[units].name + "</option>");
    }
    cars = data.units
  });

  // VEHICLE STEP 1 Select Unit inside Modal

  $("#reserve-suburban").click(function() {
    $("#vehicleselected").html('Chevrolet Suburban');
    unit = 'Chevrolet Suburban';
    $("#reserve-suburban").addClass("selected-unit");
    $("#reserve-hiace").removeClass("selected-unit");
    $("#reserve-sprinter").removeClass("selected-unit");
    $("#capacity-suburban").css("display", "block");
    $("#capacity-hiace").css("display", "none");
    $("#capacity-sprinter").css("display", "none");
    $("#zone-unit").html("Chevrolet Suburban");
    $("#zone-1-roudntrip").html("$140 USD");
    $("#zone-1-oneway").html("$70 USD");
    $("#zone-2-roudntrip").html("$160 USD");
    $("#zone-2-oneway").html("$80 USD");
    $("#zone-3-roudntrip").html("$170 USD");
    $("#zone-3-oneway").html("$85 USD");
    $("#zone-4-roudntrip").html("$180 USD");
    $("#zone-4-oneway").html("$90 USD");
    $("#zone-5-roudntrip").html("$190 USD");
    $("#zone-5-oneway").html("$95 USD");
    $("#zone-6-roudntrip").html("$400 USD");
    $("#zone-6-oneway").html("$200 USD");
    $("#zone-7-roudntrip").html("$500 USD");
    $("#zone-7-oneway").html("$250 USD");
    $("#zone-8-roudntrip").html("$400 USD");
    $("#zone-8-oneway").html("$200 USD");
  });

  $("#reserve-hiace").click(function() {
    $("#vehicleselected").html('Toyota Hiace');
    unit = 'Toyota Hiace';
    $("#reserve-suburban").removeClass("selected-unit");
    $("#reserve-hiace").addClass("selected-unit");
    $("#reserve-sprinter").removeClass("selected-unit");
    $("#capacity-suburban").css("display", "none");
    $("#capacity-hiace").css("display", "block");
    $("#capacity-sprinter").css("display", "none");
    $("#zone-unit").html("Toyota Hiace");
    $("#zone-1-roudntrip").html("$160 USD");
    $("#zone-1-oneway").html("$80 USD");
    $("#zone-2-roudntrip").html("$170 USD");
    $("#zone-2-oneway").html("$85 USD");
    $("#zone-3-roudntrip").html("$200 USD");
    $("#zone-3-oneway").html("$100 USD");
    $("#zone-4-roudntrip").html("$220 USD");
    $("#zone-4-oneway").html("$110 USD");
    $("#zone-5-roudntrip").html("$230 USD");
    $("#zone-5-oneway").html("$115 USD");
    $("#zone-6-roudntrip").html("$420 USD");
    $("#zone-6-oneway").html("$210 USD");
    $("#zone-7-roudntrip").html("$520 USD");
    $("#zone-7-oneway").html("$260 USD");
    $("#zone-8-roudntrip").html("$420 USD");
    $("#zone-8-oneway").html("$210 USD");
  });

  $("#reserve-sprinter").click(function() {
    $("#vehicleselected").html('Mercedes-Benz Sprinter');
    unit = 'Mercedes-Benz Sprinter';
    $("#reserve-suburban").removeClass("selected-unit");
    $("#reserve-hiace").removeClass("selected-unit");
    $("#reserve-sprinter").addClass("selected-unit");
    $("#capacity-suburban").css("display", "none");
    $("#capacity-hiace").css("display", "none");
    $("#capacity-sprinter").css("display", "block");
    $("#zone-unit").html("Mercedes-Benz Sprinter");
    $("#zone-1-roudntrip").html("$190 USD");
    $("#zone-1-oneway").html("$90 USD");
    $("#zone-2-roudntrip").html("$200 USD");
    $("#zone-2-oneway").html("$100 USD");
    $("#zone-3-roudntrip").html("$220 USD");
    $("#zone-3-oneway").html("$110 USD");
    $("#zone-4-roudntrip").html("$240 USD");
    $("#zone-4-oneway").html("$120 USD");
    $("#zone-5-roudntrip").html("$260 USD");
    $("#zone-5-oneway").html("$130 USD");
    $("#zone-6-roudntrip").html("$500 USD");
    $("#zone-6-oneway").html("$250 USD");
    $("#zone-7-roudntrip").html("$620 USD");
    $("#zone-7-oneway").html("$310 USD");
    $("#zone-8-roudntrip").html("$500 USD");
    $("#zone-8-oneway").html("$250 USD");
  });

  $("#send-step-1").click(function() {
    $("#step-1").css("display", "none");
    $("#step-2").css("display", "block");
  });

  // STEP 2

  $("#send-prebook").on("click", function() {
      $("#step-2").css("display", "none");
      $("#step-3").css("display", "block");
      $("#arrival").show();

      if($('#form-service').val() === "One Way") {
          $("#departure").hide();
      };
  });

  $("#send-checkout").click(function() {
    $("#step-3").css("display", "none");
    $("#step-4").css("display", "block");
  });


  function getPosition(unit) {
    for(var car in cars) {
      if( cars[car].name === unit) return car;
    }
    return -1;
  }

  function updatePrices(event) {
        // Inputs
        selectedUnit = unit;
        selectedService = $( "#form-service" ).val();
        var unitIndex = getPosition(selectedUnit);

        // Early checks
        $( "#send-prebook" ).attr('disabled', 'disabled');
        if (unitIndex < 0 || selectedUnit === "false" || selectedZone  === "false") return;


        if ($("#form-service").val() === "Round Trip") {
          $("#departure").css("display", "block");
          $("#arrival").css("display", "block");
          $("#only-oneway").css("display", "none");
        };

        if($("#form-service").val() === "One Way") {
          $( "#departure" ).css("display", "none");
          $( "#arrival").css("display", "block");
          $("#only-oneway").css("display", "block");
        };

        // Formulas
        var price = selectedService === "One Way"?
            cars[unitIndex].prices[selectedZone - 1].oneway :
            cars[unitIndex].prices[selectedZone - 1].roundtrip;

        price = Number(price);

        if($("#form-promo").val() === "Stupay") {
          $("#getPromo").removeClass("d-none");
          //pricePromo = pricenormal * 0.10;
          //pricePromo = pricePromo.toFixed(2);
          //pricePromo = Number(pricePromo);

          $("#promoselected").html("Bottle of tequila");
          //price = price - pricePromo;
          //price = price.toFixed(2);
          //price = Number(price);
        }

        pricenormal = price;

        // Outputs
        tax = Math.round(pricenormal * 0.08);
        pricetotal = Math.round(tax + pricenormal);
        pricepaypal = pricetotal;

        $("#price").html(`$ ${price}`);
        $('#price-cash').html(`$ ${price}`);
        $("#hotelselected").html(selectedHotel);
        $("#serviceselected").html(selectedService);
        $("#selectedTax").html( `$ ${tax} USD` );
        $("#priceTotal").html( `$ ${pricetotal} USD` );
        $("#price-paypal").val( pricetotal );
        $("#paypal-button-container").val( pricetotal );
        $("#send-prebook").removeAttr('disabled');
    }

  $("#send-mail").on("click", function(e) {
  		  e.preventDefault();

        if ($("#form-name").val().trim().length < 4) {
    			alert('Name is required!');
    			return false;
    		}

        if ($("#form-email").val().trim().length < 5) {
    			alert('Email is required!');
    			return false;
    		}

        console.log(unit);
        console.log(selectedHotel);

        var formData = {
            "homepage": 'https://luiscabodriver.com',
            "unit": unit,
            "hotel": selectedHotel,
            "service": $("#form-service").val(),
            "destination": $("#form-destination").val(),
            "name": $("#form-name").val(),
            "email": $("#form-email").val(),
            "phone": $("#form-phone").val(),
            "pax-suburban": $("#form-passengers-suburban").val(),
            "pax-hiace": $("#form-passengers-hiace").val(),
            "pax-sprinter": $("#form-passengers-sprinter").val(),
            "arrival-date": $("#form-arrival-date").val(),
            "arrival-time": $("#form-arrival-time").val(),
            "arrival-airline": $("#form-arrival-airline").val(),
            "arrival-flight": $("#form-arrival-flight").val(),
            "departure-date": $("#form-departure-date").val(),
            "departure-time": $("#form-departure-time").val(),
            "departure-airline": $("#form-departure-airline").val(),
            "departure-flight": $("#form-departure-flight").val(),
            "comments": $("#form-comment").val(),
            "promo": $("#form-promo").val(),
            "price-normal": pricenormal,
            "price-paypal": pricepaypal
        };

        console.log(formData);

        $.ajax({
            type: 'POST',
            url: '../php/sendmail.php',
            //url: 'https://cabomaxico.com/php/luis.php',
            dataType: "json",
            data: formData,
            success: function(response) {
                $("#step-3").css("display", "none");
                $("#step-4").css("display", "block");
            },
            error: function(xhr, status, error){
                console.log(xhr);
            }
        });
        $("#step-3").css("display", "none");
        $("#step-4").css("display", "block");
    });


    // Binds
    $("#form-unit, #form-hotel, #form-service, #form-promo").on("keyup, keydown, change", updatePrices);
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
            }
        },

        theme: "round"
    };
    $("#form-hotel").easyAutocomplete(options);

  });
