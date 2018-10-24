
module.exports = {
  devServer: {
    proxy: {
      '/ReportWS': {
        target: 'http://192.168.1.3:8081',
        ws: true,
        changeOrigin: true //是否开启跨域
      },
    }
  }
}