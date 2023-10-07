let activecellelement=document.getElementById("active-cell");
const textAlignElements=document.getElementsByClassName("text-align");
let activecell=null;
const boldButton=document.getElementById("bold");
const italicButton=document.getElementById("italic");
const underlinedButton=document.getElementById("Underline");
const fontSizeElement=document.getElementById("ftsize");
const fontStyleElement=document.getElementById("ftstyle");

let activeopstate;


function toggleButtonStyle(button,isSelcted){
    if(isSelcted){
        button.classList.add("active-option");
        }
        else{
            button.classList.remove("active-option");
        } 
}

function highlightOptButtonFocus(){

// if(activeopstate.isBoldSelected){
// if(!boldButton.classList.contains("active-option")){
// boldButton.classList.add("active-option");
// }
// }
// else{
//     boldButton.classList.remove("active-option");
// }

toggleButtonStyle(boldButton,activeopstate.isBoldSelected)
toggleButtonStyle(italicButton,activeopstate.isItalicsSelected)
toggleButtonStyle(underlinedButton,activeopstate.isUnderLineSelected)

// if(activeopstate.isItalicsSelected){
// if(!italicButton.classList.contains("active-option")){
// italicButton.classList.add("active-option");
// }
// }
// else{
//     italicButton.classList.remove("active-option");
// }

// if(activeopstate.isUnderlineSelected){
//     underlinedButton.classList.add("active-option");

// }
// else{
//     underlinedButton.classList.remove("active-option");
// }

highlightTextAlignButtons(activeopstate.textAlign);

fontStyleElement.value=activeopstate.fontFamily;


if(activeopstate.fontSize==="16px"){
    fontSizeElement.value=16;
}
else if(activeopstate.fontSize==="14px"){
    fontSizeElement.value=14;
}
else if(activeopstate.fontSize==="20px"){
    fontSizeElement.value=20;
}
else if(activeopstate.fontSize==="18px"){
    fontSizeElement.value=18;
}






// if(activeopstate.fontFamily==="monospace"){
//     fontStyleElement.value="monospace";
// }
// else if(activeopstate.fontFamily==="sans-serif"){
//     fontStyleElement.value="sans-serif";
// }
// else if(activeopstate.fontFamily==="cursive"){
//     fontStyleElement.value="cursive";
// }
// else if(activeopstate.fontFamily==="fantasy"){
//     fontStyleElement.value="fantasy";
// }



}


function oncellfocus(e){
    if(activecell &&activecell.id===e.target.id){
        return;
    }   
    activecell=e.target; 
    activecellelement.innerText=e.target.id;
 const computedStyle=getComputedStyle(activecell);
 
    activeopstate={
        fontFamily: computedStyle.fontFamily,
        isBoldSelected: computedStyle.fontWeight==="600",
        isItalicsSelected: computedStyle.fontStyle==="italic",
        isUnderlineSelected: computedStyle.textDecoration.includes("underline"),
        textAlign:computedStyle.textAlign,
        textColor: computedStyle.color,
        backgroundColor: computedStyle.backgroundColor,
        fontSize: computedStyle.fontSize,
        };

        highlightOptButtonFocus();

 }


function onClickBold(boldButton){
    boldButton.classList.toggle("active-option");
    if(activecell){
        if(activeopstate.isBoldSelected===false){
            activecell.style.fontWeight="600";

        }
        else{
            activecell.style.fontWeight="400";
        }
        activeopstate.isBoldSelected=!activecell.isBoldSelected;
    }

}

function onClickItalic(italicButton){
    italicButton.classList.toggle("active-option");
    if(activecell){
        if(activeopstate.isItalicsSelected){
            activecell.style.fontStyle="normal";
           
        }
        else{
            activecell.style.fontStyle="italic";
        }
        activeopstate.isItalicsSelected= !activeopstate.isItalicsSelected;
    }
}


function onClickUnderline(underlineButton){
 underlineButton.classList.toggle("active-option");
    if(activecell){
        if(activeopstate.isUnderLineSelected){
            activecell.style.textDecoration="none";
           
        }
        else{
            activecell.style.textDecoration="underline";
        }
        activeopstate.isUnderLineSelected= !activeopstate.isUnderLineSelected;
    }
}

function highlightTextAlignButtons(textAlignValue){

for(let i=0;i<textAlignElements.length;i++){

    if(textAlignElements[i].getAttribute("data-value")===textAlignValue){
    textAlignElements[i].classList.add("active-option");
    }

else{
    textAlignElements[i].classList.remove("active-option");
}
}
}

function onclickTextAlign(textAlignbutton){
    let selectedValue=textAlignbutton.getAttribute("data-value");
    // highlightTextAlignButtons(selectedValue);

    if(activecell){
        activecell.style.textAlign=selectedValue;
        activeopstate.textAlign=selectedValue;
    }

}

function onChangeTextColor(textColorInput){
  let selectedColor=  textColorInput.value;
  if(activecell){
    activecell.style.color=selectedColor;
    activeopstate.color=selectedColor;
  }
}

function onChangeBackgroundColor(backgroundColorInput){
    let selectedColor=  backgroundColorInput.value;
    if(activecell){
      activecell.style.backgroundColor=selectedColor;
      activeopstate.backgroundColor=selectedColor;
    }
}

function fontChange(fontsizeInput){
    let selectedfontSize=fontsizeInput.value;
    if(activecell){
        activecell.style.fontSize=selectedfontSize+"px";
        activeopstate.fontSize=selectedfontSize;
    }
   
}


function fontstChange(fontstyInput){
    let selectedfontStyle=fontstyInput.value;
    if(activecell){
        activecell.style.fontFamily=selectedfontStyle;
        activeopstate.fontFamily=selectedfontStyle;
    }
}