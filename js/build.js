define("Gallery",["lodash","backbone"],function(e,t){return t.View.extend({el:"body",initialize:function(){this.el.innerHTML="huyhuy"}})}),define("js/Gallery",function(){}),require.config({baseUrl:"../js",paths:{lodash:"vendor/lodash-amd/main",backbone:"vendor/backbone-amd/backbone"}}),require(["./Gallery"],function(e){new e}),define("js/main",function(){});