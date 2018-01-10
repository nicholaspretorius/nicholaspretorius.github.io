webpackJsonp([0x65e04332f3af],{421:function(e,t){e.exports={data:{markdownRemark:{html:'<h3>Ng-Map grey area fix, \'pre-merge\' branches, better conflict resolution tools?</h3>\n<ul>\n<li>\n<p>If you get a grey area on first load of your Ng-Map, try this | <a href="https://github.com/allenhwkim/angularjs-google-maps#grey-area-in-google-maps">Link</a></p>\n<pre>\n//vm.map is the Ng-Map instance\nvar center = vm.map.getCenter();\ngoogle.maps.event.trigger(vm.map, "resize");\nvm.map.setCenter(center);\n</pre>\n</li>\n<li>\n<p>I had to do a fairly large merge with many conflicts today. My suggestion is to: </p>\n<pre>\ngit checkout branch-to-be-merged-into\ngit checkout -b pre-merge-branchname\ngit merge longlast-merged-branch\n</pre>\n</li>\n</ul>\n<p>Once you have resolved all the conflicts, create a pull request from the pre-merge-branchname to the branch-to-be-merged-into. Then merge from there. This will, in theory, prevent you from screwing up your main branches by utilizing the pre-merge-branchname as a kind of <em>staging</em> area for your merge. However, it is best you do not let your branches get too far out of sync if possible. This will reduce the number of conflicts and be easier to manage. </p>\n<ul>\n<li>On that note, VS Code is useful in that it highlights merge conflicts in the "map" on the right along with the purple highlights and C indicators. The trick is that, these colours/codes do not change once you have resolved, so you need to be sure to keep track and do your resolutions in a very methodical manner. I would however like to discover a better way to manage these conflicts? I am thinking something along the lines of a <em>Beyond Compare-like</em> side-by-side view with easy to use -> and &#x3C;- buttons for \'Approve current\' or \'Approve incoming\' or to make a merge/manual edit of the conflicting lines. </li>\n<li>\n<p>I will be investigating this possibility next week: </p>\n<ul>\n<li><a href="https://gist.github.com/jfromaniello/9207698">Integrate Beyond Compare with Git</a></li>\n<li><a href="http://www.scootersoftware.com/support.php?zz=kb_vcs#gitlinux">Beyond Compare and Git</a></li>\n</ul>\n</li>\n</ul>',frontmatter:{title:"TIL 0011"}}},pathContext:{slug:"/til0011/"}}}});
//# sourceMappingURL=path---til-0011-1ca5e3a8e2ea865f259e.js.map