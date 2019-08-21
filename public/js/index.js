(function($){
    // 输出化左侧菜单栏和右侧栏的滚动框
	$(".menu-panel").overlayScrollbars({});
	$(".right-body").overlayScrollbars({});
    $("#logoutPanel").hide();
    $("#logoutPanel").data("hidden", "true");
    $("#userInfoMore").click(function() {
        if($("#logoutPanel").data("hidden") == "true") {
            $("#logoutPanel").show();
            $("#logoutPanel").data("hidden", "false");
        } else {
            $("#logoutPanel").hide();
            $("#logoutPanel").data("hidden", "true");
        }
    });
})(jQuery);
