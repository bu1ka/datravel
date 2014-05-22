
define(['backbone', '../models/photo'], function(Backbone, Photo) {

    return Backbone.Collection.extend({
        model: Photo,
        initialize: function() {
            this.on('change:selected', this.toggleSelected, this);
        },
        toggleSelected: function(changedModel) {
            console.log("10: changedModel = ", changedModel);
            this.each(function(model) {
                if (model !== changedModel) {
                    model.set({'selected': false});
                }
            });
        },
        selectNext: function() {
            var selectedModel = this.findWhere({'selected': true});
            var index = this.indexOf(selectedModel);
            selectedModel.set({'selected': false});
            if (index === this.length - 1) {
                index = -1;
            }
            this.at(index + 1).set({'selected': true});



        },
        selectPrev: function() {
            var selectedModel = this.findWhere({'selected': true});
            var index = this.indexOf(selectedModel);
            selectedModel.set({'selected': false});
            if (index === 0) {
                index = this.length;
            }
            this.at(index - 1).set({'selected': true});

        }
    });

});
