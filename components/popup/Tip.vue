<template>
    <div>
        <transition name="attrans">
            <div v-if="tipOpen" class="tip" @touchmove.prevent @click="tipOpen = false">
                <div class="tip-box slgaph1 both-center row" :class="{ error: data[1] == 'error' }">
                    <img src="@/assets/common/success.svg" alt="" v-if="data[1] == 'success'" />
                    <img src="@/assets/common/error.svg" alt="" v-else />
                    <div class="content both-center col stgap2">
                        <div class="">{{data[2]}}</div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Tip",
    data() {
        return {
            tipOpen: false,
            data: []
        }
    },
    created() {
        this.$EventBus.$on("tip", (msg) => {
          
            this.tipOpen = true
            this.data = msg
            
            setTimeout(() => {
                this.tipOpen = false;
            }, msg[0]);
        });
    },
    beforeDestroy() {
        this.$EventBus.$off("tip");
    },
}
</script>

<style scoped>
.tip {
    position: fixed;
    top: 40px;
    right: 0;
    bottom: 0;
    left: 0;
    /* background-color: rgba(0, 0, 0, 0.5); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.tip-box {
    background-color: #1bbfb4;
    min-width: 120px;
    height: 50px;
    position: absolute;
    top: 30px;
    padding: 10px 20px;
    border-radius: 8px;
    color: #ffffff;
}

.error {
    background: #f77373;
    opacity: 1;
}
</style>