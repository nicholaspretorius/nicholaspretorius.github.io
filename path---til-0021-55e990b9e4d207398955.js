webpackJsonp([0xfb29f9f1823d],{421:function(n,e){n.exports={data:{markdownRemark:{html:"<h3>TypeScript Fundamentals and AngularJS Performance</h3>\n<ul>\n<li>Completed the videos for Ultimate Angular Typscript Fundamentals and AngularJS Performance | <a href=\"https://ultimateangular.com/courses/\">Link</a> </li>\n<li>ng-repeats through large data collections can be batched in order to increase performance. | <a href=\"https://github.com/UltimateAngular/angular-1-performance-src/blob/master/08-ng-repeat-batching/js/components/todos.component.js#L42\">Link</a></li>\n<li>Using 'track by' on ng-repeat is more performant as AngularJS does not need to attach its own keys at run-time</li>\n<li>ng-if is more perfomant than ng-show/ng-hide as AngularJS does not need to set watchers on each instance. It destroys them when no longer required. </li>\n<li>Use ng-model-options with debounce on input fields as it will reduce the number of digest cycles required. This also delays the evaluation so that you do not need to instantly display validation and can wait a little while. </li>\n<li>When using AngularJS expressions, you can limit the evaluations required by AngularJS storing an evaluation in a value so that AngularJS does not need to evaluate the terms or function on each digest cycle. If the evaluation is only needed once, the bind-once syntax of :: can be used. </li>\n<li>\n<p>http calls can be batched if within +- 10 milliseconds of each by using </p>\n<pre>\nangular\n.module('app', [])\n.config(function ($httpProvider) {\n\t$httpProvider.useApplyAsync(true);\n});\n</pre>\n</li>\n<li>\n<p>Strict Dependency Injection (Strict DI) can be used for minification for performance as follows: </p>\n<pre>\ncontroller: ['CounterService', function (CounterService) {\nthis.$onInit = function () {\n  this.count = CounterService.getInitialCount();\n};\nthis.increment = function () {\n  this.count = CounterService.incrementCount(this.count);\n};\nthis.decrement = function () {\n  this.count = CounterService.decrementCount(this.count);\n};\n}]\n</pre>\n</li>\n<li>\n<p>On production builds, there is no need for all the AngularJS specific .data that gets added at runtime. This can be turned off by doing: </p>\n<pre>\nangular\n.module('app', [])\n.config(function($compileProvider) {\n\t$compileProvider.debugInfoEnabled(false);\n})\n;\n</pre>\n</li>\n<li>The $onDestroy lifecycle hook can be used on AngularJS ^1.5 to do garbage collection and remove data bindings, especially when using things like EventHandlers. This can save significantly on memory usage during the lifespan of the Single Page Application. </li>\n</ul>",frontmatter:{title:"TIL 0021"}}},pathContext:{slug:"/til0021/"}}}});
//# sourceMappingURL=path---til-0021-55e990b9e4d207398955.js.map