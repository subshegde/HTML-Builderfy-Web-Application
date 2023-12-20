var style = "";
var description = ""
var keywords = ""
var title = ""

var paragraph = "";
var paragraphValue = ""
var paragraphStyle = ""

var head = ""
var headValue = "";
var headStyle = ""
var headbgcolor = $("#headingbgcolor").val();

var body = "";
var bodyValue = ""
var bodyStyle = ""


$(document).ready(function () {
    $('#headingselectedtag').on('change', function () {
        head = $("#headingselectedtag").val(); //('#headingselectedtag :selected').text()
    });
    $("#headingbgcolorflexCheckChecked").change(function () {
        headbgcolor = $("#headingbgcolor").val();
    });
    $("#headingfgcolorflexCheckChecked").change(function () {
        change();
    })

    $("#headingbgcolorflexCheckChecked").change(function () {
        change();
    })
    $("#headingbgcolorflexCheckChecked").change(function () {
        headbgcolor = $("#headingbgcolor").val();
    });

    // title element change

    $("#title").keyup(function () {
        change();
    })

    $("#Description").keyup(function () {
        change();
    })
    $("#keyword").keyup(function () {
        change();
    })
    // title element change


    // heading element change
    $("#flexCheckCheckedheading").on('change', function () {
        change();
    });

    $("#headingname").keyup(function () {
        change();
    })

    $('#headingselectedtag').on('change', function () {
        change();
    });


    $('#flexCheckCheckedheadletterspacing').on('change', function () {
        change();
    });

    $("#headingletterspacing").keyup(function () {
        change();
    })


    $('#alignheadingselectedtag').on('change', function () {
        change();
    });


    $('#Font-Variantheadingselectedtag').on('change', function () {
        change();
    });


    $('#flexCheckCheckedFont-Variant').on('change', function () {
        change();
    });


    $('#headingbgcolorflexCheckChecked').on('change', function () {
        change();
    });

    $('#headingbgcolor').on('change', function () {
        change();
    });

    $('#flexCheckCheckedFont-Variant').on('change', function () {
        change();
    });

    $('#headingfgcolor').on('change', function () {
        change();
    });
    // heading element change

    // paragraph element change
    $("#paragraphtext").keyup(function () {
        change();
    })


    $('#paragraphfontfamilyselectedtag').on('change', function () {
        change();
    });


    $('#paragraphalignselectedtag').on('change', function () {
        change();
    });


    $('#flexCheckCheckedparagraphfont-size').on('change', function () {
        change();
    });
    $('#paragraphfontsize').on('change', function () {
        change();
    });



    $('#flexCheckCheckedparagraphbgcolor').on('change', function () {
        change();
    });
    $('#paragrapgbgcolor').on('change', function () {
        change();
    });


    $('#flexCheckCheckedparagraphfgcolot').on('change', function () {
        change();
    });
    $('#paragraphfgcolor').on('change', function () {
        change();
    });


    $('#flexCheckCheckedparagraphfontstyle').on('change', function () {
        change();
    });
    $('#paragraphfontstyle').on('change', function () {
        change();
    });


    $('#flexCheckCheckedparagraphfontweight').on('change', function () {
        change();
    });
    $('#paragraphfontweight').on('change', function () {
        change();
    });


    $('#flexCheckCheckedparagraphfontvariant').on('change', function () {
        change();
    });
    $('#paragraphfontvariant').on('change', function () {
        change();
    });

    // paragraph element change

    // body element change
    $('#flexCheckCheckedbgimage').on('change', function () {
        change();
    });
    $('#bgimg').on('change', function () {
        change();
    });

    $('#flexCheckCheckedbgrepeat').on('change', function () {
        change();
    });
    $('#bgrepeat').on('change', function () {
        change();
    });

    $('#flexCheckCheckedidbgattachment').on('change', function () {
        change();
    });
    $('#bgattachment').on('change', function () {
        change();
    });

    $('#flexCheckCheckedbgposition').on('change', function () {
        change();
    });
    $('#bgposition').on('change', function () {
        change();
    });


    $('#flexCheckCheckedbgbgcolor').on('change', function () {
        change();
    });
    $('#bgbgcolor').on('change', function () {
        change();
    });

    // body element change


    tiltleTag();
    checkHeadingTag();
    // paragraphChange();
    // bodychange();
    pageLoadSetData(head, headValue, paragraph, paragraphValue, style)




    $("#generate").click(function () {
        tiltleTag(1);
        checkHeadingTag(1);
        Checkparagraph(1);
        checkBody(1);
        style = headStyle;
        style += paragraphStyle
        style += bodyStyle
        pageLoadSetData(head, headValue, paragraph, paragraphValue, style)
    })

    $("#reset").click(function () {
        location.reload();
    })

    $("#flexCheckCheckedtitlemeta").click(function () {
        if (autoChange()) {
            tiltleTag();
            checkHeadingTag();
            // paragraphChange();
            // bodychange();
            style = headStyle;
            pageLoadSetData(head, headValue, paragraph, paragraphValue, style)
        }
        else {
            tiltleTag();
            checkHeadingTag();
            style = headStyle;
            // paragraphChange();
            pageLoadSetData(head, headValue, paragraph, paragraphValue, style)
        }
    })



})

