$(function(){
    function autocomplete(input_elem, completions) {
    var goodWords = [];
    var potentialWords = completions,
    stringyStuff = potentialWords.join('');
    var inputBox = input_elem;
    inputBox.keyup(function(){
         var inputStuff = inputBox.val();
         var newSpan;
         $('#tastyDiv').empty();
            if(stringyStuff.indexOf(inputStuff) != -1){
                goodWords = [];
                $('#autoFill').empty();
                for(var ii=0; ii<potentialWords.length; ii++){
                    if(potentialWords[ii].indexOf(inputStuff) != -1) {
                        goodWords.push(potentialWords[ii]);
                    }
                }
                $.each(goodWords, function(){
                    var goodWord = this;
                            newSpan = $('<span></span>');
                            $('#autoFill').append(newSpan);
                            newSpan.attr('id' , goodWord);
                            newSpan.html(goodWord + '<br />');
                        });
               
            } else {
                goodWords = [];
                $('#autoFill').empty();
            }
            var kiddos = $('#autoFill').children();
            kiddos.each(function() {
                var kiddo = $(this);
                kiddo.off('click').click(function(){
                    inputBox.val(kiddo.attr('id'));
                    $('#autoFill').empty();
                    $('#tastyDiv').html('What a great choice!<br />'+kiddo.attr('id')+' is super tasty.'); //this can and should be removed for anything but the mexican food
                });
            });
    });
    inputBox.keyup(function(e){
        if(e.keyCode == 8) {
            goodWords = [];
            $('#autoFill').empty();
            $('#tastyDiv').empty();
        }
        });  
    
};
autocomplete($("#auto"), ["burrito", "taco", "chimichanga", "flauta", "chicharron", "quesadilla", "torta", "pulpo", "guacamole", "salsa"]);

});
