var API_URL = "http://apis.daum.net/search/web?q={query}&apikey=81f98f832fab2e5a037d48bf0f92e4402f1a38e0&output=json&callback={callback}&pageno={pageno}";

$('#searchForm').on("submit", function (event) {
    console.log('submit');

    var query = $('#query').val();
    var url = API_URL.replace('{query}', query).replace('{pageno}','1').replace('{callback}', 'test');

    $.ajax(url, {
        cache: true,
        dataType: 'jsonp',
        complete: function (jqXHR, status) {
            var data = jqXHR.responseJSON;

            var items = data.channel.item;
            for (var i = 0; i < items.length; i++) {
                console.log(items[i].title);
                templateString = $('#pTemplate')[0].innerHTML;
                console.log(templateString);
                $('#content').append(template(templateString,{title:items[i].title,link:items[i].link}))
            }
        }
    });

    return false;
});