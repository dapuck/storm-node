var Storm = require('../../storm-node');


var SplitSentenceBolt = Storm.Bolt;

SplitSentenceBolt.prototype.process = function(tuple, done, self) {
	var words = tuple.tuple[0].split(" ");
	
	for(var i = 0; i < words.length; i++)
	{
		self.emit([words[i]], self);
	}
	done();
};

var ssb = new SplitSentenceBolt();

ssb.run();