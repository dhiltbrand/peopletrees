  export function getUserLanguage() {
    let lang = null;

    if(navigator.languages && navigator.languages.length) {
      lang = navigator.languages[0].split('-')[0];;
    } else if(navigator.language) {
      lang = navigator.language.split('-')[0];
    } else if(navigator.browserLanguage) {
      lang = navigator.browserLanguage.split('-')[0];
    }

    return (lang) ? lang : 'en';
  }