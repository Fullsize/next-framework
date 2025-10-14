const config = {
  plugins: [["@tailwindcss/postcss"], ['postcss-pxtorem', {
    rootValue: 20, // 1rem = 16px
    //  propList: ['font', 'font-size', 'letter-spacing'], // 只转文字相关属性
    propList: ['*'], // 只转文字相关属性
    minPixelValue: 2, // 小于等于 2px 不转
  }]],

};

export default config;
