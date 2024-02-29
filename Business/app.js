document.querySelectorAll('.deletebutton').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.confirmbox').style.opacity = '1';
    });
});

document.querySelector('.canclebutton').addEventListener('click', function() {
    document.querySelector('.confirmbox').style.opacity = '0';
});

document.getElementById('deletebeverages').addEventListener('click', function() {
    document.querySelector('.confirmbox').style.opacity = '1';
});

document.getElementById('deletefruits').addEventListener('click', function() {
    document.querySelector('.confirmbox').style.opacity = '1';
});

document.getElementById('deletehousehold').addEventListener('click', function() {
    document.querySelector('.confirmbox').style.opacity = '1';
});

document.getElementById('deletemeat').addEventListener('click', function() {
    // แสดง .confirmbox
    document.querySelector('.confirmbox').style.opacity = '1';
});

document.addEventListener('DOMContentLoaded', function() {
    // เมื่อหน้า categoryBusiness.html โหลดเสร็จสมบูรณ์

    // ตรวจสอบว่า URL มี parameter ชื่อ updatedCategoryName หรือไม่
    var urlParams = new URLSearchParams(window.location.search);
    var updatedCategoryName = urlParams.get('updatedCategoryName');

    if (updatedCategoryName) {
        // แสดงชื่อหมวดหมู่ที่ถูกแก้ไขในหน้า categoryBusiness.html
        var categoryElement = document.querySelector('.beverages p');
        categoryElement.textContent = updatedCategoryName;
    }
});