function pageLoadSetData(head, headValue, paragraph, paragraphValue, style = "") {

    var textareaiframevalue = "<!DOCTYPE html>\n"
    textareaiframevalue += "<html>\n"
    textareaiframevalue += "<head>\n"
    textareaiframevalue += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"

    //meta and tilte
    textareaiframevalue += title
    textareaiframevalue += description
    textareaiframevalue += keywords

    textareaiframevalue += "<style>\n"


    // style open
    if (head === "" && headValue === "" && paragraph === "" && paragraphValue === "") {
        textareaiframevalue += "h1 {\n"
        textareaiframevalue += "font - family: Arial, sans - serif;\n"
        textareaiframevalue += "color: #2f2d2d;\n"
        textareaiframevalue += "text-align: default ;\n"
        textareaiframevalue += "}\n"
        textareaiframevalue += "p {\n"
        textareaiframevalue += "font-family: Arial, sans-serif;\n"
        textareaiframevalue += "font-size: 14px;\n"
        textareaiframevalue += "text-align: default;\n"
        textareaiframevalue += "color: #2f2d2d;\n"
        textareaiframevalue += "}\n";
        textareaiframevalue += "</style>\n"
    }
    else {
        textareaiframevalue += style;
        textareaiframevalue += "</style>\n"
    }

    // head close
    textareaiframevalue += "</head>\n"
    textareaiframevalue += "<body>\n"


    //head open
    if (head === "")
        textareaiframevalue += "<h1>" + headValue + "</h1>\n"
    else
        textareaiframevalue += "<" + head + ">" + headValue + "</" + head + ">\n"
    //p tag open

    if (paragraph === "")
        textareaiframevalue += "<p>" + paragraphValue + "</p>\n"
    else
        textareaiframevalue += "<" + paragraph + ">" + paragraphValue + "</" + paragraph + ">\n"

    textareaiframevalue += "</body>\n"
    textareaiframevalue += "</html>\n"


    $("#result").val(textareaiframevalue);
}

