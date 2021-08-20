  // Standard Google Universal Analytics code
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
  AJS.toInit(function(){
    ga('create', 'UA-68672147-1', 'auto');
 
    // Add a page-level custom variable to record the space-key
    if (typeof AJS.params.spaceKey === 'string') {
      ga('set', 'dimension1', AJS.params.spaceKey); // Set a `spaceKey` dimension at page level
    }
    ga('send', 'pageview');
  });

// Removes unwanted quiz button in user profile page.
$( document ).ready(function() {
          if (window.location.href.indexOf("users") > -1) {
           $('#remove-quiz-records').css('display','none');
           $('.quiz-answers-report-table th:first-child').css('display','none');
           $('.quiz-answers-report-table td:first-child').css('display','none');
}else{
};

$(".open_link a").attr("target", "_blank");


if (window.location.href.indexOf("SSTT") > -1) {
    AJS.toInit(function () {
  if (AJS.$("div.ia-fixed-sidebar").width() != 55) {
    AJS.$("a.expand-collapse-trigger").click();
  }
});

   }
});

// SST Issue Collector Begins
window.ATL_JQ_PAGE_PROPS =  {
	"triggerFunction": function(showCollectorDialog) {
		//Requires that jQuery is available! 
		jQuery("#sst_issues").click(function(e) {
			e.preventDefault();
			showCollectorDialog();
		});
	}};

$( document ).ready(function() {
    var sst_coll = $(".name a").attr("title");
    if(sst_coll == "Special Situations Team") {
    $('#footer').append('<button id="sst_issues" style="float:right;margin-bottom:20px;margin-right:20px;background-color:#98114e;"><a href="#" style="color:white;font-weight: bold;">BA Manual Ticket</a></button>')
    }else{ }
});

// SST Issue Collector Ends

<!-- LBS Issue Collector Begins -->
AJS.toInit(function($) {
    var LBSspaceKey = AJS.params.spaceKey;
    if(LBSspaceKey == "ACT"){
          jQuery.ajax({
             url: "https://jira.extendhealth.com/s/cf98e3e762ff2ef98cce71a47fe80c3d-T/en_US-64q7pi/64023/258/1.4.26/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=757daa0b",
        type: "get",
    cache: true,
    dataType: "script"
});
        }
});

// End  LBS  Issue Collector
// ADP Issue Collector Begins
AJS.toInit(function($) {
    var ADPspaceKey = AJS.params.spaceKey;
    if(ADPspaceKey == "ADPT"){
// Requires jQuery!
jQuery.ajax({
    url: "https://jira.extendhealth.com/s/31a8fbf04e9f6a8f2f45610aa4b10981-T/r8phfu/76005/f9dcafc9efa5484e672ec0ed398fac48/2.0.24/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=c0afc911",
    type: "get",
    cache: true,
    dataType: "script"
});
        }
});

// Start of Slider
var add_dots = document.querySelectorAll('.slide');

add_dots.forEach(function(slide, index) {
    var spa = document.createElement('span');
    spa.setAttribute("class", "dot");
    document.getElementById('dots-con').append(spa);
});


let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
    slides.forEach((slide, index) => {
        slide.style.display = "none"
        dots.forEach((dot, index) => {
            dot.classList.remove("active")
        })
    })
    slides[n].style.display = "block"
    dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
    init(currentSlide)
}

const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
    init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
    next()
}, 5000);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        console.log(currentSlide)
        init(i)
        currentSlide = i
    })
});
