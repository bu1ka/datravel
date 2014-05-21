define(['backbone'], function(Backbone) {

    return Backbone.View.extend({
        tagName: 'li',
        className: 'thumb',
        events: {
            'click': 'setSelected'
        },
        setSelected: function() {
            this.model.set({
                'selected': true
            });
        },
        template: '<img src="<%=imageUrl %>" />',
        render: function() {

            this.$el.append(_.template(this.template, this.model.toJSON(), this));

            return this;
        }
    });

});
