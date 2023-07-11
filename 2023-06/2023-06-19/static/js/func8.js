

        function k_lever(){  
        var kor=document.getElementById("kor");

        if(kor.value<70){
            document.getElementById("kor_lv").value="F";
        }else if(kor.value<80){
            document.getElementById("kor_lv").value="C";
        }else if(kor.value<90){
            document.getElementById("kor_lv").value="B";
        }else{
            document.getElementById("kor_lv").value="A";
        }
        return;
        }
        function m_lever(){  
        var math=document.getElementById("math");
    
        if(math.value<70){
            document.getElementById("math_lv").value="F";
        }else if(math.value<80){
            document.getElementById("math_lv").value="C";
        }else if(math.value<90){
            document.getElementById("math_lv").value="B";
        }else{
            document.getElementById("math_lv").value="A";
        }
        return;
        }
        function e_lever(){  
        var eng=document.getElementById("eng");
        
        if(eng.value<70){
            document.getElementById("eng_lv").value="F";
        }else if(eng.value<80){
            document.getElementById("eng_lv").value="C";
        }else if(eng.value<90){
            document.getElementById("eng_lv").value="B";
        }else{
            document.getElementById("eng_lv").value="A";
        }
        return;
        }

        function score_celc(){
            var celc=document.getElementById("celc");
            var kor=document.getElementById("kor");
            var math=document.getElementById("math");
            var eng=document.getElementById("eng");
            var tot=total(Number(kor.value),Number(math.value),Number(eng.value));
            var avg1=parseInt(avg(tot));
            var avg_lv=lv(avg1);

            celc.innerHTML="총점 :"+tot+ "평균 :"+avg1+ "등급 :"+avg_lv;
        }
        function total(k,m,e){
            return (k+m+e);
        }
        function avg(tot){
            return tot/3;
        }
        function lv(avg1){
        if(avg1<70){
            return "F";
        }else if(avg1<80){
            return "C";
        }else if(avg1<90){
            return "B";
        }else{
            return "A";
        }
        }