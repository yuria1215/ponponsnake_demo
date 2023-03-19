export default function MarketJquery() {
  $("#Rider-Snake").hover(
    function () {
      $("#Rider-Snake").addClass("PPSR-Rider-Block-Hover");
      $(".not-Rider-Snake").addClass("PPSR-Rider-Block-notHover");
      $("#line-Rider-Snake").show();
      $("#Info-Rider-Snake").addClass("Info-Rider-show");
    },
    function () {
      $("#Rider-Snake").removeClass("PPSR-Rider-Block-Hover");
      $(".PPSR-Rider-Block").removeClass("PPSR-Rider-Block-notHover");
      $(".Info-Rider").removeClass("Info-Rider-show");
      $(".line-Rider,.Info-Rider").hide();
      $("#Info-Rider-Snake").removeClass("Info-Rider-show");
    }
  );

  $("#Rider-Snake").removeClass("PPSR-Rider-Block-Hover");
  $(".PPSR-Rider-Block").removeClass("PPSR-Rider-Block-notHover");
  $(".Info-Rider").removeClass("Info-Rider-show");
  $(".line-Rider,.Info-Rider").hide();
  $("#Info-Rider-Snake").removeClass("Info-Rider-show");

  $("#Rider-Knight").hover(
    function () {
      console.log("Rider-Knight");

      $("#Rider-Knight").addClass("PPSR-Rider-Block-Hover");
      $(".not-Rider-Knight").addClass("PPSR-Rider-Block-notHover");
      $("#line-Rider-Knight").show();
      // setTimeout(() => {
      //     $("#Info-Rider-Knight").show();
      // }, 500);
      $("#Info-Rider-Knight").addClass("Info-Rider-show");
    },
    function () {
      $("#Rider-Knight").removeClass("PPSR-Rider-Block-Hover");
      $(".PPSR-Rider-Block").removeClass("PPSR-Rider-Block-notHover");
      $(".line-Rider").hide();
      $("#Info-Rider-Knight").removeClass("Info-Rider-show");
    }
  );

  $("#Rider-Weapon").hover(
    function () {
      console.log("Rider-Weapon");

      $("#Rider-Weapon").addClass("PPSR-Rider-Block-Hover");
      $(".not-Rider-Weapon").addClass("PPSR-Rider-Block-notHover");
      $("#line-Rider-Weapon").show();
      // setTimeout(() => {
      //     $("#Info-Rider-Weapon").show();
      // }, 500);
      $("#Info-Rider-Weapon").addClass("Info-Rider-show");
    },
    function () {
      $("#Rider-Weapon").removeClass("PPSR-Rider-Block-Hover");
      $(".PPSR-Rider-Block").removeClass("PPSR-Rider-Block-notHover");
      $(".line-Rider").hide();
      $("#Info-Rider-Weapon").removeClass("Info-Rider-show");
    }
  );

  $("#Rider-Pet").hover(
    function () {
      console.log("Rider-Pet");

      $("#Rider-Pet").addClass("PPSR-Rider-Block-Hover");
      $(".not-Rider-Pet").addClass("PPSR-Rider-Block-notHover");
      $("#line-Rider-Pet").show();
      // setTimeout(() => {
      //     $("#Info-Rider-Pet").show();
      // }, 500);
      $("#Info-Rider-Pet").addClass("Info-Rider-show");
    },
    function () {
      $("#Rider-Pet").removeClass("PPSR-Rider-Block-Hover");
      $(".PPSR-Rider-Block").removeClass("PPSR-Rider-Block-notHover");
      $(".line-Rider").hide();
      $("#Info-Rider-Pet").removeClass("Info-Rider-show");
    }
  );

  $(".PPSR-Rider-Block").hover(
    function () {
      $("#Rider-Pet").css({ animation: "none" });
      $(".PPSR-Click-Icon").hide();
      $(".PPSR-Rider-Block").removeClass("Rider-first");
    },
    function () {
      $(".PPSR-Rider-Block").removeClass("PPSR-Rider-Block-Hover");
      $(".PPSR-Rider-Block").removeClass("PPSR-Rider-Block-notHover");
      $(".line-Rider,.Info-Rider").hide();
    }
  );
}
