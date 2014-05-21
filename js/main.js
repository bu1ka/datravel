require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'vendor/jquery/jquery.min',
        'underscore': 'vendor/underscore-amd/underscore',
        'backbone': 'vendor/backbone-amd/backbone'
    }
});


require(['Gallery'], function(Gallery) {

    new Gallery();

});
