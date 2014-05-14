(function($){
    var pageno=1;
    var API_URL = "http://apis.daum.net/search/web?q={query}&apikey=81f98f832fab2e5a037d48bf0f92e4402f1a38e0&output=json&callback={callback}&pageno={pageno}";

    $('#searchForm').on("submit", function (event) {
        pageno =1;
        var query = $('#query').val();
        var url = API_URL.replace('{query}', query).replace('{pageno}',pageno).replace('{callback}', 'test');

        $.ajax(url, {
            cache: true,
            dataType: 'jsonp',
            complete: function (jqXHR, status) {
                var data = jqXHR.responseJSON;

                var items = data.channel.item;
                for (var i = 0; i < items.length; i++) {
                    templateString = $('#pTemplate').text();
                    $('#content').append((template(templateString,{title:items[i].title,link:items[i].link})))
                }
                $('#moreBtn').toggle();
            }
        });
        return false;
    });
    $('#moreBtn').on('click',function(event){
        pageno++;
        var query = $('#query').val();
        var url = API_URL.replace('{query}', query).replace('{pageno}',pageno).replace('{callback}', 'test');

        $.ajax(url, {
            cache: true,
            dataType: 'jsonp',
            complete: function (jqXHR, status) {
                var data = jqXHR.responseJSON;

                var items = data.channel.item;
                for (var i = 0; i < items.length; i++) {
                    templateString = $('#pTemplate').text();
                    $('#content').append((template(templateString,{title:items[i].title,link:items[i].link})))
                }
            }
        });
    });
})(jQuery);
