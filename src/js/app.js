var API_KEY = '3327118-7066e63c6f87011be10e115fb';
var URL = 'https://pixabay.com/api/?key=' + API_KEY;

function getImages(url) {
    $.ajax({url: url, success: function(result){
        var $imgTags = $('#masonry').find('.l-masonry__img'),
            $textField = $('#masonry').find('.l-masonry__text');
        $imgTags.each(function (i) {
            $(this).attr('src', result.hits[i].webformatURL);
        });
        $textField.each(function (i) {
            $(this).text(result.hits[i].user);
        })
    }});
}

$( document ).ready(getImages(URL));

var $submit = $('#submit'),
    $request = $('#imageRequest');

$submit.click(function (e) {
    e.preventDefault();
    var req = $request.val();
    // console.log("REQ", req);
    URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + encodeURIComponent(req);
    // console.log(URL);
    getImages(URL);
})