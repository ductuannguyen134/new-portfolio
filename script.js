const cardNames = [
  "#home",
  "#basic-info",
  "#skills",
  "#experience",
  "#education",
  "#contact",
];

const navIds = ["#nav-0", "#nav-1", "#nav-2", "#nav-3", "#nav-4", "#nav-5"];

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 110 ||
    document.documentElement.scrollTop > 110
  ) {
    $("button").removeClass("hidden");
    $("button").addClass("visibility");
    $("#menu").addClass("sticky");
  } else {
    $("button").removeClass("visibility");
    $("button").addClass("hidden");
    $("#menu").removeClass("sticky");
  }
}

function toTop() {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
  navIds.forEach((nav) => {
    $(nav).removeClass("opacity");
  });
}

for (let num = 0; num < navIds.length; num++) {
  let navId = navIds[num];
  navDecoration(navId, num);
}

function navDecoration(navId, num) {
  $(navId).click(function () {
    $(navId).removeClass("opacity");
    $("html, body").animate(
      {
        scrollTop: $(cardNames[num]).offset().top,
      },
      500
    );
    const unClickedNavs = navIds.filter((id) => id != navId);
    console.log(unClickedNavs);
    unClickedNavs.forEach((nav) => {
      $(nav).addClass("opacity");
    });
  });
}