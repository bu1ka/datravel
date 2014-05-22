define(['backbone'], function(Backbone) {

    return Backbone.View.extend({
        tagName: 'li',
        className: 'gallery-thumbs-item',
        template: '<img src="<%=imageUrl %>" class="gallery-thumb-image <% if (selected) { %> gallery-thumb-image_selected<% } %>"  />',
        render: function() {

            this.$el.html(_.template(this.template, this.model.toJSON(), this));

            return this;
        },
        initialize: function() {
            this.model.on('change:selected', this.render, this);
        }
    });

});
