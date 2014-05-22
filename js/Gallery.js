define('Gallery', [
    'backbone',
    './collections/photos',
    './views/thumbsView',
    './views/bigPicView'
], function(Backbone, Photos, ThumbsView, BigPicView) {

    return Backbone.View.extend({
        el: '#gallery',
        events: {
           'click button[data-ctrl=prev]': 'selectPrev',
           'click button[data-ctrl=next]': 'selectNext'

        },
        initialize: function() {

            this.photos = new Photos(images);

            this.thumbs = new ThumbsView({ collection: this.photos });

            this.bigPicture = new BigPicView();

            this.photos.on('change:selected', this.replace, this);

            this.photos.at(0).set({'selected': true});

        },
        replace: function(model) {
            this.bigPicture.replace(model);
        },
        selectPrev: function(e) {
            e.preventDefault();
            this.photos.selectPrev();
        },
        selectNext: function(e) {
            e.preventDefault();
            this.photos.selectNext();
        }
    });

});
