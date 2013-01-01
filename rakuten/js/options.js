jQuery.noConflict();
jQuery(document).ready(function(){
    function save_options() {
      var select = document.getElementById("mode");
      var mode = select.children[select.selectedIndex].value;
      chrome.storage.local.set({'default_mode': mode}, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById("status");
        status.innerHTML = "Options Saved.";
        setTimeout(function() {
          status.innerHTML = "";
        }, 750);
      });

    }

    // Restores select box state to saved value from localStorage.
    function restore_options() {
      chrome.storage.local.get('default_mode',function(items){
      var mode_ = items['default_mode'];
        if (!mode_) {
          return;
        }
        var select = document.getElementById("mode");
        for (var i = 0; i < select.children.length; i++) {
          var child = select.children[i];
          if (child.value == mode_) {
            child.selected = "true";
            break;
          }
        }
      });
    }
    //document.addEventListener('DOMContentLoaded', restore_options);

    restore_options();
    document.querySelector('#save').addEventListener('click', save_options);
});