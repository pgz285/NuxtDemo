<template>
    <div class="navbar">
        <div class="navbar both-center col">
            <div class="container-news">
                <div class="navbar-body">
                    <div class="navbar-top hor-center space-between">
                        <div class="title">
                            <span class="red">AOHUI</span> website
                        </div>
                        <div class="row slgap6 hor-center">
                            <SearchItem />
                            <div class="href row slgap2">
                                <div class="label" @click="tip()">{{ $t("nav-bar.promotion") }}</div>
                                <div class="label" @click="go('/apply')">{{ $t("nav-bar.join") }}</div>
                            </div>


                            <div class="row slgaph2 hor-center ml-2">
                                <SwitchLang />
                                <div class="right-icon row slgap2" v-if="!user" @click="login()">
                                    <!-- <img class="icon" src="@/assets/new/user.svg" alt /> -->
                                    <img class="icon"
                                        src="https://testimg.togather.pro//resize/brand/product/img/6882176779889410142?w=940&h=650"
                                        alt />
                                </div>
                                <div v-if="user" class="row hor-center slgaph1" @click="go('/user')">
                                    <img class="stamp" :onerror="errorImage"
                                        :src="`https://api.foshanlepin.com/upload/user/${user.icon}`" loading="lazy">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";

import SearchItem from "../common/SearchItem.vue"
import SwitchLang from '../SwitchLang.vue';
export default {
    name: "Navbar",
    components: { SearchItem, SwitchLang },
    data() {
        return {
            sort: [],
            errorImage: 'this.src="' + require("@/assets/common/f5.png") + '"',
        }
    },
    props: ['user'],
    created() {
        if (process.browser) {
            this.getSort()
        }
    },
    methods: {
        tip() {
            this.$EventBus.$emit("tip", ["1200", "success", "点击了推广合作"]);
        },

        search(e) {
            this.$router.push(`/search?q=&t=${e}`);
        },
        login() {
            this.$EventBus.$emit("loginPopup");
        },
        go(page) {
            this.$router.push(`${page}`)
        },
        getSort() {
            const variables = {};

            const graphqlQuert = `query Query {
                                    AllPromitionSort {
                                        id
                                        title
                                        status
                                    }
                                }`;

            Axios.post(
                process.env.CENTER,
                {
                    query: graphqlQuert,
                    variables: variables,
                },
                {
                    headers: {
                        // Authorization: localStorage.getItem("token"),
                    },
                }
            )
                .then((e) => {
                    if (e.status != "200") {
                        return;
                    }
                    this.sort = e.data.data.AllPromitionSort;
                })
                .catch(() => { });
        }
    }
}
</script>

<style scoped>
.navbar-body {
    padding-top: 20px;
}

.navbar-top {
    height: 55px;
}

.red {
    color: #ff6965;
}

.title {
    font-family: Roboto-Regular;
    font-size: 28px;
    font-weight: 900;
    line-height: 24px;
    letter-spacing: -0.24px;
}

.label {
    font-family: GenJyuuGothic-ExtraLight;
    font-size: 16px;
    font-weight: 100;
    line-height: 18px;
    font-weight: thin;
    cursor: pointer;
    min-width: 80px;
}

.label:hover {
    color: #ff6965;
    font-weight: bold;
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
    height: 24px;
}

.stamp {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
}
.ml-2{
    margin-left: 20px;
}
</style>