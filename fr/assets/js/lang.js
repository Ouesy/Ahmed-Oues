
function languageCh(){
    var language = {
        fr: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences" ,
            resume: "Résumé",
            contact: "Contactez",
            pabout: "Monteur vidéo et vidéaste professionnel tunisien ayant obtenu un diplôme en cinéma et audiovisuel à l'École centrale des lettres, arts et sciences de la communication, en Tunisie.",
            about_title: "Monteur vidéo &amp; Cadreur"
        }
    }
    linklan = ""
    var hyperlink = document.getElementById("alink").href;
    var newhyperlinkURL = hyperlink.slice(0,hyperlink.length-3);
    var linklan = hyperlink.slice((hyperlink.length-3),(hyperlink.length));
    if(linklan === "#fr"){
        document.getElementById("alink").textContent = "FR"
        linklan = "#en"
        hyperlink = newhyperlinkURL + linklan
        document.getElementById("alink").href = hyperlink;
    }else{
        document.getElementById("alink").textContent = "EN"
        linklan = "#fr"
        hyperlink = newhyperlinkURL + linklan
        document.getElementById("alink").href = hyperlink;
    }
    if(window.location.hash){
    if(window.location.hash === "#fr"){
        home.textContent = language.fr.home;
    }   
}
location.reload("true")
}