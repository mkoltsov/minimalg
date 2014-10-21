angular.module('mg.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("app/faces/faces.tpl.html",
    "<div class=page-header><h2>Faces i've seen</h2></div><div class=jumbotron>{{test}}</div>");
  $templateCache.put("app/login/login.tpl.html",
    "<div class=page-header><h2>Login</h2></div><div class=row><div class=col-md-6><form class=form-horizontal><div class=form-group><label for=username class=\"col-sm-3 control-label\">User Name:</label><div class=col-sm-9><input id=username ng-model=username class=\"form-control\"></div></div><div class=form-group><label for=password class=\"col-sm-3 control-label\">Password:</label><div class=col-sm-9><input id=password ng-model=password type=password class=\"form-control\"></div></div><div class=form-group><div class=\"col-sm-9 col-sm-offset-3\"><input type=submit value=\"Log In\" class=\"btn btn-primary\" ng-click=\"login()\"></div></div></form></div></div>");
  $templateCache.put("app/places/places.tpl.html",
    "<div class=page-header><h2>Places i've been</h2></div><pre ng-if=false class=code>{{model | json}}</pre><div class=row><div class=\"col-md-offset-4 col-md-4\"><div class=input-group><input class=form-control ng-model=model.selected> <span class=input-group-btn><button class=\"btn btn-success\" ng-click=add(model.selected) type=button>Add</button></span></div><div class=\"list-group margin-top-20\" ng-repeat=\"place in model.places\"><a href=# class=\"list-group-item text-center\" ng-click=selectProfile(profile.ID_PROFILE)><h4><span class=climacon ng-class=place.icon style=\"font-size: 2em\"></span> {{place.address}} {{place.temp}}</h4></a></div></div></div>");
}]);