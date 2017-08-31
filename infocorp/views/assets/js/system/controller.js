/**/
var IcSysController = null;

var icSystemController = function() {
	
	/* Holds the current context object */
	this.context = {};
	/* Holds all the context objects ( whichever opened previously - including the current ) */
	this.contexts = [];
	/* Ajax request object holder */
	this.request = {};
	/* Ajax response holder */
	this.response = {};
	/**/
	this.ajaxFlaQ = true;
	/**/
	this.currentMenu = null;
	
	this.init = function() {
		this.registerEvent();
	};
	
	this.registerEvent = function() {
		
		$(document).on("click", "a", function(e) {
			e.preventDefault();
		});
		
		$(document).on("click", "#ic-primary-nav a", this, function(e) {
			
			/* Do not proceed if any ajax operation is in progress */
			if(	! e.data.ajaxFlaQ ) {			
				return;
			}
			
			$( "#ic-primary-nav > li > a" ).removeClass( "active" );
			$( this ).addClass( "active" );
			
			e.data.currentMenu = $(this);
			$("#ic-workarea-header").html($(this).html());
			
		});
		
	};
	
	this.switchContext = function() {
		
	};
	
	this.switchView = function() {
		
	};
	
	this.updateActionBar = function() {
		
	};
	
	this.userAlert = function() {
		
	};
	
	this.progressAlert = function() {
		
	};
	
	this.prepareRequest = function() {
		
	};
	
	this.prepareResponse = function() {
		
	};
	
	this.handleResponse = function() {
		
	};
	
};


$(document).ready(function(){
	IcSysController = new icSystemController();
	IcSysController.init();
});