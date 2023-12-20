function chk_heading_style() {
    //This is below str variable is mainly used to concat the styles applied to input tag;
    var str = "";
    //The below array is used to store the type of style name like font-family,color,etc
    var heading_style = [];
    //The below array is used to store the value of style  like Times New Roman,red,etc
    var value_of_heading_style = [];
    var count = 0;
    //chk_head is a heading check box
    var chk_head = document.getElementById('checkHeadingTag');
    //select_heading_tag is a select or drop downlist
    var select_heading_tag = document.getElementById('selectHeadingTag');
    //heading is a text box 
    var heading = document.getElementById('inputHeadingName');
    //this is the chk_font_family font family select 
    var chk_font_family = document.getElementById('selectheadingFontFamily');
    //chk_font_color is a used for color input of text
    var chk_font_color = document.getElementById('inputHeadingFontColor');
    //chk_font_color is a used for background color input of text
    var chk_bg_color = document.getElementById('inputHeadingBGColor');
    //chk_text_align is used to get the value of the text align of the text
    var chk_text_align = document.getElementById('selectHeadingAlign');
    //chk_letter_spacing is used to assign the letter spacing to the text
    var chk_letter_spacing = document.getElementById('inputHeadingLetterSpacing')

    //--------------------the end of variable of heading style---------------------
    //This are variables for background
    var str_background = "";
    var background_style = [];
    var value_of_background_style = [];
    var background = document.getElementById('checkBackgroundTag');
    var background_image = document.getElementById('checkBackgroundImage')
    var src_of_background_image = document.getElementById('inputBgImageURL')
    var background_repeat = document.getElementById('selectBgRepeat')
    var background_position = document.getElementById('selectBgPosition')
    var background_attachment = document.getElementById('selectBgScrolling')
    var background_bgcolor = document.getElementById('inputBgFontColor')
    //--------------------the end of variable of background style---------------------

    //This are variables for pargraph tag
    var pargraph = document.getElementById('checkParagraphTag')
    var str_pargraph = "";
    var pargraph_style = [];
    var value_of_pargraph_style = [];
    var value_of_pargraph = document.getElementById('inputParagraphText')
    var chk_para_font_family = document.getElementById('selectParagraphFontFamily')
    var para_font_size = document.getElementById('inputParagraphFontSize')
    var chk_para_align = document.getElementById('selectParagraphTextAlign')
    var para_color = document.getElementById('inputParagrapFontColor')
    var chk_para_font_Style = document.getElementById('selectParagraphFontStyle')
    var chk_para_font_weight = document.getElementById('selectParagraphFontWeight')
    var chk_para_font_varient = document.getElementById('selectParagraphFontVariant')
    var para_letter_spacing = document.getElementById('inputParagraphLetterSpacing')
    var para_line_height = document.getElementById('inputParagraphLineHeight')
    var para_text_indent = document.getElementById('inputTextIndent')
    //--------------------the end of variable of pargraph style---------------------
    //This are the variable of title meta and keyword 
    var str_title = ""
    var title = document.getElementById('flexCheckChecked')
    var title_page = document.getElementById('page_title')
    var meta_descrition = document.getElementById('page_description')
    var meta_keyword = document.getElementById('page_keyword')
    //-------------------------------below is the code for heading style
    if (chk_head.checked == true) {
        if (heading.value != null) {
            if (chk_font_family.options[chk_font_family.selectedIndex] != 0) {
                heading_style.push("font-family");
                value_of_heading_style.push(chk_font_family.options[chk_font_family.selectedIndex].text + ";");
                console.log(chk_font_family.options[chk_font_family.selectedIndex].text)
            }
            if (chk_font_color.value != "#2f2d2d") {
                heading_style.push("color")
                value_of_heading_style.push(chk_font_color.value + ";")
                console.log(chk_font_color.value)
            }
            if (chk_bg_color.value != "#ffffff") {
                heading_style.push("background-color")
                value_of_heading_style.push(chk_bg_color.value + ";")
                console.log(chk_bg_color.value)
            }
            if (chk_text_align.options[chk_text_align.selectedIndex] != 0) {
                heading_style.push("text-align");
                value_of_heading_style.push(chk_text_align.options[chk_text_align.selectedIndex].text + ";");
                console.log(chk_text_align.options[chk_text_align.selectedIndex].text);
            }
            if (chk_letter_spacing.value != "") {
                heading_style.push("letter-spacing")
                value_of_heading_style.push(chk_letter_spacing.value + "px;")
                console.log(chk_letter_spacing.value + ";")
            }
        }
        else {
            document.getElementById('code_heading').textContent = "<" + select_heading_tag.options[select_heading_tag.selectedIndex].text + "><\/" + select_heading_tag.options[select_heading_tag.selectedIndex].text + ">";
        }
    }
    //--------------------------below is the code for  background image--------------
    if (background.checked == true) {
        if (background_image.checked == true) {
            if (src_of_background_image.value != "") {
                background_style.push("background-image")
                value_of_background_style.push("url(" + src_of_background_image.value + ");")
                console.log("url(+" + src_of_background_image.value + ");")
            }
            if (background_repeat.options[background_repeat.selectedIndex] != 0) {
                background_style.push("background-repeat")
                value_of_background_style.push(background_repeat.options[background_repeat.selectedIndex].text + ";")
                console.log(background_repeat.options[background_repeat.selectedIndex].text)
            }
            if (background_position.options[background_position.selectedIndex] != 0) {
                background_style.push("background-position")
                value_of_background_style.push(background_position.options[background_position.selectedIndex].text + ";")
                console.log(background_position.options[background_position.selectedIndex].text)
            }
            if (background_attachment.options[background_attachment.selectedIndex] != 0) {
                background_style.push("background-attachment")
                value_of_background_style.push(background_attachment.options[background_attachment.selectedIndex].text + ";")
                console.log(background_attachment.options[background_attachment.selectedIndex].text)
            }
        }
        else {
            if (background_bgcolor.value != "#2f2d2d") {
                background_style.push("background-color")
                value_of_background_style.push(background_bgcolor.value + ";")
                console.log(background_bgcolor.value)
            }
        }
    }
    // Here will the code come for generating the style rules for p tag
    if (pargraph.checked == true) {
        if (value_of_pargraph.value != "") {
            if (chk_para_font_family.options[chk_para_font_family.selectedIndex].value != 0) {
                pargraph_style.push("font-family")
                value_of_pargraph_style.push(chk_para_font_family.options[chk_para_font_family.selectedIndex].text + ";")
                console.log(chk_para_font_family.options[chk_para_font_family.selectedIndex].text)
            }
            if (para_font_size.value != "") {
                pargraph_style.push("font-size")
                value_of_pargraph_style.push(para_font_size.value + "px;")
                console.log(para_font_size.value)
            }
            if (chk_para_align.options[chk_para_align.selectedIndex].value != 0) {
                pargraph_style.push("text-align")
                value_of_pargraph_style.push(chk_para_align.options[chk_para_align.selectedIndex].value + ";")
                console.log(chk_para_align.options[chk_para_align.selectedIndex].value)
            }
            if (para_color.value != "#2f2d2d") {
                pargraph_style.push("color")
                value_of_pargraph_style.push(para_color.value + ";")
                console.log(para_color.value)
            }
            if (chk_para_font_Style.options[chk_para_font_Style.selectedIndex].value != 0) {
                pargraph_style.push("font-style")
                value_of_pargraph_style.push(chk_para_font_Style.options[chk_para_font_Style.selectedIndex].value + ";")
                console.log(chk_para_font_Style.options[chk_para_font_Style.selectedIndex].value)
            }
            if (chk_para_font_weight.options[chk_para_font_weight.selectedIndex].value != 0) {
                pargraph_style.push("font-weight")
                value_of_pargraph_style.push(chk_para_font_weight.options[chk_para_font_weight.selectedIndex].value + ";")
                console.log(chk_para_font_weight.options[chk_para_font_weight.selectedIndex].value)
            }
            if (chk_para_font_varient.options[chk_para_font_varient.selectedIndex].value != 0) {
                pargraph_style.push("font-variant")
                value_of_pargraph_style.push(chk_para_font_varient.options[chk_para_font_varient.selectedIndex].value + ";")
                console.log(chk_para_font_varient.options[chk_para_font_varient.selectedIndex].value)
            }
            if (para_letter_spacing.value != "") {
                pargraph_style.push("letter-spacing")
                value_of_pargraph_style.push(para_letter_spacing.value + "px;")
                console.log(para_letter_spacing.value)
            }
            if (para_line_height.value != "") {
                pargraph_style.push("line-height")
                value_of_pargraph_style.push(para_line_height.value + "px;")
                console.log(para_line_height.value)
            }
            if (para_text_indent.value != "") {
                pargraph_style.push("text-indent")
                value_of_pargraph_style.push(para_text_indent.value + "px;")
                console.log(para_text_indent.value)
            }
        }
        else {
            document.getElementById('code_pargraph').textContent = "<p><\/p>";
        }
    }
    if (title.checked == true) {
        str_title += "<head>"
        if (title_page.value != "") {
            str_title += "<title>" + title_page.value + "</title>"
        }
        if (meta_descrition.value != "") {
            str_title += "<meta name='description' content='" + meta_descrition.value + "'/>"
        }
        if (meta_keyword.value != "") {
            str_title += "<meta name='keyword' content='" + meta_keyword.value + "'>"
        }
        str_title += "</\head>"
        document.getElementById('code_title').textContent = str_title;
    }
    //This is a code for concating the array into the tag as a style rule for heading tag the styles that can be appiled to a heading tag
    if (heading_style.length > 0) {
        var value_head_name = heading.value;
        console.log(value_head_name)
        for (var i = 0; i < heading_style.length; i++) {
            str += heading_style[i] + ":" + value_of_heading_style[i];
            console.log(heading_style[i] + ":" + value_of_heading_style[i])
        }
        document.getElementById('code_heading').textContent = "<" + select_heading_tag.options[select_heading_tag.selectedIndex].text + " style='" + str + "'>" + value_head_name + "<\/" + select_heading_tag.options[select_heading_tag.selectedIndex].text + ">";
    }
    else {
        var value_head_name = heading.value;
        console.log(value_head_name)
        document.getElementById('code_heading').textContent = "<" + select_heading_tag.options[select_heading_tag.selectedIndex].text + ">" + value_head_name + "<\/" + select_heading_tag.options[select_heading_tag.selectedIndex].text + ">";
    }
    //This is a code for concating the array into the tag as a style rule for background the styles that can be appiled to a heading tag
    if (background_style.length > 0) {
        for (var i = 0; i < background_style.length; i++) {
            str_background += background_style[i] + ":" + value_of_background_style[i];
            console.log(background_style[i] + ":" + value_of_background_style[i])
        }
        document.getElementById('code_background_image').textContent = "<body style='" + str_background + "'>";
    }
    else {
        document.getElementById('code_background_image').textContent = "<body style='" + str_background + "'>";
    }
    if (pargraph_style.length > 0) {
        var value_head_name = value_of_pargraph.value;
        console.log(value_head_name)
        for (var i = 0; i < pargraph_style.length; i++) {
            str_pargraph += pargraph_style[i] + ":" + value_of_pargraph_style[i];
            console.log(heading_style[i] + ":" + value_of_pargraph_style[i])
        }
        document.getElementById('code_pargraph').textContent = "<p style='" + str_pargraph + "'>" + value_head_name + "<\/p><\/body>";
    }
    else {
        var value_head_name = value_of_pargraph.value;
        console.log(value_head_name)
        document.getElementById('code_pargraph').textContent = "<p>" + value_head_name + "<\/p><\/body>";
    }
}