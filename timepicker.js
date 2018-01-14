(function($) {

    $('*[data-timepicker]').attr('autocomplete', 'off').keydown(function (e) {

        // Input Value var
        var inputValue = $(this).val();

        // Make sure keypress value is a Number
        if ((e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 95 && e.keyCode < 106) || e.keyCode == 8) {

            if (inputValue.length == 3 && e.keyCode == 8) {
                $(this).val(inputValue.substr(0, inputValue.length - 1));
            }

            // Make sure first value is not greater than 2
            else if (inputValue.length == 0) {
                if (parseInt(e.key) > 2) {
                    e.preventDefault();
                    $(this).val(2);
                }
            }

            // Make sure second value is not greater than 4
            else if (inputValue.length == 1 && e.keyCode != 8) {
                e.preventDefault();
                if (inputValue[0] == 2 && e.key > 3) {
                    $(this).val(inputValue + '3:');
                }
                else {
                    $(this).val(inputValue + e.key + ':');
                }
            }

            else if (inputValue.length == 2 && e.keyCode != 8) {
                e.preventDefault();
                if (e.key > 5) {
                    $(this).val(inputValue + ':5');
                }
                else {
                    $(this).val(inputValue + ':' + e.key);
                }
            }

            // Make sure that third value is not greater than 5
            else if (inputValue.length == 3 && e.keyCode != 8) {
                if (e.key > 5) {
                    e.preventDefault();
                    $(this).val(inputValue + '5');
                }
            }

            // Make sure only 5 Characters can be input
            else if (inputValue.length > 4 && e.keyCode != 8) {
                e.preventDefault();
                return false;
            }
        }

        // Prevent Alpha and Special Character inputs
        else {
            e.preventDefault();
            return false;
        }
    }); // End Timepicker KeyUp function

})(jQuery);
