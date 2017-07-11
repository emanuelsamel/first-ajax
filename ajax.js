document.addEventListener("DOMContentLoaded", function() {

  var rootRequestAjax = document.getElementById("runajaxrequesttoroot");
  var pingPongRequest = document.getElementById('runajaxrequesttoping/pong');
  var countRequest = document.getElementById('RunAJAXRequesttoCount');
  var timeRequest = document.getElementById('RunAJAXRequesttoTime');
  var carRequest = document.getElementById('runajaxrequesttocar');

  rootRequestAjax.addEventListener( 'click', function(){


    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      dataType: "text",

    });
  });
  pingPongRequest.addEventListener('click', function(){

    $.ajax({

      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
    })
    .done(function(responseData){
      console.log("Here is your response");
      console.log(responseData);
      var element = document.createElement('div');
      element.innerHTML = responseData;
      document.querySelector('#step3456').append(element);
    })
    .fail(function( jqXHR, textStatus, errorThrown){
      console.log('Nooooo');
      console.log(textStatus, errorThrown);
      var fail = document.createElement('div');
      fail.innerHTML = "Try harder!";
      document.querySelector('#step3456').append(fail);
    })
    .always(function(){
      console.log('all i know is, its over');
      var always = document.createElement('div');
      always.innerHTML = "Hey the request finished!";
      document.querySelector('#step3456').append(always);
    });
  });

  countRequest.addEventListener( 'click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text',
    })
    .done(function(responseData){
      console.log('Here is you response');
      console.log(responseData);
      var element = document.createElement('div');
      element.innerHTML = responseData;
      document.querySelector('#step7').append(element);
    })
    // .fail(function(){
    //
    // })
    // .always(function(){
    //
    // })
  });

  timeRequest.addEventListener('click', function(){

    $.ajax({
      url: ' http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      dataType: 'text',
      data: {
        timezone: 'Europe/Sofia'
      }
    })

    .done(function (responseData){
      console.log(responseData);
      var element = document.createElement('div');
      element.innerHTML = responseData;
      document.querySelector('#step8').append(element);
    })
  });

  carRequest.addEventListener('click', function(){

    $.ajax({
      url: ' http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html',
    })

    .done(function (responseData){
      console.log(responseData);
      var element = document.createElement('div');
      element.innerHTML = responseData;
      document.querySelector('#step9').append(element);
      document.querySelector('#car').append(element);
    })
  });
  /* Your code goes here */
});
