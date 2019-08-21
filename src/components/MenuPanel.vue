<template>
    <div id="menuPanel">
        <nav class="nav nav-pills flex-column menu-panel">
            <div v-for="menu in menuList">
                <a class="nav-link" v-bind:href="menu.url"><i class="menu.icon" aria-hidden="true"></i>{{menu.name}}</a>
            </div>
        </nav>
        <!-- <nav class="nav nav-pills flex-column menu-panel">
            <a class="nav-link" href="/home"><i class="fa fa-university" aria-hidden="true"></i>首页</a>
            <a class="nav-link" href="/home"><i class="fa fa-cube" aria-hidden="true"></i>产品</a>
            <a class="nav-link" href="/home"><i class="fa fa-cubes" aria-hidden="true"></i>仓库</a>
            <a class="nav-link" href="/drivers"><i class="fa fa-database" aria-hidden="true"></i>数据</a>
            <nav class="nav nav-pills flex-column">
                <a class="nav-link ml-3 my-1" href="/drivers1">设备管理</a>
                <a class="nav-link ml-3 my-1" href="/drivers2">设备管理</a>
            </nav>
        </nav> -->

    </div>
</template>

<script>
export default {
    name: 'MenuPanel',
    data() {
        return {
            menuList: [
                {url: '/', icon: 'fa fa-university', name: '首页'},
                {url: '/home', icon: 'fa fa-cube', name: '产品'}
            ]
        }
    }
}
</script>

<style>
/* 左侧菜单部分的滑动框 */
.menu-panel {
    height: 100%;
    padding-top: 1rem;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
}
/* 隐藏左侧菜单栏的滚动框 */
.menu-panel>.os-scrollbar>.os-scrollbar-track>.os-scrollbar-handle {
    display: none;
    /* background: #EAEAEA; */
}

/* 菜单a标签样式 */
nav a,
nav a:active,
nav a:visited,
nav a:focus,
nav a:checked {
    color: white;
    margin: 0.25rem 0;
}
nav a:hover {color: #343a40;background-color: #EAEAEA;}
nav a i {color: #336699; width: 1.5rem;}
nav nav a {font-size: 0.8rem;padding: 0;}
nav nav a::before {content: '✦';color: #336699;}
</style>
