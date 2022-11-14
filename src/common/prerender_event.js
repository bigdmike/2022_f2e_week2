export default {
    methods: {
        ReturnErrorPage() {
            var meta = document.createElement('meta');
            meta.setAttribute('name', 'prerender-status-code');
            meta.content = "404";
            document.getElementsByTagName('head')[0].appendChild(meta);
            this.$router.push("/error_page")
            this.meta_title = "頁面不存在 | MAXXIS S98 | 世新車業有限公司"
            this.meta_content = "您查詢的頁面已移除或是不存在，您可以返回野蠻公牛官方網站首頁查看其他頁面，有任何疑問請與我們聯繫。"
            this.meta_cover = window.location.origin + '/img/share/index.jpg'
            window.prerenderReady = true;
        }
    }
}