function tiltleTag(genrate = 0) {
    // description keywords titletage
    title = "";
    description = "";
    keywords = ""
    if (autoChange()) {
        if ($("#flexCheckCheckedtitlemeta").is(':checked')) {
            description = $("#Description").val();
            keywords = $("#keyword").val();
            title = "<title>" + $("#title").val() + "</title>\n";

            if (description !== "")
                description = "<meta name=\"description\" content=\"" + description + "\">\n"
            if (keywords !== "")
                keywords = "<meta name=\"keywords\" content=\"" + keywords + "\">\n"
        }
        else {
            title = "";
            description = "";
            keywords = ""
        }
    }
    else {
        title = "";
        description = "";
        keywords = ""

    }
    if (genrate === 1) {
        if ($("#flexCheckCheckedtitlemeta").is(':checked')) {
            description = $("#Description").val();
            keywords = $("#keyword").val();
            title = "<title>" + $("#title").val() + "</title>\n";

            if (description !== "")
                description = "<meta name=\"description\" content=\"" + description + "\">\n"
            if (keywords !== "")
                keywords = "<meta name=\"keywords\" content=\"" + keywords + "\">\n"
        }
        else {
            title = "";
            description = "";
            keywords = ""
        }
    }

}
function checkHeadingTag(genrate = 1) {
    headStyle = "";
    if (autoChange()) {

        if ($("#flexCheckCheckedheading").is(":checked")) {
            headValue = $("#headingname").val();

            head = $("#headingselectedtag").val(); //('#headingselectedtag :selected').text()
            fontvar = $("#Font-Variantheadingselectedtag").val();//('#fontfamilyheadingselectedtag :selected').text()
            align = $("#alignheadingselectedtag").val()///('#alignheadingselectedtag :selected').text()
            // variant = ('#Font-Variantheadingselectedtag :selected').text()
            if (head === "")
                head = "h1"
            headStyle += head + "{ \n";
            console.log($("#headingletterspacing").val());

            if ($("#flexCheckCheckedheadletterspacing").is(':checked') && $("#headingletterspacing").val() >= 1) {
                headStyle += "letter-spacing:" + $("#headingletterspacing").val() + ";\n";

            }
            if ($("#flexCheckCheckedFont-Variant").is(":checked") && fontvar !== undefined)
                headStyle += "Font-Variant:" + fontvar + ";\n";
            if (align !== undefined)
                headStyle += "text-align:" + align + ";\n"
            if ($("#headingbgcolorflexCheckChecked").is(":checked"))
                headStyle += "background:" + $("#headingbgcolor").val() + ";\n";
            if ($("#headingfgcolorflexCheckChecked").is(":checked"))
                headStyle += "color:" + $("#headingfgcolor").val() + ";\n";
            headStyle += "}"
        }
        else {
            headStyle = "";
            headValue = ""
            head = "";
        }
    }
    else {
        head = "";
        headValue = "";
        headStyle = ""
    }

    if (genrate === 1) {
        if ($("#flexCheckCheckedheading").is(":checked")) {
            headValue = $("#headingname").val();

            head = $("#headingselectedtag").val(); //('#headingselectedtag :selected').text()
            fontvar = $("#Font-Variantheadingselectedtag").val();//('#fontfamilyheadingselectedtag :selected').text()
            align = $("#alignheadingselectedtag").val()///('#alignheadingselectedtag :selected').text()
            // variant = ('#Font-Variantheadingselectedtag :selected').text()
            if (head === "")
                head = "h1"
            headStyle += head + "{ \n";
            console.log($("#headingletterspacing").val());

            if ($("#flexCheckCheckedheadletterspacing").is(':checked') && $("#headingletterspacing").val() >= 1) {
                headStyle += "letter-spacing:" + $("#headingletterspacing").val() + ";\n";

            }
            if ($("#flexCheckCheckedFont-Variant").is(":checked") && fontvar !== undefined)
                headStyle += "Font-Variant:" + fontvar + ";\n";
            if (align !== undefined)
                headStyle += "text-align:" + align + ";\n"
            if ($("#headingbgcolorflexCheckChecked").is(":checked"))
                headStyle += "background:" + $("#headingbgcolor").val() + ";\n";
            if ($("#headingfgcolorflexCheckChecked").is(":checked"))
                headStyle += "color:" + $("#headingfgcolor").val() + ";\n";
            headStyle += "}"
        }
        else {
            headStyle = "";
            headValue = ""
            head = "";
        }
    }


}

