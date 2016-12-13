$(window).load(function() {
    
    setInterval(function() {
      if (!$("#modal-popup").hasClass("in")) {
        $("#modal-popup").modal('show');
      }
    }, 300);
});