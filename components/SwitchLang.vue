<template>
  <div class="language" @click.stop>
    <div class="language-div hor-center slgap" @click="langed = !langed">
      <div class="body1" :class="{ 'body-langed': langed }">
        {{ $t("languages") }}
      </div>
      <img
        src="@/assets/common/chevronDown.svg"
        class="language-img"
        :class="{ 'img-rotate': langed }"
      />
      <div class="line"></div>
    </div>

    <div class="language-box col" :class="{ 'language-hidden': !langed }">
      <div
        class="language-label flex"
        v-for="(lang, i) in locales"
        :key="i"
        @click="switchLanguage(lang.code)"
      >
        {{ lang.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
    };
  },
  name: "SwitchLang",
  data() {
    return {
      langed: false,
    };
  },
  methods: {
    switchLanguage(localeCode) {
      document.cookie = `locale=${localeCode}`;
      location.reload();
    },
    closeCompsAction() {
      this.langed = false;
    },
  },
  computed: {
    locales() {
      return this.$store.state.locales;
    },
    locale() {
      return this.$store.state.locale;
    },
  },
  created() {
    this.$EventBus.$on("closeComps", this.closeCompsAction);
  },
  beforeDestroy() {
    this.$EventBus.$off("closeComps",this.closeCompsAction);
  },
};
</script>

<style scoped>
.language {
  cursor: pointer;
}

.body1 {
  font-size: 15px;
  width: 50px;
  color: #5d6175;
  text-align: right;
}
.body1,
.language-img {
  opacity: 0.8;
  transition: all 0.3s;
}
.language-div:hover .body1,
.language-div:hover .language-img {
  opacity: 1;
}
.img-rotate {
  transform: rotate(-180deg);
}
.body-langed {
  opacity: 1;
}

.language-box {
  position: absolute;
  z-index: 99;
  margin: 5px 0 0 -35px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 10px 40px rgba(56, 66, 104, 0.1);
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 0.2s linear, visibility 0.2s, transform 0.4s;
}
.language-hidden {
  pointer-events: none;
  transform: translateY(-10px);
  visibility: hidden;
  opacity: 0;
}
.language-label {
  justify-content: flex-end;
  padding: 15px 30px;
  border-radius: 8px;
   color: #5d6175;
  opacity: 0.8;
}
.language-label:hover {
  background-color: whitesmoke;
  opacity: 1;
}
.line{
  width: 1px;
  height: 20px;
  background: #e5e7eb;
  margin-left: 15px;
}
</style>