$(document).ready(function () {

	$(".nav-home").hide();

	$(window).scroll(function() {
		if ($(document).scrollTop() > 400){  
			$( '.nav-home').slideDown(200, 'easeInExpo');
		}
		else {
			$('.nav-home').slideUp(200, 'easeOutExpo');
		}

	});


	$('.click-down, .click-down-home').on('click', function(){
		$('html,body').animate({
			scrollTop: $('.hero-home, .project-hero').next('section').offset().top-30
		},
		'easeInExpo');
	});



//JQuery Twitter Feed. Coded by Tom Elliott @ www.webdevdoor.com (2013) based on https://twitter.com/javascripts/blogger.js
//Requires JSON output from authenticating script: http://www.webdevdoor.com/php/authenticating-twitter-feed-timeline-oauth/

var displaylimit = 1;
var twitterprofile = "ellen_dykes";
var screenname = "Ellen Dykes";
var showdirecttweets = false;
var showretweets = true;
var showtweetlinks = true;
var showprofilepic = false;
var showtweetactions = true;
var showretweetindicator = true;

var headerHTML = '';
var loadingHTML = '';
	//headerHTML += '<h1>'+screenname+' <span style="font-size:13px"><a href="https://twitter.com/'+twitterprofile+'" target="_blank">@'+twitterprofile+'</a></span></h1>';
	loadingHTML += '<div id="loading-container"><img src="images/ajax-loader.gif" width="32" height="32" alt="tweet loader" /></div>';
	
	$('#twitter-feed').html(headerHTML + loadingHTML);

	$.getJSON('http://ellendykes.dev:8888/get-tweets.php', 
		function(feeds) {   
		   //alert(feeds);
		   var feedHTML = '';
		   var displayCounter = 1;         
		   for (var i=0; i<feeds.length; i++) {
		   	var tweetscreenname = feeds[i].user.name;
		   	var tweetusername = feeds[i].user.screen_name;
		   	var profileimage = feeds[i].user.profile_image_url_https;
		   	var status = feeds[i].text; 
		   	var isaretweet = false;
		   	var isdirect = false;
		   	var tweetid = feeds[i].id_str;

				/*If the tweet has been retweeted, get the profile pic of the tweeter
				if(typeof feeds[i].retweeted_status != 'undefined'){
					profileimage = feeds[i].retweeted_status.user.profile_image_url_https;
					tweetscreenname = feeds[i].retweeted_status.user.name;
					tweetusername = feeds[i].retweeted_status.user.screen_name;
					tweetid = feeds[i].retweeted_status.id_str;
					status = feeds[i].retweeted_status.text; 
					isaretweet = true;
				};*/


				 //Check to see if the tweet is a direct message
				 if (feeds[i].text.substr(0,1) == "@") {
				 	isdirect = true;
				 }
				 
				//console.log(feeds[i]);

				 //Generate twitter feed HTML based on selected options
				 if (((showretweets == true) || ((isaretweet == false) && (showretweets == false))) && ((showdirecttweets == true) || ((showdirecttweets == false) && (isdirect == false)))) { 
				 	if ((feeds[i].text.length > 1) && (displayCounter <= displaylimit)) {             
				 		if (showtweetlinks == true) {
				 			status = addlinks(status);
				 		}

				 		if (displayCounter == 1) {
				 			feedHTML += headerHTML;
				 		}

				 		feedHTML += '<div class="twitter-article" id="tw'+displayCounter+'">'; 		
				 		
				 		feedHTML += '<div class="twitter-text"><span class="tweet-time"><a href="https://twitter.com/'+tweetusername+'/status/'+tweetid+'" target="_blank">'+relative_time(feeds[i].created_at)+'</a></span><p>'+status+'</p><p><img src="img/twitter-bird-red.png"/><span class="tweetprofilelink"><a href="https://twitter.com/'+tweetusername+'" target="_blank">@'+tweetusername+'</a></span><br/></p>';

				 		

				 		feedHTML += '</div>';
				 		feedHTML += '</div>';
				 		displayCounter++;
				 	}   
				 }
				}

				$('#twitter-feed').html(feedHTML);

			//Add twitter action animation and rollovers
			if (showtweetactions == true) {				
				$('.twitter-article').hover(function(){
					$(this).find('#twitter-actions').css({'display':'block', 'opacity':0, 'margin-top':-20});
					$(this).find('#twitter-actions').animate({'opacity':1, 'margin-top':0},200);
				}, function() {
					$(this).find('#twitter-actions').animate({'opacity':0, 'margin-top':-20},120, function(){
						$(this).css('display', 'none');
					});
				});			

				//Add new window for action clicks

				$('#twitter-actions a').click(function(){
					var url = $(this).attr('href');
					window.open(url, 'tweet action window', 'width=580,height=500');
					return false;
				});
			}
			
			
		}).error(function(jqXHR, textStatus, errorThrown) {
			var error = "";
			if (jqXHR.status === 0) {
				error = 'Connection problem. Check file path and www vs non-www in getJSON request';
			} else if (jqXHR.status == 404) {
				error = 'Requested page not found. [404]';
			} else if (jqXHR.status == 500) {
				error = 'Internal Server Error [500].';
			} else if (exception === 'parsererror') {
				error = 'Requested JSON parse failed.';
			} else if (exception === 'timeout') {
				error = 'Time out error.';
			} else if (exception === 'abort') {
				error = 'Ajax request aborted.';
			} else {
				error = 'Uncaught Error.\n' + jqXHR.responseText;
			}	
			alert("error: " + error);
		});


    //Function modified from Stack Overflow
    function addlinks(data) {
        //Add link to all http:// links within tweets
        data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
        	return '<a href="'+url+'"  target="_blank">'+url+'</a>';
        });

        //Add link to @usernames used within tweets
        data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
        	return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" target="_blank">'+reply.charAt(0)+reply.substring(1)+'</a>';
        });
		//Add link to #hastags used within tweets
		data = data.replace(/\B#([_a-z0-9]+)/ig, function(reply) {
			return '<a href="https://twitter.com/search?q='+reply.substring(1)+'" style="font-weight:lighter;" target="_blank">'+reply.charAt(0)+reply.substring(1)+'</a>';
		});
		return data;
	}

	function relative_time(time_value) {
		var values = time_value.split(" ");
		time_value = values[1] + " " + values[2];
		return time_value;

	}





});


