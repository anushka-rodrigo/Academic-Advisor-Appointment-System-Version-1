const header = `
    <div class="header">
            <h1>AAA</h1>
            <div class="header-links">
                <a href="../html/Courses.html">courses</a>
                <a href="../html/studentDashBoard.html">dashboard</a>
                <button id="logout-btn">Logout</button>
            </div>
            <div class="hamburger-menu"><img src="../img/menu_8777579.png" alt=""></div>
        </div>
`;

const mobileMenu = `
        <button id="close-btn-mobile"><img src="../img/close_8777865.png" alt=""></button>
        <a href="../html/Courses.html">courses</a>
        <a href="../html/studentDashBoard.html">dashboard</a>
        <button id="logout-btn">Logout</button>
`;
document.querySelector('.header-container').innerHTML = header;
document.querySelector('.mobile-menu').innerHTML = mobileMenu;

document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('.mobile-menu').style.display = 'flex';
});

document.querySelector('#close-btn-mobile').addEventListener('click', function () {
    document.querySelector('.mobile-menu').style.display = 'none';
});
