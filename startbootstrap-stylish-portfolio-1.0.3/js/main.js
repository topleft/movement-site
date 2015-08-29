$(document).on("ready",function(){
  console.log("sanity")

  // show modal with book info on individual book click
$("#service-one").on("click", function(){
  console.log("hello")
  $("#modal-private").modal("show");
  })
});
