/* 
 * Pls m8 what r u doink here, u are not supposed to read dis
 */


var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}

var name = params.name;
name = name.replace(/\+/g, " ");
var cc = params.cc;
var qnumber = 1;
var q1 = 3;
var q2 = 3;

$("#tt").text(name + " with credit card number " + cc);

$("#ok").click(function(){
    
    lol();
    
});

/*
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 * OK
 */

$("#ok").keypress(function(e) {
    if(e.which == 13) {
        lol();
    }
});


function lol(){
    if(q1 + q2 != $("#answer").val()){
        $("#nope").text("Excusers us, ur answor were not be correct. Pls tri again to probe u be human");
        return;
    }
    
    $("#answer").val("");
    $("#nope").text("");
    
    q1 = Math.floor(Math.random()*10);
    q2 = Math.floor(Math.random()*10);
    
    $("h2").text("Qestione " + ++qnumber);
    $("#questione").text(q1 + " + " + q2);
    
    if(qnumber === 5)
        $("#nope").text("Gud job, almost there");
    
    if(qnumber === 10)
        $("#nope").text("Onli a few questiones left.");
    
    if(qnumber === 15)
        $("#nope").text("We almoest verified u r human, pls keep fillink in these questiones to win doll.");
    
    if(qnumber === 20)
        $("#nope").text("congratulatalitions, our anti-robot-softwere is 99% certain u be human now.");
    
    if(qnumber > 25)
        $("#nope").text("Less then 10 questiones remaining"); 
    
    if(qnumber > 100)
        $("#nope").text("Almost their! Pls probe ur human with sum moar questiones");
    
    //nice prank amirite????
    //xp
}