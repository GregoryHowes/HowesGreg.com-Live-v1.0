function setLanguage() {
    //window.alert("Change Language");
    if (document.getElementById("langToggle").value == "jp" )
    {
        document.getElementById("myName").innerHTML = "ハウズ　グレッグ";
        document.getElementById("myNameNavbar").innerHTML = "ハウズ　グレッグ";
        document.getElementById("aboutMeNav").innerHTML =　"グレッグは？";
        document.getElementById("trainingNav").innerHTML =　"トレーニング";
        document.getElementById("galleryNav").innerHTML =　"写真";
        document.getElementById("blogNav").innerHTML =　"ブログ";
        document.getElementById("contactNav").innerHTML =　"お問い合わせ";
    } else {
        document.getElementById("myName").innerHTML = "Greg Howes";
        document.getElementById("myNameNavbar").innerHTML = "Greg Howes";
        document.getElementById("aboutMeNav").innerHTML =　"About me";
        document.getElementById("trainingNav").innerHTML =　"Training";
        document.getElementById("galleryNav").innerHTML =　"Gallery";
        document.getElementById("blogNav").innerHTML =　"Blog";
        document.getElementById("contactNav").innerHTML =　"Contact";
    }
}