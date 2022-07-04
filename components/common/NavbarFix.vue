<template>
    <div class="nav-fix both-center">
        <div class="container-news space-between hor-center">
            <div class="nav-left row slgap4 hor-center">
                <img class="logo" @click="go('/')" src="@/assets/new/mlogo.png" alt />
                <div class="relative hor-center">
                    <input class="search" type="text" v-model="q" placeholder="Search" @keyup.enter="search()" />
                    <img class="search-icon" @click="search()" src="@/assets/new/searchIcon.svg" alt />
                </div>
            </div>
            <!-- <div class="menu row slgap5">
                <div class="tab-label active">首页</div>
                <div class="tab-label">官方推荐</div>
                <div class="tab-label">最新发布</div>
                <div class="tab-label">查看更多</div>
            </div> -->
            <div class="nav-right row slgap2 hor-center">
                <div class="label" @click="go('/apply')">申请加盟</div>
                <img v-if="!user" class="icon" @click="login()" src="@/assets/new/user.svg" alt />
                <img class="stamp" v-if="user" @click="go('/user')" :onerror="errorImage"
                    :src="`https://api.foshanlepin.com/upload/user/${user.icon}`" loading="lazy">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavbarFix",
    data() {
        return {
            q: "",
            errorImage: 'this.src="' + require("@/assets/common/f5.png") + '"',
        }
    },
    props: ['user'],
    methods: {
        login() {
            this.$EventBus.$emit("loginPopup");
        },
        go(page) {
            this.$router.push(`${page}`)
        }, search() {
            if (this.$route.name == "search") {
                this.$router.push(`/search?q=${this.q}&t=${this.$route.query.t}`);
            }
            else {
                this.$router.push(`/search?q=${this.q}`);
            }
        }
    },
    created() {
        if (this.$route.query.q) {
            this.q = this.$route.query.q;
        }
    }
}
</script>
<style scoped>
.nav-fix {
    width: 100%;
    position: fixed;
    top: 0px;
    height: 80px;
    background: white;
    transition: all 0.3s;
    /* box-shadow: 0px 10px 40px rgba(56, 66, 104, 0.05); */
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
    z-index: 99;
}

.logo {
    max-width: 120px;
    height: auto;
    cursor: pointer;
}

.search {
    width: 293px;
    height: 40px;
    text-indent: 10px;
    border-radius: 6px;
    background: #ffffff;
    box-sizing: border-box;
    border: 2px solid #f5f5f5;
}

.search-icon {
    position: absolute;
    right: 15px;
    width: 18px;
    height: 18px;
    opacity: 0.7;
    cursor: pointer;
}

.search-icon:hover {
    opacity: 1;
}

/* ---------- */
.menu {
    margin-right: 40px;
}

.icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    opacity: 0.5;
    cursor: pointer;
}

.icon:hover {
    opacity: 1;
}

.tab-label {
    font-family: Roboto-Bold;
    font-size: 16px;
    font-weight: 900;
    line-height: 18px;
    letter-spacing: 0px;
    color: #3d3d3d;
    cursor: pointer;
}

.active {
    color: #ff6965;
}

.tab-label:hover {
    color: #ff6965;
}

.label {
    font-family: GenJyuuGothic-ExtraLight;
    font-size: 16px;
    font-weight: 100;
    padding-right: 20px;
    line-height: 18px;
    font-weight: thin;
    cursor: pointer;
    border-right: 1px solid #38426834;
}

.label:hover {
    color: #ff6965;
    font-weight: bold;
}

.stamp {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
}
</style>