function Checkparagraph(genrate = 1) {
    paragraphStyle = "";
    if (autoChange()) {

        if ($("#flexCheckCheckedparagraphtag").is(":checked")) {

            paragraphValue = $("#paragraphtext").val();

            paragraph = "p";

            //1font family
            pFontFamily = $("#paragraphfontfamilyselectedtag").val();

            pAlign = $("#paragraphalignselectedtag").val();

            pFontStyle = $("#paragraphfontstyle").val();

            pFontWeight = $("#paragraphfontweight").val();

            pFontvariant = $("#paragraphfontvariant").val();

            if (paragraph === "")
                paragraph = "p"
            paragraphStyle += paragraph + "{ \n";



            if ($("#flexCheckCheckedparagraphfont-size").is(':checked') && $("#paragraphfontsize").val() >= 1) {
                paragraphStyle += "font-size:" + $("#paragraphfontsize").val() + ";\n";

            }
            if (pFontFamily !== undefined)
                paragraphStyle += "font-family:" + pFontFamily + "; \n";
            if (pAlign !== undefined)
                paragraphStyle += "text-align:" + pAlign + "; \n";

            if ($("#flexCheckCheckedparagraphbgcolor").is(":checked"))
                paragraphStyle += "background:" + $("#paragrapgbgcolor").val() + ";\n";

            if ($("#flexCheckCheckedparagraphfgcolot").is(":checked"))
                paragraphStyle += "color:" + $("#paragraphfgcolor").val() + ";\n";

            if ($("#flexCheckCheckedparagraphfontstyle").is(":checked"))
                paragraphStyle += "font-style:" + pFontStyle + ";\n";

            if ($("#flexCheckCheckedparagraphfontweight").is(":checked"))
                paragraphStyle += "font-weight:" + pFontWeight + ";\n";

            if ($("#flexCheckCheckedparagraphfontvariant").is(":checked"))
                paragraphStyle += "font-variant:" + pFontvariant + ";\n";


            paragraphStyle += "}"

        }
        else {
            paragraph = "";
            paragraphValue = "";
            paragraphStyle = ""
        }
    }
    else {
        paragraph = "";
        paragraphValue = "";
        paragraphStyle = ""
    }

    if (genrate === 1) {
        if ($("#flexCheckCheckedparagraphtag").is(":checked")) {

            paragraphValue = $("#paragraphtext").val();

            paragraph = "p";

            //1font family
            pFontFamily = $("#paragraphfontfamilyselectedtag").val();

            pAlign = $("#paragraphalignselectedtag").val();

            pFontStyle = $("#paragraphfontstyle").val();

            pFontWeight = $("#paragraphfontweight").val();

            pFontvariant = $("#paragraphfontvariant").val();

            if (paragraph === "")
                paragraph = "p"
            paragraphStyle += "\n" + paragraph + "{ \n";



            if ($("#flexCheckCheckedparagraphfont-size").is(':checked') && $("#paragraphfontsize").val() >= 1) {
                paragraphStyle += "font-size:" + $("#paragraphfontsize").val() + ";\n";

            }
            if (pFontFamily !== undefined)
                paragraphStyle += "font-family:" + pFontFamily + "; \n";
            if (pAlign !== undefined)
                paragraphStyle += "text-align:" + pAlign + "; \n";

            if ($("#flexCheckCheckedparagraphbgcolor").is(":checked"))
                paragraphStyle += "background:" + $("#paragrapgbgcolor").val() + ";\n";

            if ($("#flexCheckCheckedparagraphfgcolot").is(":checked"))
                paragraphStyle += "color:" + $("#paragraphfgcolor").val() + ";\n";

            if ($("#flexCheckCheckedparagraphfontstyle").is(":checked"))
                paragraphStyle += "font-style:" + pFontStyle + ";\n";

            if ($("#flexCheckCheckedparagraphfontweight").is(":checked"))
                paragraphStyle += "font-weight:" + pFontWeight + ";\n";

            if ($("#flexCheckCheckedparagraphfontvariant").is(":checked"))
                paragraphStyle += "font-variant:" + pFontvariant + ";\n";


            paragraphStyle += "}"

        }
        else {
            paragraph = "";
            paragraphValue = "";
            paragraphStyle = ""
        }
    }

}


