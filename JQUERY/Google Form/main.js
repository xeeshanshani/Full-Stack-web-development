
$(document).ready(function () {
    $(".input-field").on("change", function () {
        let $this = $(this);
        let $parent = $this.parent();
        if ($this.val() == "") {
            $parent.removeClass("has-value");
        }
        else {
            $parent.addClass("has-value");
        }
    });
});
