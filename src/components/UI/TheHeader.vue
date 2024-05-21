<template>
    <nav id="drag-region" class="titlebar w-full bg-green-6 py-2 px-4 flex flex-row justify-between items-center">
        <div class="icon-container flex flex-row items-center gap-x-2 clickable">
            <span class="material-icons-outlined cursor-pointer text-base text-grey-14" @click="close">
                close
            </span>
            <span id="maximize" @click="maximize" class="material-icons-outlined cursor-pointer text-base text-grey-14">
                crop_square
            </span>
            <span @click="minimize" class="material-icons-outlined cursor-pointer text-base text-grey-14">
                remove
            </span>
        </div>

        <div class="title-bar py-1 clickable px-6 rounded-full bg-green-7 flex flex-row items-center gap-x-6">
            <span class="material-icons-outlined cursor-pointer text-grey-14 font-thin text-base"
                @click="reloadWebview">
                refresh
            </span>
            <span class="material-icons-outlined cursor-pointer text-grey-14 font-thin text-lg" @click="goForward">
                chevron_right
            </span>
            <span class="text-primary font-bold text-base">پنل من</span>
            <span class="material-icons-outlined cursor-pointer text-grey-14 font-thin text-lg" @click="goBack">
                chevron_left
            </span>
        </div>

        <div class="flex flex-row items-center gap-x-8 clickable">
            <span class="material-icons-outlined cursor-pointer text-grey-14 font-thin text-xl">
                notifications
            </span>
            <span class="material-icons-outlined cursor-pointer text-grey-14 font-thin text-xl">
                settings
            </span>

            <div class="w-[1px] bg-grey-15 h-4"></div>

            <div class="w-8 h-8 rounded-full">
                <img src="../../assets/Images/userImage.png" alt="" />
            </div>
        </div>
    </nav>

</template>


<script setup>

// Header Functionality
const close = () => {
    window.electronAPI.close();
};
const maximize = () => {
    window.electronAPI.toggleFullscreen();
};
const minimize = () => {
    window.electronAPI.minimize();
};
// const reloadWebview = () => {
//     if (!activeUrl) return;
//     const activeWebview = webviews.value.find(
//         (webview) => webview.src === activeUrl.value
//     );
//     if (activeWebview) {
//         activeWebview.$el.reload();
//     }
// };
// const goBack = () => {
//     if (!activeUrl) return;
//     const activeWebview = webviews.value.find(
//         (webview) => webview.src === activeUrl.value
//     );
//     if (activeWebview) {
//         activeWebview.$el.goBack();
//     }
// };
// const goForward = () => {
//     if (!activeUrl) return;
//     const activeWebview = webviews.value.find(
//         (webview) => webview.src === activeUrl.value
//     );
//     if (activeWebview) {
//         activeWebview.$el.goForward();
//     }
// };
</script>


<style lang="scss" scoped></style>