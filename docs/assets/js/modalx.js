function initialiseModalX() {
  $('[data-toggle="modalx"]').click(function (e) {
    $("#modalx-title").text("");
    $("#modalx-content").text("");
    const title = e.currentTarget.dataset.title;
    const content = e.currentTarget.dataset.content;
    $("#modalx-title").text(title);
    $("#modalx-content").text(content);
    $(".modalx").addClass("active");

    $("body").addClass("stop-scrolling");
    $("body").bind("touchmove", function (e) {
      e.preventDefault();
    });

    e.preventDefault();
  });

  $(".modalx").click(function (e) {
    $(".modalx").removeClass("active");
    $("body").removeClass("stop-scrolling");
    $("body").unbind("touchmove");
    e.preventDefault();
  });
}
