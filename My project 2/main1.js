
// 1-formula uchun kodlar//
let trapetsiya1=document.querySelector(".trap_form1");
let trapetsiya2=document.querySelector(".trap_form2");
let trapetsiya3=document.querySelector(".trap_form3");
let trapetsiya4=document.querySelector(".trap_form4");
let trapetsiya5=document.querySelector(".trap_form5");
let trapetsiya6=document.querySelector(".trap_form6");
let trapetsiya7=document.querySelector(".trap_form7");

let trapContain=document.getElementById("dom1")
let trapContain1=document.getElementById("dom2")
let trapContain2=document.getElementById("dom3")
let trapContain3=document.getElementById("dom4")
let trapContain4=document.getElementById("dom5")

let b;
let h;
let m;
let w;
let x;

function Event1(){
    let text1 = document.createElement("h5");
    text1.className = "texts"
    text1.innerText = "Kesim yuzasi: w=h*b (m^2)"
    trapContain.appendChild(text1);

    let text2 = document.createElement("h5");
    text2.className = "texts"
    text2.innerText = "b=kanal tubi eni(m)"
    trapContain.appendChild(text2);

    let text3 = document.createElement("h5");
    text3.className = "texts"
    text3.innerText = "h=kanal chuqurligi(m)"
    trapContain.appendChild(text3);

    trapContain1.innerHTML='<input type="number" name="username" id="" class="login-form-field1" placeholder="b ni kiriting">';
    trapContain2.innerHTML='<input type="number" name="username1" id="" class="login-form-field2" placeholder="h ni kiriting">';
   
    let input1=document.querySelector(".login-form-field1")
    let input2=document.querySelector(".login-form-field2")
   
    let btn1 = document.createElement("button");
            btn1.className="digit"
            btn1.innerText="Natija"
            btn1.addEventListener('click',(e)=> {

                b=parseInt(input1.value);
                h=parseInt(input2.value);
                
                
                w=h*b;

                let result1=document.createElement("h2");
                result1.className="natija"
                result1.innerText="Kesim yuzasi:"+w; 
                trapContain4.appendChild(result1)
            });
           trapContain3.appendChild(btn1);
}

// 2-formula uchun kodlar//

function Event2(){
    let text1 = document.createElement("h5");
    text1.className = "texts"
    text1.innerText = "Kanal suv sarfi: Q=v/w (m^3/s)"
    trapContain.appendChild(text1);

    let text2 = document.createElement("h5");
    text2.className = "texts"
    text2.innerText = "w=jonli kesim yuzasi"
    trapContain.appendChild(text2);

    let text3 = document.createElement("h5");
    text3.className = "texts"
    text3.innerText = "v=oqim tezligi km/s"
    trapContain.appendChild(text3);


    trapContain1.innerHTML='<input type="number" name="username" id="" class="login-form-field1" placeholder="v ni kiriting">';
    trapContain2.innerHTML='<input type="number" name="username1" id="" class="login-form-field2" placeholder="w ni kiriting">';
   
    
    let input1=document.querySelector(".login-form-field1")
    let input2=document.querySelector(".login-form-field2")
   

  
    

    let btn1 = document.createElement("button");
            btn1.className="digit"
            btn1.innerText="Natija"
            btn1.addEventListener('click',(e)=> {

                w=parseInt(input2.value);
                v=parseInt(input1.value);
                
                
                q=v/w;

                let result1=document.createElement("h2");
                result1.className="natija"
                result1.innerText="Kanal suv sarfi:"+q; 
                trapContain4.appendChild(result1)
            });
           trapContain3.appendChild(btn1);
}

// 3-formula uchun kodlar

