document.getElementById("1:294").addEventListener("click", function () {
    window.location.href = "./TobeVolunteers.html";
});

document.getElementById("1:295").addEventListener("click", function () {
    window.location.href = "./ToBeSponsors.html";
});

// Đoạn ni để chuyển ngữ------------------
function changeLanguage(language) {
    var myArray = ['active', 'active-s', 'back-zid', 'lang', 'badge-FJy', 'k-f9j', 'auto-group-ja6v-RYD',
                    'teaching-english-for-kids-in-the-village-Fn9', 'there-are-many-variations-of-passages-of-lorem-ipsum-available-but-the-majority-have-suffered-alteration-in-some-form-injected-we-call-for-volunteer-of-1-english-teachers-and-teaching-ubo',
                    'th-ave-new-york-ny-120400-kkq', 'date-UB3', 'wanna-be-sponsor-bS1', 'label-text-JDw', 'button-default-Sw3'];
    for (var i = 0; i < myArray.length; i++) {
        var elements = document.querySelectorAll('.' + myArray[i]);

        elements.forEach(function (element) {
            var content = element.getAttribute('data-' + language);
            element.textContent = content;
        });
    }
    // var elements = document.querySelectorAll('.active');

    // elements.forEach(function (element) {
    //     var content = element.getAttribute('data-' + language);
    //     element.textContent = content;
    // });
    // var elements1 = document.querySelectorAll('.active-s');

    // elements1.forEach(function (element) {
    //     var content = element.getAttribute('data-' + language);
    //     element.textContent = content;
    // });
    // var elements2 = document.querySelectorAll('.back-zid');

    // elements2.forEach(function (element) {
    //     var content = element.getAttribute('data-' + language);
    //     element.textContent = content;
    // });
}

document.addEventListener('DOMContentLoaded', function () {
    // Your existing code goes here

    // Cập nhật placeholder trong thanh tìm kiếm
    var searchInput = document.querySelector('.inputabc');
    var placeholderContent = searchInput.getAttribute('data-' + language);
    searchInput.setAttribute('placeholder', placeholderContent);

    // Cập nhật lại logo ngôn ngữ
    var enLink = document.querySelector('.en-link img');
    var jpLink = document.querySelector('.jp-link img');
    var vnLink = document.querySelector('.vn-link img');

    if (language === 'en') {
        enLink.src = `img/en.png`;
        jpLink.src = `img/jp.png`;
        vnLink.src = `img/vn.png`;
    } else if (language === 'jp') {
        enLink.src = `img/jp.png`;
        jpLink.src = `img/en.png`;
        vnLink.src = `img/vn.png`;
    } else if (language === 'vn') {
        enLink.src = `img/vn.png`;
        jpLink.src = `img/jp.png`;
        vnLink.src = `img/en.png`;
    }
});



function changeLanguage(language) {
    var elements = document.querySelectorAll('.lang');

    elements.forEach(function(element) {
        var content = element.getAttribute('data-' + language);
        element.textContent = content;
    });



    var imgElement = document.querySelector('.en-link img');
    imgElement.src = 'img/' + language + '.png';

  }


const image = document.querySelectorAll(".dropdown-content img");
image.forEach((el) => el.addEventListener('click', change));
function change(e) {
const source = e.target.getAttribute('src');
const featureImage = document.querySelector('.image');
featureImage.setAttribute('src', source);
}
