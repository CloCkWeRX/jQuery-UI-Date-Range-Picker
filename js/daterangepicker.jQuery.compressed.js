(function(a){a.widget("ux.daterangepicker",{options:{presetRanges:[],presets:{specificDate:"Specific Date",dateRange:"Date Range"},rangeStartTitle:"Start date",rangeEndTitle:"End date",nextLinkText:"Next",prevLinkText:"Prev",doneButtonText:"Done",earliestDate:Date.parse("-15years"),latestDate:Date.parse("+15years"),constrainDates:false,rangeSplitter:"-",dateFormat:"m/d/yy",closeOnSelect:true,arrows:false,appendTo:"body",onClose:function(a){},onOpen:function(a){},onChange:function(a){},datepickerOptions:null},_create:function(){function l(a){if(!a.getDate()){return""}var b=a.getDate();var c=a.getMonth();var e=a.getFullYear();c++;var f=d.dateFormat;return jQuery.datepicker.formatDate(f,a)}var b=this;this.rangeInput=this.element;var c=this.rangeInput;var d=this.options;this.rangeInput.addClass("daterangePickerInput");var e={onSelect:function(e,f){if(j.find(".ui-daterangepicker-specificDate").is(".ui-state-active")){j.find(".range-end").datepicker("setDate",j.find(".range-start").datepicker("getDate"))}a(this).trigger("constrainOtherPicker");var g=l(j.find(".range-start").datepicker("getDate"));var h=l(j.find(".range-end").datepicker("getDate"));if(c.length==2){c.eq(0).val(g);c.eq(1).val(h)}else{c.val(g!=h?g+" "+d.rangeSplitter+" "+h:g)}if(d.closeOnSelect){if(!j.find("li.ui-state-active").is(".ui-daterangepicker-dateRange")&&!j.is(":animated")){b.hideRP()}}d.onChange(b)},defaultDate:+0};c.bind("change",function(){d.onChange(b)});d.datepickerOptions=a.extend(e,d.datepickerOptions);var f,g=Date.parse("today");var h,i;if(c.size()==2){h=Date.parse(c.eq(0).val());i=Date.parse(c.eq(1).val());if(h==null){h=i}if(i==null){i=h}}else{h=Date.parse(c.val().split(d.rangeSplitter)[0]);i=Date.parse(c.val().split(d.rangeSplitter)[1]);if(i==null){i=h}}if(h!=null){f=h}if(i!=null){g=i}var j=jQuery('<div class="ui-daterangepicker ui-widget ui-helper-clearfix ui-widget-content ui-corner-all"></div>');this.rp=j;var k=function(){var a=jQuery('<ul class="ui-widget-content"></ul>').appendTo(j);jQuery.each(d.presetRanges,function(){jQuery('<li class="ui-daterangepicker-'+this.text.replace(/ /g,"")+' ui-corner-all"><a href="#">'+this.text+"</a></li>").data("dateStart",this.dateStart).data("dateEnd",this.dateEnd).appendTo(a)});var c=0;jQuery.each(d.presets,function(b,d){jQuery('<li class="ui-daterangepicker-'+b+" preset_"+c+' ui-helper-clearfix ui-corner-all"><span class="ui-icon ui-icon-triangle-1-e"></span><a href="#">'+d+"</a></li>").appendTo(a);c++});a.find("li").hover(function(){jQuery(this).addClass("ui-state-hover")},function(){jQuery(this).removeClass("ui-state-hover")}).click(function(){j.find(".ui-state-active").removeClass("ui-state-active");jQuery(this).addClass("ui-state-active");b._clickActions(jQuery(this),j,m,n);return false});return a}();jQuery.fn.restoreDateFromData=function(){if(jQuery(this).data("saveDate")){jQuery(this).datepicker("setDate",jQuery(this).data("saveDate")).removeData("saveDate")}return this};jQuery.fn.saveDateToData=function(){if(!jQuery(this).data("saveDate")){jQuery(this).data("saveDate",jQuery(this).datepicker("getDate"))}return this};var m=jQuery('<div class="ranges ui-widget-header ui-corner-all ui-helper-clearfix"><div class="range-start"><span class="title-start">Start Date</span></div><div class="range-end"><span class="title-end">End Date</span></div></div>').appendTo(j);m.find(".range-start, .range-end").datepicker(d.datepickerOptions);this.rpPickers=m;m.find(".range-start").datepicker("setDate",f);m.find(".range-end").datepicker("setDate",g);m.find(".range-start, .range-end").bind("constrainOtherPicker",function(){if(d.constrainDates){if(a(this).is(".range-start")){j.find(".range-end").datepicker("option","minDate",a(this).datepicker("getDate"))}else{j.find(".range-start").datepicker("option","maxDate",a(this).datepicker("getDate"))}}}).trigger("constrainOtherPicker");var n=jQuery('<button class="btnDone ui-state-default ui-corner-all">'+d.doneButtonText+"</button>").click(function(){j.find(".ui-datepicker-current-day").trigger("click");b.hideRP()}).hover(function(){jQuery(this).addClass("ui-state-hover")},function(){jQuery(this).removeClass("ui-state-hover")}).appendTo(m);jQuery(this.element).click(function(){b.toggleRP();return false});m.hide().find(".range-start, .range-end, .btnDone").hide();j.data("state","closed");m.find(".ui-datepicker").css("display","block");jQuery(d.appendTo).append(j);j.wrap('<div class="ui-daterangepickercontain"></div>');if(d.arrows&&c.size()==1){var o=jQuery('<a href="#" class="ui-daterangepicker-prev ui-corner-all" title="'+d.prevLinkText+'"><span class="ui-icon ui-icon-circle-triangle-w">'+d.prevLinkText+"</span></a>");var p=jQuery('<a href="#" class="ui-daterangepicker-next ui-corner-all" title="'+d.nextLinkText+'"><span class="ui-icon ui-icon-circle-triangle-e">'+d.nextLinkText+"</span></a>");jQuery(this.element).addClass("ui-rangepicker-input ui-widget-content").wrap('<div class="ui-daterangepicker-arrows ui-widget ui-widget-header ui-helper-clearfix ui-corner-all"></div>').before(o).before(p).parent().find("a").click(function(){var a=m.find(".range-start").datepicker("getDate");var b=m.find(".range-end").datepicker("getDate");var c=Math.abs((new TimeSpan(a-b)).getTotalMilliseconds())+864e5;if(jQuery(this).is(".ui-daterangepicker-prev")){c=-c}m.find(".range-start, .range-end ").each(function(){var a=jQuery(this).datepicker("getDate");if(a==null){return false}jQuery(this).datepicker("setDate",a.add({milliseconds:c})).find(".ui-datepicker-current-day").trigger("click")});return false}).hover(function(){jQuery(this).addClass("ui-state-hover")},function(){jQuery(this).removeClass("ui-state-hover")});var q=c.parent();this.riContain=q}jQuery(document).click(function(){if(j.is(":visible")){b.hideRP()}});j.click(function(){return false}).hide()},showRP:function(){if(this.rp.data("state")=="closed"){a(".daterangePickerInput").each(function(b,c){a(c).daterangepicker("hideRP")});this.positionRP();this.rp.fadeIn(300).data("state","open");this.options.onOpen(self)}},hideRP:function(){if(this.rp.data("state")=="open"){this.rp.fadeOut(300).data("state","closed");this.options.onClose(self)}},toggleRP:function(){if(this.rp.data("state")=="open"){this.hideRP()}else{this.showRP()}},positionRP:function(){var a=this.riContain||this.rangeInput;var b=a.offset(),c="left",d=b.left,e=jQuery(window).width()-d-a.outerWidth();if(d>e){c="right";d=e}this.rp.parent().css(c,d).css("top",b.top+a.outerHeight())},_clickActions:function(a,b,c,d){if(a.is(".ui-daterangepicker-specificDate")){d.hide();c.show();b.find(".title-start").text(this.options.presets.specificDate);b.find(".range-start").restoreDateFromData().css("opacity",1).show(400);b.find(".range-end").restoreDateFromData().css("opacity",0).hide(400);setTimeout(function(){d.fadeIn()},400)}else if(a.is(".ui-daterangepicker-allDatesBefore")){d.hide();c.show();b.find(".title-end").text(this.options.presets.allDatesBefore);b.find(".range-start").saveDateToData().datepicker("setDate",this.options.earliestDate).css("opacity",0).hide(400);b.find(".range-end").restoreDateFromData().css("opacity",1).show(400);setTimeout(function(){d.fadeIn()},400)}else if(a.is(".ui-daterangepicker-allDatesAfter")){d.hide();c.show();b.find(".title-start").text(this.options.presets.allDatesAfter);b.find(".range-start").restoreDateFromData().css("opacity",1).show(400);b.find(".range-end").saveDateToData().datepicker("setDate",this.options.latestDate).css("opacity",0).hide(400);setTimeout(function(){d.fadeIn()},400)}else if(a.is(".ui-daterangepicker-dateRange")){d.hide();c.show();b.find(".title-start").text(this.options.rangeStartTitle);b.find(".title-end").text(this.options.rangeEndTitle);b.find(".range-start").restoreDateFromData().css("opacity",1).show(400);b.find(".range-end").restoreDateFromData().css("opacity",1).show(400);setTimeout(function(){d.fadeIn()},400)}else{d.hide();b.find(".range-start, .range-end").css("opacity",0).hide(400,function(){c.hide()});var e=typeof a.data("dateStart")=="string"?Date.parse(a.data("dateStart")):a.data("dateStart")();var f=typeof a.data("dateEnd")=="string"?Date.parse(a.data("dateEnd")):a.data("dateEnd")();b.find(".range-start").datepicker("setDate",e).find(".ui-datepicker-current-day").trigger("click");b.find(".range-end").datepicker("setDate",f).find(".ui-datepicker-current-day").trigger("click")}return false},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments)},destroy:function(){this.rangeInput.removeClass("daterangePickerInput");this.rp.closest(".ui-daterangepickercontain").remove();this.rpPickers.each(function(b,c){a(c).datepicker("destroy")});a.Widget.prototype.destroy.call(this)}})})(jQuery)