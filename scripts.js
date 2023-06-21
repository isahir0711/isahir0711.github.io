function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}


function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = true;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = false;
    }
})(); 

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    if(newColorScheme === 'light'){
        setTheme('theme-light');
        document.getElementById('slider').checked = false;
    }
    else if (newColorScheme === 'dark') {
        setTheme('theme-dark');
      document.getElementById('slider').checked = true;
    }  
});