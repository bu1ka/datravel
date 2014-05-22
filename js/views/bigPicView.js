define([
    'backbone'
], function(Backbone) {
    return Backbone.View.extend({
        el: '#big-photo',
        template: '<img src="<%=imageUrl %>" class="gallery-bigimage"/>',
        render: function() {
            this.$el.html(_.template(this.template, this.model.toJSON()), this);
            return this;
        },
        replace: function(model) {
            this.model = model;
            this.render();
        }
    });

});
