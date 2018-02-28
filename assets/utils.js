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
    return '<iframe class="button-api-frame" src="https://youtubemp3api.com/@api/button/mp3/' + video_id + '" width="800px" height="150px" allowtransparency="true" scrolling="no" style="border:none"></iframe>'
}