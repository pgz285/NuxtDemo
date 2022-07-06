<template>
    <div class="search">
        <div class="search-body relative hor-center">
            <input type="text" class="input" v-model="q" :placeholder="$t('nav-bar.searchtip')" @keyup.enter="go()">
            <img class="search-icon" @click="go()" src="@/assets/new/searchIcon.svg" alt="">
        </div>   </div>
</template>

<script>
export default {
    name: "SearchItem",
    data() {
        return {
            q: ""
        }
    },
    methods: {
        go() {
            this.$router.push(`/search?q=${this.q}`);
        }
    }
}
</script>

<style scoped>
.input {
    width: 350px;
    height: 50px;
    border: 2px solid #f5f5f5;
    border-radius: 6px;
    text-indent: 10px;
}

.input:focus {
    border: 2px solid #d7d7d7;
}

.search-icon {
    position: absolute;
    right: 10px;
    cursor: pointer;
    opacity: .7;
    padding: 0 10px;
}

.search-icon:hover {
    opacity: 1;
}
</style>