console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  getAllTodoz();
  //complete...

  // becasue the delete-btn is added dynamically, the click handler needs to be written like such, bound to the document
  $(document).on('click', '.delete-btn', function() {
    var id = $(this).data('id')
    $.ajax({
      method: 'DELETE',
      url: '',
      success: handleTodozDeleteResponse
    })
  })

  $(document).on('click', '.edit-btn', function() {
    var id = $(this).data('id')

    // hide the static title, show the input field
    $('.title-'+id).hide()
    $('.input-'+id).show()

    // hide the edit button, show the save button
    $('.edit-'+id).hide()
    $('.save-'+id).show()

  })

  //complete...
  $(document).on('click', '.save-btn', function() {
    var id = $(this).data('id')

    // grab the user's inputted data
    var updatedTitle = $('.input-'+id+' input').val()
    $.ajax({
      method: 'PUT',
      url: '',
      data: {title: updatedTitle},
      success: handleTodozUpdateResponse
    })
  })
});

function getAllTodoz(){
  $('.list-group').html('')
  $.ajax({
    method: 'GET',
    url: '/ajax/get-all'
  }).done(function(data) {
    for( let i=0; i<data.todoz.length; i++){
      $('.list-group').append('<li class="list-group-item item-'+data.todoz[i].id+'">'
      +'<button class="btn btn-primary edit-btn edit-'+data.todoz[i].id+'" data-id="'+data.todoz[i].id+'">Edit</button>'
      +'<button class="btn btn-success save-btn save-'+data.todoz[i].id+'" data-id="'+data.todoz[i].id+'">Save</button>'
      +'<span class="title-'+data.todoz[i].id+'">&nbsp;'+data.todoz[i].title+'</span>'
      +'<span class="form-inline edit-form input-'+data.todoz[i].id+'">&nbsp;<input class="form-control" value="'+data.todoz[i].title+'"/></span>'
      +'<button class="btn btn-danger delete-btn pull-right" data-id="'+data.todoz[i].id+'">Delete</button>'
      +'</li>')    }
  })
}

function handleTodozDeleteResponse(data) {
  console.log('handleTodozDeleteResponse got ', data);
  var bookId = data._id;
  var $row = $('.item-' + bookId);
  // remove that book row
  $row.remove();
}

function handleTodozUpdateResponse(data) {
  var id = data._id;

  // replace the old title with the new title
  $('.title-'+id).html('&nbsp;'+data.title)

  $('.title-'+id).show()
  $('.input-'+id).hide()
  $('.edit-'+id).show()
  $('.save-'+id).hide()
}
