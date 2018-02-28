function get_url_params() {
    var params = window.location.search.substr(1).split('&'),
        result = {},
        i = 0;

    for (; i < params.length; ++i) {
        var param = params[i].split('=', 2);
        if (param.length !== 2)
            continue;

        result[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
    }

    return result;
}

function generate_iframe(video_id) {
    return '<iframe class="button-api-frame" src="https://youtubemp3api.com/@api/button/mp3/' + video_id + '" allowtransparency="true" scrolling="no"></iframe>'
}

function video_block(title, video_id) {
    var $block = $( '<div>' +
                        '<div>' +
                            '<p class="left">' +
                                title +
                            '</p>' +
                            '<p class="right">' +
                                '<button class="load-button" data-video="' + video_id + '">Load</button>' +
                            '</p>' +
                        '</div>' +
                        '<div class="clear"></div>' +
                        '<div class="iframe"></div>' +
                    '</div>');

    $block.find('.load-button').click(function(){
        $block.find('.iframe').html(generate_iframe($(this).data('video')));
    });

    return $block;
}