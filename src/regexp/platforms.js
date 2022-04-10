const platforms ={
   /**
    * @desc 判断设备的公用函数
    * @param {Regexp} regex  正则
    * 
    * @return {Function} 
    */
   isPlatform(regex){
      return  () => regex.test(navigator.userAgent)
   },
   isMobile(){
      this.isPlatform(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)
   },
   isPc(){
      !isMobile()
   },
   isIOS(){
      this.isPlatform(/\(i[^;]+;( U;)? CPU.+Mac OS X/gi)
   },
   isIPad(){
      this.isPlatform(/iPad/gi)
   },
   isAndroid(){
      this.isPlatform(/android|adr/gi)
   },
   isChrome(){
      this.isPlatform(/Chrome/i)
   },
   isFirefox(){
      this.isPlatform(/Firefox/i)
   },
   isSafari(){
      this.isPlatform(/Safari/i)
   },
   isMicroMessenger(){
      this.isPlatform(/MicroMessenger/i)
   },
   isQQBrowser(){
      this.isPlatform(/qq/gi)
   },
   isWeibo(){
      this.isPlatform(/weibo/gi)
   },
   isDevice(){
     this.isPlatform(regexp) 
   }
}

module.exports=platforms



