function fileValidation() {
    var fileInput = document.getElementsByName("img-thumbnail");
    var filePath = fileInput.value; //lấy giá trị input theo id
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.doc|\.pdf)$/i; //các tập tin cho phép
    //Kiểm tra định dạng
    if (!allowedExtensions.exec(filePath)) {
        fileInput.value = '';
        return false;
    } else {
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('filePreview').innerHTML = '<a href="width:700px;height:400px;" href="' + e.target.result + '"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }



    }
}
if (fileValidation = ".doc") {
    files.icon = "article"
} else if (fileValidation = ".pdf") {
    files.icon = "picture_as_pdf"
} else if (fileValidation = ".gif") {
    files.icon = "gif"
} else {
    files.icon = "insert_photo"
}