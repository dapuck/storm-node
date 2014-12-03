#Package

###storm-node

#Example
```node
var Storm = require("storm-node");
var SplitSentenceBolt = Storm.Bolt;

SplitSentenceBolt.prototype.process = function(tuple, cb, self) {
	var words = tuple.tuple[0].split(" ");

	for(var i = 0; i < words.length; i++)
	{
		self.emit([words[i]], self);
	}
	cb();
};

var ssb = new SplitSentenceBolt();

ssb.run();
```

#Known Issues

*	Issue with BasicBolt using anchored emits

#Author

Bryan Peterson - @lazyshot
