// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// jQuery Plugin. Set/show rating by star
function initRaty() {
  if($('.raty-read').length) {
    $('.raty-read').raty({
      starType: 'i',
      space: false,
      readOnly: true,
      score: function() { return $(this).data('rating') }
    })
  }

  if($('.raty').length) {
    $('.raty').raty({
      starType: 'i',
      target: '#review_rate', // Sync rating to #review_rate
      targetKeep: true,
      targetType: 'number',
      space: true,
      score: function() { return $(this).data('rating') }
    })
  }
}

$(document).on('load turbolinks:load', initRaty)
