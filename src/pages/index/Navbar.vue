<template>
    <nav class="navbar">
        <section class="navbar__inner frbc">
            <section class="navbar__left frsc">
                <a href class="logo">
                    <h1 class="logo-text">DNAxCAT</h1>
                </a>
                <ul class="menus frsc">
                    <li class="menu-item">
                        <a class="frsc">Home</a>
                    </li>
                    <li class="menu-item">
                        <download-modal>
<a class="frsc">
                            <span>Live</span>
                            <img src="../../assets/new.png" class="menu-arrow menu-arrow__new" alt />
                        </a>
                        </download-modal>
                        
                    </li>
                    <li class="menu-item">
                        <a class="frsc">
                            <span>Marketplace</span>
                            <img src="../../assets/hot.png" class="menu-arrow menu-arrow__hot" alt />
                        </a>
                    </li>
                    <li class="menu-item">
                        <a class="frsc" target="__blank" href="https://dd.ddlive.me/">Studio</a>
                    </li>
                    <li class="menu-item">
                        <a class="frsc">DAO</a>
                    </li>
                    <li class="menu-item">
                        <a class="frsc" target="__blank" href="https://dd-live.oss-cn-shanghai.aliyuncs.com/v17/file/DDmetaDeck.pdf">DOCS</a>
                    </li>
                </ul>
            </section>
            <section class="navbar__right frsc">
                <div class="entrys">
                    <!-- <div class="entry-item entry-item-wallet">
                        <a
                            target="_blank"
                            href
                            class="common-button button-primary button-42"
                        >My Cat</a>
                    </div> -->
                    <lng-select></lng-select>
                    <Collaspe></Collaspe>
                </div>
            </section>
        </section>
    </nav>
</template>

<script setup>
import LngSelect from '@/components/LngSelect'
import Collaspe from '@/components/Collaspe'
import DownloadModal from '@/components/DownloadModal';
</script>

<style lang="less" scoped>
.navbar {
    height: 100px;
    width: 100%;

    &__inner {
        position: fixed;
        height: 100px;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 0 40px;
        z-index: 100;
        background: #191919;
    }
}
.logo {
    width: 136px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0;
    background-image: url(../../assets/logo.png);
}
.logo-text {
    text-indent: -999em;
}
.menus {
    margin-left: 60px;
    a {
        font-size: 16px;
        font-weight: 600;
        margin-left: 40px;
        white-space: nowrap;
        transition: all 0.5s;
    }
    a:hover {
        color: #64c832;
    }
}
.menu-arrow {
    width: 18px;
    height: 18px;
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    display: block;
    margin-left: 8px;
    &.menu-arrow__new {
        width: 40px;
    }
}
.entrys {
    display: flex;
    align-items: center;
}
.entrys .entry-item {
    margin-left: 25px;
}

.entry-item-wallet {
    white-space: nowrap;
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
    .navbar__inner {
        padding: 0 20px;
    }
    .menus {
        margin-left: 10px;
        a {
            margin-left: 20px;
            font-size: 15px;
        }
    }
}
@media screen and (max-width: 960px) {
    .navbar .navbar__inner,
    .navbar {
        height: 72px;
    }
    .menus {
        display: none;
    }
    .entry-item-wallet {
        display: none;
    }
    .navbar__inner {
        padding: 0 10px 0 18px;
        box-sizing: border-box;
    }
    .logo {
        width: 100px;
        height: 46px;
    }
    .entrys .entry-item {
        margin-left: 14px;
    }
    .entrys .entry-item-menu {
        display: flex;
    }
}
</style>