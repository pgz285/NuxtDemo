<template>
    <div class="footer both-center">
        <div class="container-news stgap4">
            <div class="footer-top space-between">
                <div class="top-left row slgap2 hor-center">
                    <div class="radio both-center">A</div>
                    <div class="title">
                        <span class="red">AOHUI</span> website
                    </div>
                </div>
                <div class="top-right">
                    <div class="relative hor-center">
                        <input class="search" type="text" placeholder="Search" />
                        <img class="icon" src="@/assets/new/searchIcon.svg" />
                    </div>
                </div>
            </div>
            <div class="footer-context">
                <div class="col stgap2 grid-items">
                    <div class="f-title">Computers</div>
                    <div class="col stgap1">
                        <div class="f-label">Everyday Tower</div>
                        <div class="f-label">Home And Office Tower</div>
                        <div class="f-label">Business Tower</div>
                        <div class="f-label">Everyday All-in-one</div>
                        <div class="f-label">Premium</div>
                    </div>
                </div>
                <div class="col stgap2 grid-items">
                    <div class="f-title">Laptops</div>
                    <div class="col stgap1">
                        <div class="f-label">Home</div>
                        <div class="f-label">Work</div>
                        <div class="f-label">Professional</div>
                        <div class="f-label">Premium</div>
                        <div class="f-label">For Gaming</div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom space-between hor-center">
                <div class="copyright">Copyright @ 2022 AOHIUI</div>
                <div class="row slgap1">
                    <div class="link both-center">
                        <img class="icons" src="@/assets/new/fb.svg" alt />
                    </div>
                    <div class="link both-center">
                        <img class="icons" src="@/assets/new/ins.svg" alt />
                    </div>
                    <div class="link both-center">
                        <img class="icons" src="@/assets/new/youtube.svg" alt />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    width: 100%;
    margin-top: 1px;
    padding: 60px 0;
    height: auto;
    background: #f5f5f5;
}
.radio {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    font-family: Roboto-Bold;
    font-size: 20px;
    background: #ff6965;
}
.red {
    color: #ff6965;
}
.title {
    font-family: Roboto-Regular;
    font-size: 28px;
    font-weight: 100;
    line-height: 24px;
    letter-spacing: -0.24px;
}
.search {
    outline: none;
    border: transparent 2px solid;
    width: 420px;
    background: #fff;
    height: 50px;
    border-radius: 6px;
    text-indent: 20px;
}

.icon {
    position: absolute;
    right: 20px;
    cursor: pointer;
    transition: all 0.2s linear;
}
.icon:hover {
    transform: scale(1.2);
}
/* ------------------- */

.footer-context {
    padding-bottom: 40px;
    border-bottom: 2px solid #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
}
.grid-items {
    width: 100%;
}
.f-title {
    font-family: GenJyuuGothic-ExtraLight;
    font-size: 16px;
    font-weight: 100;
    line-height: 18px;
    letter-spacing: 0px;
    color: #222222;
}

.f-label {
    font-family: Roboto-Regular;
    font-size: 14px;
    font-weight: 900;
    line-height: 24px;
    letter-spacing: 0px;
    color: #858585;
    cursor: pointer;
    transition: all 0.2s linear;
}
.f-label:hover {
    font-size: 15px;
    color: #ff6965;
}
/* ----------------- */
.copyright {
    font-family: Roboto-Regular;
    font-size: 14px;
    font-weight: 900;
    line-height: 24px;
    letter-spacing: 0px;
    transition: all 0.2s linear;
    color: #858585;
    cursor: pointer;
}
.copyright:hover {
    color: #ff6965;
}

.link {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    border: 1px solid transparent;
}
.link img {
    transition: all 0.2s linear;
}
.link:hover {
    box-shadow: 0px 8px 10px -6px rgb(255 105 101 / 30%);
}
.link:hover img {
    transform: scale(1.2);
}
.icons {
    width: 30px;
    height: 30px;
    opacity: .6;
}
.icons:hover{
opacity: 1;
}
</style>