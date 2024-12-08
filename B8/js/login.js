// Lay url => kiem tra xem dang o trang nao
const pathname = Location.pathname;

// [HOME] ---------------------------------------------
if (
    pathname.includes("index.html") ||
    pathname.charAt(pathname.length - 1) == "/"
) {
    // kiem tra neu chua login => chuyen trong login
    if (!localStorage.getItem("curentUser")) {
        location.href = "./html/login.html";
    }
}
