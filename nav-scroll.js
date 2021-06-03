window.onscroll = function() {
    headerScrollStyles()
};

function headerScrollStyles() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").className = "scrolled";
    } else {
        document.getElementById("navbar").className = "";
    }
}