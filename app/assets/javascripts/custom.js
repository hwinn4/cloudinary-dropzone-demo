$(document).ready(function(){

    var myDropzone = new Dropzone(document.getElementById('dropzone-area'), {
        autoProcessQueue: false,
        uploadMultiple: false,
        acceptedFiles:'.jpg,.jpeg,.png,.gif,.pdf',
        parallelUploads: 6,
        previewsContainer: '#preview',
        previewTemplate: document.getElementById('preview-template').innerHTML,
        url: '/images',
        method: 'POST'
    });

    $(document).on('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#directions').modal('show');

        $(this).on('mouseout', function() {
            $('#directions').modal('hide');
        });
    });

    Dropzone.autoDiscover = false;


    $("#dropzone-area").on('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#directions').modal('hide');
        $('#upload-form').modal('show');
    });

    $("#submit").click(function(){
        myDropzone.processQueue();
    });

    myDropzone.on('success', function(file, response){
        window.location.href = "/images/" + response.new_image_id
    })


});