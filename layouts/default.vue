<template>
    <div class="indexmain col" @click="closeComponents()">
        <div class="indexmain-sticky">
            <Navbar @show="showMenus()" :user="user" />
        </div>
        <router-view></router-view>
        <Footer />
        <Tip />
    </div>
</template>

<script>
import Axios from "axios";

import Navbar from "@/components/layout/Navbar.vue"
import Footer from "@/components/layout/Footer.vue"

import Tip from "@/components/popup/Tip.vue";
export default {
    components: {
        Navbar,
        Footer,
        Tip
    },
    data() {
        return {
            showSearch: true,
            popshow: false,

            user: []
        }
    },
    methods: {
        getUserinfo() {
            const variables = {}
            const graphqlQuery = `query Query {
                userInfo {
                    id
                    account
                    name
                    icon
                    email
                    phone
                }
            }`
            Axios.post(
                process.env.CENTER,
                {
                    query: graphqlQuery,
                    variables: variables,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            )
                .then((e) => {
                    if (e.status != "200") {
                        console.log("fail")
                        return;
                    }
                    this.user = e.data.data.userInfo
                })
                .catch(() => { });
        },

        closeComponents() {
            // console.log("close")
        },
    },
    created() {
        // 提示登陆弹窗
        this.$EventBus.$on("userinfo", this.getUserinfo);
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);

        this.getUserinfo()
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);

        this.$EventBus.$off("userinfo", this.getUserinfo);
    },


    handleScroll() {
        let scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;

        if (scrollTop > 203) {
            this.fix = true;
        } else {
            this.fix = false;
        }
    },
    destroyed() {
        this.$EventBus.$off("loginPopup", this.show);
        this.$EventBus.$off("closeLogin", this.hide);
    }
}
</script>
<style scoped>
.indexmain {
    background: #fff;
    color: #222222;
    word-spacing: 1px;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
}

.indexmain-sticky {
    position: sticky;
    top: 0px;
    height: 95px;
    background: white;
    transition: all 0.3s;
    box-shadow: 0px 10px 40px rgba(56, 66, 104, 0.05);
    z-index: 9;
}

.attrans2-enter-active,
.attrans2-leave-active {
    transition: opacity 1s;
}

.attrans2-enter-from,
.attrans2-leave-to {
    /* margin-top: -30px !important; */
    opacity: 0;
}

.right-enter-active,
.right-leave-active {
    transition: opacity 0.35s, margin-right 0.35s;
}

.right-enter,
.right-leave-to {
    margin-right: -50px;
    opacity: 0;
}
</style>