$(document).ready(function(){	
	if($('#tweet1')[0]){tweetsweet('duncanbeattie', $("#tweet1"), 1)}
	if($('#tweet5')[0]){tweetsweet('duncanbeattie', $("#tweet5"), 5)}
});


function tweetsweet(u,t,n){
	$.getJSON('http://api.twitter.com/1/statuses/user_timeline/'+u+'.json?include_rts=1&count='+n+'&callback=?', function(data){
		if(data[0]){
		    var twt = "";
			for (i = 0; i < data.length; i++) {twt += '<span class="twt">'+data[i].text+'</span>';}
		    twt = twt.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function(url){
		        return '<a target="_blank" href="'+url+'">'+url+'</a>';
		    }).replace(/B@([_a-z0-9]+)/ig, function(reply) {
		        return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
		    });
		    t.html(twt);
	    }
	    else{t.html('<strong>Problem Loading Tweets</strong>')}
	}); 
}


