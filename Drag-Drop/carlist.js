$(document).ready(function () {
    /* dataTransfer property is pushed to the list of properties 
       that needs to be copied to jQuery wrapper */
    jQuery.event.props.push('dataTransfer');
    /* Drag events */
    $('#carList').on('dragstart', dragging);
    /* Drop events */
    $('#favoriteCars').on('dragenter', preventDefault);
    $('#favoriteCars').on('dragover', preventDefault);
    $('#favoriteCars').on('drop', dropItem);
});

    function dragging(e) {
        var val = e.target.getAttribute('data-value');
        e.dataTransfer.setData('text', val);
        /* Sets the mouse pointer. Possible values: copy, move, link */
        e.dataTransfer.effectAllowed = 'copy';
    }
    
    /* Prevents default behaviour (rejecting dragged items) on dragenter and dragover events */
    function preventDefault(e) {
        e.preventDefault();
    }
    
    function dropItem(e) {
        var data = e.dataTransfer.getData('text').split(',');
        if (data[0] == 'car') {
            var li = document.createElement('li');
            li.textContent = data[1];
            e.target.appendChild(li);
        }
    }