function Event3(){
    let text1 = document.createElement("h5");
    text1.className = "texts"
    text1.innerText = "Oqim tezligi: v=Q/w (m/s)"
    trapContain.appendChild(text1);

    let text2 = document.createElement("h5");
    text2.className = "texts" 
    text2.innerText = "Q=suv sarfi"  
    trapContain.appendChild(text2);

    let text3 = document.createElement("h5");
    text3.className = "texts"
    text3.innerText = "w=jonli kesim yuzasi"
    trapContain.appendChild(text3);


    trapContain1.innerHTML='<input type="number" name="username" id="" class="login-form-field1" placeholder="Q ni kiriting">';
    trapContain2.innerHTML='<input type="number" name="username1" id="" class="login-form-field2" placeholder="w ni kiriting">';
   
    
    let input1=document.querySelector(".login-form-field1")
    let input2=document.querySelector(".login-form-field2")
   

  
    

    let btn1 = document.createElement("button");
            btn1.className="digit"
            btn1.innerText="Natija"
            btn1.addEventListener('click',(e)=> {

                q=parseInt(input1.value);
                w=parseInt(input2.value);
                
                
                v=q/w;

                let result1=document.createElement("h2");
                result1.className="natija"
                result1.innerText="Oqim tezligi:"+v; 
                trapContain4.appendChild(result1)
            });
           trapContain3.appendChild(btn1);
}

// 4-formula uchun kodlar

function Event4(){
    let text1 = document.createElement("h5");
    text1.className = "texts"
    text1.innerText = "Xo`llanganlik perimetri: 𝜒=2*h+b (m)"  
    trapContain.appendChild(text1);

    let text2 = document.createElement("h5");
    text2.className = "texts"
    text2.innerText = "b=kanal tubi eni(m)"
    trapContain.appendChild(text2);

    let text3 = document.createElement("h5");
    text3.className = "texts"
    text3.innerText = "h=kanal chuqurligi(m)"
    trapContain.appendChild(text3);

    trapContain1.innerHTML='<input type="number" name="username" id="" class="login-form-field1" placeholder="b ni kiriting">';
    trapContain2.innerHTML='<input type="number" name="username1" id="" class="login-form-field2" placeholder="h ni kiriting">';
    
    
    let input1=document.querySelector(".login-form-field1")
    let input2=document.querySelector(".login-form-field2")
    

  
    

    let btn1 = document.createElement("button");
            btn1.className="digit"
            btn1.innerText="Natija"
            btn1.addEventListener('click',(e)=> {

                b=parseInt(input1.value);
                h=parseInt(input2.value);
                
                
                w=b+2*h;

                let result1=document.createElement("h2");
                result1.className="natija"
                result1.innerText="Xo`llanganlik perimetri:"+w; 
                trapContain4.appendChild(result1)
            });
           trapContain3.appendChild(btn1);  
         }       

// 5-formula uchun kodlar

function Event5(){
    let text1 = document.createElement("h5");
    text1.className = "texts"
    text1.innerText = "Gidravlik radius: R=w/𝜒 yoki  h*b/2*h+b"  
    trapContain.appendChild(text1);

    let text2 = document.createElement("h5");
    text2.className = "texts"
    text2.innerText = "b=kanal tubi eni(m)"
    trapContain.appendChild(text2);

    let text3 = document.createElement("h5");
    text3.className = "texts"
    text3.innerText = "h=kanal chuqurligi(m)"
    trapContain.appendChild(text3);

    let text4 = document.createElement("h5");
    text4.className = "texts"
    text4.innerText = "m=kanal qiyaligi"
    trapContain.appendChild(text4);

    let text5 = document.createElement("h5");
    text5.className = "texts"
    text5.innerText = "𝜔=jonli kesim yuzasi"
    trapContain.appendChild(text5);

    let text6 = document.createElement("h5");
    text6.className = "texts"
    text6.innerText = "𝜒= xo`llanganlik perimetri"
    trapContain.appendChild(text6);

    trapContain1.innerHTML='<input type="number" name="username" id="" class="login-form-field1" placeholder="w ni kiriting">';
    trapContain2.innerHTML='<input type="number" name="username1" id="" class="login-form-field2" placeholder="𝜒 ni kiriting">';
   
    
    let input1=document.querySelector(".login-form-field1")
    let input2=document.querySelector(".login-form-field2")
  
    
    let btn1 = document.createElement("button");
            btn1.className="digit"
            btn1.innerText="Natija"
            btn1.addEventListener('click',(e)=> {

                w=parseInt(input1.value);
                x=parseInt(input2.value);
               
                
                m=w/x;

                let result1=document.createElement("h2");
                result1.className="natija"
                result1.innerText="Gidravlik radius:"+m; 
                trapContain4.appendChild(result1)
            });
           trapContain3.appendChild(btn1);          
}