function checkBody(genrate = 1) {
    bodyStyle = "";
    if (autoChange()) {

        if ($("#flexCheckCheckedBg").is(":checked")) {

            bgimgURL = $("#bgimg").val();

            body = "body";

            //1font family
            bgRepeat = $("#bgrepeat").val();

            bgAttachment = $("#bgattachment").val();

            bgPosition = $("#bgposition").val();

            if (body === "")
                body = "body"
            bodyStyle += "\n" + body + "{ \n";



            if ($("#flexCheckCheckedbgimage").is(':checked') && bgimgURL !== undefined) {
                bodyStyle += " background-image: url(\"" + bgimgURL + "\");\n";
            }

            if ($("#flexCheckCheckedbgrepeat").is(':checked') && bgRepeat !== undefined) {
                bodyStyle += "   background-repeat : " + bgRepeat + ";\n";
            }

            if ($("#flexCheckCheckedidbgattachment").is(':checked') && bgAttachment !== undefined) {
                bodyStyle += " background-attachment: " + bgAttachment + ";\n";
            }

            if ($("#flexCheckCheckedbgposition").is(':checked') && bgPosition !== undefined) {
                bodyStyle += "background-position: " + bgPosition + ";\n";
            }


            if ($("#flexCheckCheckedbgbgcolor").is(':checked')) {
                bodyStyle += "background-color: " + $("#bgbgcolor").val() + ";\n";
            }


            bodyStyle += "}"

        }
        else {
            body = "";
            bodyValue = "";
            bodyStyle = ""
        }
    }
    else {
        body = "";
        bodyValue = "";
        bodyStyle = ""
    }

    if (genrate === 1) {
        if ($("#flexCheckCheckedBg").is(":checked")) {

            bgimgURL = $("#bgimg").val();

            body = "body";

            //1font family
            bgRepeat = $("#bgrepeat").val();

            bgAttachment = $("#bgattachment").val();

            bgPosition = $("#bgposition").val();

            if (body === "")
                body = "body"
            bodyStyle += "\n" + body + "{ \n";



            if ($("#flexCheckCheckedbgimage").is(':checked') && bgimgURL !== undefined) {
                bodyStyle += " background-image: url(\"" + bgimgURL + "\");\n";
            }

            if ($("#flexCheckCheckedbgrepeat").is(':checked') && bgRepeat !== undefined) {
                bodyStyle += "   background-repeat : " + bgRepeat + ";\n";
            }

            if ($("#flexCheckCheckedidbgattachment").is(':checked') && bgAttachment !== undefined) {
                bodyStyle += " background-attachment: " + bgAttachment + ";\n";
            }

            if ($("#flexCheckCheckedbgposition").is(':checked') && bgPosition !== undefined) {
                bodyStyle += "background-position: " + bgPosition + ";\n";
            }



            if ($("#flexCheckCheckedbgbgcolor").is(':checked')) {
                bodyStyle += "background-color: " + $("#bgbgcolor").val() + ";\n";
            }
            bodyStyle += "}"

        }
        else {
            body = "";
            bodyValue = "";
            bodyStyle = ""
        }
    }

}


function autoChange() {
    return $("#flexCheckCheckedauto").is(':checked')
}

function change() {
    style = "";
    if (autoChange()) {
        tiltleTag(0);
        checkHeadingTag(0);
        Checkparagraph(0);
        checkBody(0);
        style = headStyle;
        style += paragraphStyle
        style += bodyStyle
        pageLoadSetData(head, headValue, paragraph, paragraphValue, style)
    }
    else {
        tiltleTag(0);
        checkHeadingTag(0);
        Checkparagraph(0);
        checkBody(0);
        style = headStyle;
        style += paragraphStyle
        style += bodyStyle
        pageLoadSetData(head, headValue, paragraph, paragraphValue, style)
    }
}

