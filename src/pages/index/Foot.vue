<template>
    <div class="footer-widget fccc fww">
        <div class="copyright-box">
            <div class="copyright-left frcc">
                <div class="item-text">Incubated By</div>
                <img src="../../assets/logo.png" />
            </div>
        </div>
        <div class="copyright">Copyright © 2021</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer-widget {
    background-color: #1d1d1d;
    box-sizing: border-box;
    height: 280px;
}
.copyright-left {
    height: 150px;
    font-size: 16px;
    font-weight: 500;
    img {
        height: 50px;
        margin-left: 15px;
    }
}
.copyright {
    font-size: 14px;
    color: hsla(0, 0%, 100%, 0.64);
    margin-top: 30px;
}
@media screen and (max-width: 960px) {
    .footer-widget {
        height: 200px;
        font-size: 12px;
    }
    .footer-widget .copyright-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .footer-widget .copyright-box .copyright-left {
        height: 90px;
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .footer-widget .copyright-box .copyright-left img {
        height: 32px;
        margin-left: 10px;
    }
    .footer-widget .copyright {
        color: hsla(0, 0%, 100%, 0.64);
        text-align: center;
        font-size: 12px;
        margin-top: 20px;
    }
}
</style>