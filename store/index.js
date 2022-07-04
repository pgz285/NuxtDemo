export const state = () => ({
  locales: [
    {
      code: 'en',
      name: 'English'
    },
    {
      code: 'zh',
      name: '中文'
    },
  ],
  locale: 'zh',
  token:''
})


export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.find(el => el.code === locale)) {
      state.locale = locale
    }
  },
  login(state, token) {
    localStorage.setItem('token', token);
    state.token = token;
  },
  logout(state) {
    localStorage.removeItem('token');
    state.token = null;
    window.location = '/'
  },
};

export const getters = {
  token: state => {
    return state.token;
  },
}