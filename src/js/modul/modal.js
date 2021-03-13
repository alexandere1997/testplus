let modal = () => {
    const cost__close = document.querySelector(".cost__close"),
          cost__add = document.querySelector(".cost__add"),
          cost__modals = document.querySelector(".cost__modals"),
          cost__btn_one = document.querySelector(".cost__btn_one");
    cost__btn_one.addEventListener("click", (e) => {
        e.preventDefault();
        cost__modals.style.display = "flex";
    });
    cost__close.addEventListener("click", () => {
        cost__modals.style.display = "none";
    });
    cost__add.addEventListener("click", (e) => {
        e.preventDefault;
        cost__modals.style.display = "none";
    })
    window.addEventListener('click', function (e) {
        if(e.target == cost__modals) {
            cost__modals.style.display = "none";
        }
    });
}
export default modal;