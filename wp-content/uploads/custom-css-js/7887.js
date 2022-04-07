<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
// tabs design based on design by David Stump
(function() {
	
  $(function() {
    var toggle;
    return toggle = new Toggle('.toggle');
  });

  this.Toggle = (function() {
    Toggle.prototype.el = null;

    Toggle.prototype.tabs = null;

    Toggle.prototype.panels = null;

    function Toggle(toggleClass) {
      this.el = $(toggleClass);
      this.tabs = this.el.find(".tab");
      this.panels = this.el.find(".panel");
      this.border = this.el.find(".border");
      this.bind();
    }

    Toggle.prototype.show = function(index) {
      var activePanel, activeTab;
      this.tabs.removeClass('active');
      activeTab = this.tabs.get(index);
      $(activeTab).addClass('active');
      var distancefromLeft = ($(activeTab).offset().left - $(".tabs").offset().left) + 7;
      this.move(index+1, $(activeTab).width(),distancefromLeft);
      this.panels.hide();
      activePanel = this.panels.get(index);
      $( window ).resize(function() {
  		var width = $(activeTab).width();
  		var left = (($(activeTab).offset().left - $(".tabs").offset().left) + 7);
  		$(".border").animate({
	    		width: ''+width+'px',
	    	  	marginLeft: ''+left+'px'
	    	  
	    	}, {
	    	    duration: 200, 
	    	    easing: "swing"
	    	})
  	});
      return $(activePanel).show();
    };
    
    
    
    Toggle.prototype.move = function(index, width,marginLeft) {
    	if(index == 1){
	    	$(".border").animate({
	    		width: ''+width+'px',
	    	  	marginLeft: ''+marginLeft+'px',
	    	    minWidth: '70px',
	    	    backgroundColor: '#6cc644'
	    	}, {
	    	    duration: 500, 
	    	    easing: "swing"
	    	});
	    	
    	}
    	if(index==2){
    		$(".border").animate({
	    		width:''+width+'px',
	    	  	marginLeft: ''+marginLeft+'px',
	    	    minWidth: '30px',
	    	    backgroundColor: '#00a0dc'
	    	}, {
	    	    duration: 500, 
	    	    easing: "swing"
	    	});
    	}
    	if(index==3){
    		$(".border").animate({
	    		width:''+width+'px',
	    	  	marginLeft: ''+marginLeft+'px',
	    	    minWidth: '15px',
	    	    backgroundColor: '#ea4335'
	    	}, {
	    	    duration: 500, 
	    	    easing: "swing"
	    	});
    	}
    	if(index==4){
    		$(".border").animate({
	    		width:''+width+'px',
	    	  	marginLeft: ''+marginLeft+'px',
	    	    minWidth: '30px',
	    	    backgroundColor: '#c9c3e6'
	    	}, {
	    	    duration: 500, 
	    	    easing: "swing"
	    	});
    		
    	}
    	
    	
    }

    Toggle.prototype.bind = function() {
      return this.tabs.unbind('click').bind('click', (function(_this) {
        return function(e) {
          return _this.show($(e.currentTarget).index());
        };
      })(this));
    };

    return Toggle;

  })();

}).call(this);

</script>
<!-- end Simple Custom CSS and JS -->
