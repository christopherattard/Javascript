var $draggedItem;
$(document).ready(function () {
    /* Drag events on items */
    $('.item').on('dragstart', dragStart);
    $('.item').on('dragend', draggingEnded);
    /* Drop events on holes */
    $('.hole').on('dragenter', preventDefault);
    $('.hole').on('dragover', preventDefault);
    $('.hole').on('drop', dropItem);
});

function dragStart(e) {
    $(e.target).addClass('dragging');
    $draggedItem = $(e.target);
}

function draggingEnded(e) {
    $(e.target).removeClass('dragging');
}

/* Prevents default behaviour (rejecting dragged items) on dragenter and dragover events */ 
function preventDefault(e) {
    e.preventDefault();
}

function dropItem(e) {
    var hole = $(e.target);
    if (hole.hasClass('hole') && hole.children().length == 0) {
    $draggedItem.detach();
    $draggedItem.appendTo($(e.target));
}
}