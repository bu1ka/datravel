define(['backbone', '../views/thumbView'], function(Backbone, ThumbView) {

    return Backbone.View.extend({
        el: '#thumbs',

        initialize: function() {
            this.collection.each(function(photo) {
                this.$el.append( new ThumbView({model: photo}).render().el);
            }, this);


        }

    });

});
