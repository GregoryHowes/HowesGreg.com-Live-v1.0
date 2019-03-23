function setLanguage() {
    //window.alert("Change Language");
    //if (document.getElementById("langToggle").value == "jp" )
    if (document.getElementById("langToggle").innerHTML == "日本語" )
    {
        //set language toggle caption to English
        document.getElementById("langToggle").innerHTML = "English";

        document.getElementById("myName").innerHTML = "ハウズ　グレッグ";
        document.getElementById("myNameNavbar").innerHTML = "ハウズ　グレッグ";
        document.getElementById("aboutMeNav").innerHTML =　"プロフィール";
        document.getElementById("trainingNav").innerHTML =　"コーチング";
        document.getElementById("galleryNav").innerHTML =　"写真";
        document.getElementById("blogNav").innerHTML =　"ブログ";
        document.getElementById("contactNav").innerHTML =　"お問い合わせ";
        document.getElementById("aboutMeCaption").innerHTML =　"プロフィール";
        document.getElementById("myBio").innerHTML =　"コナ出場を夢見ている";

        document.getElementById("PBs").innerHTML = "記録";

        document.getElementById("marathonPB").innerHTML =　"フルマラソン - 2:42:31";
        document.getElementById("marathonPBRace").innerHTML =　"熊本城マラソン 2015";
        
        document.getElementById("halfPB").innerHTML =　"ハーフマラソン - 1:14:49";
        document.getElementById("halfPBRace").innerHTML =　"天草マラソン 2014";

        document.getElementById("10kPB").innerHTML =　"10キロ - 33:41";
        document.getElementById("10kPBRace").innerHTML =　"玉名いちごマラソン　2013";
        
        document.getElementById("IMPB").innerHTML =　"ウルトラロングトライアスロン - 9:49:40";
        document.getElementById("IMPBRace").innerHTML =　"五島列島国際トライアスロン 2018";

        document.getElementById("myProfile").innerHTML = "２００１年のロンドンマラソンを完走のきっかけマラソンはずっと大好きだった。\
                                    それからフルマラソンは年に1回か2回ぐらいをチャレンジして、サブスリーは10回ぐらい出来た。\
                                    2018年に第1回日本ウルトラロングディスタンストライアスロン選手権で2位だった。\
                                    今からコナを目指そう！";
                                


                        
        
    } else {
        //set language toggle caption to Japanese
        document.getElementById("langToggle").innerHTML = "日本語";

        document.getElementById("myName").innerHTML = "Greg Howes";
        document.getElementById("myNameNavbar").innerHTML = "Greg Howes";
        document.getElementById("aboutMeNav").innerHTML =　"About me";
        document.getElementById("trainingNav").innerHTML =　"Coaching";
        document.getElementById("galleryNav").innerHTML =　"Gallery";
        document.getElementById("blogNav").innerHTML =　"Blog";
        document.getElementById("contactNav").innerHTML =　"Contact";
        document.getElementById("aboutMeCaption").innerHTML =　"About Me";
        document.getElementById("myBio").innerHTML =　"From multisport muppet to dreams of Kona";

        document.getElementById("PBs").innerHTML = "Personal Bests";

        document.getElementById("marathonPB").innerHTML =　"Marathon - 2:42:31";
        document.getElementById("marathonPBRace").innerHTML =　"Kumamoto 2015";

        document.getElementById("halfPB").innerHTML =　"Half Marathon 1:14:49";
        document.getElementById("halfPBRace").innerHTML =　"Amakusa 2014";

        document.getElementById("10kPB").innerHTML =　"10K - 33:41";
        document.getElementById("10kPBRace").innerHTML =　"Tamana Ichigo 2013";

        document.getElementById("IMPB").innerHTML =　"IM-distance triathlon - 9:49:40";
        document.getElementById("IMPBRace").innerHTML =　"Goto Nagasaki 2018";

        document.getElementById("myProfile").innerHTML = "I have had a passion for running since completing my first full marathon, The London Marathon, way back in 2001. \
             Since then I have completed one or two marathons per year, breaking three hours approximately ten times, and achieving a personal best of 2:42. \
        In 2018 I placed 2nd overall in the Japanese Ultra-long Distance Triathlon National Championships.";

        

    }
}