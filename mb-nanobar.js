function hex2Hsl(e){function t(e,t,n){e/=255,t/=255,n/=255;var r=Math.max(e,t,n),i=Math.min(e,t,n);var s,o,u=(r+i)/2;if(r==i){s=o=0}else{var a=r-i;o=u>.5?a/(2-r-i):a/(r+i);switch(r){case e:s=(t-n)/a+(t<n?6:0);break;case t:s=(n-e)/a+2;break;case n:s=(e-t)/a+4;break}s/=6}return{h:s,s:o,l:u}}var n=parseInt(e.substr(1,2),16);var r=parseInt(e.substr(3,2),16);var i=parseInt(e.substr(5,2),16);return t(n,r,i)}

var app = angular.module('mbNanobar', [])
.directive('mbNanobar', function() {
  return {
    restrict: 'EA',
    template: "<div class='nanobar'> <div class='bar' ng-style='style'></div> <div class='tip' ng-style='tipStyle'></div> </div>",
    scope: {
      progress: '=',
      color: '@'
    },
    link: function(scope, elem, attrs) {
      var hue = hex2Hsl(scope.color).h * 360;
      
      scope.style = {
        width: scope.progress + '%',
        'background-color': scope.color,
        '-webkit-box-shadow': '0 0 6px hsl('+hue+', 80%, 25%)',
        'box-shadow': '0 0 6px hsl('+hue+', 80%, 25%)'
      }
      scope.tipStyle = {
        backgroundColor: scope.color,
        '-webkit-box-shadow': '4px 0 8px hsl('+hue+', 80%, 25%)',
        'box-shadow': '4px 0 8px hsla('+hue+', 80%, 25%, .8)'
      }
      
      scope.$watch('progress', function(progress) {
        scope.style.width = scope.progress + '%';
      })
    }
  }
});
