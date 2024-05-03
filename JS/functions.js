document.getElementById('languageSelection').addEventListener('submit',getOption);


function getOption(){
    event.preventDefault();
    
    var selectedLanguage = document.getElementById('lang').value;
    var pdfObject = document.querySelector('.pdf');
    pdfObject.setAttribute('data', './CV/' + selectedLanguage);

}