<template>
	<div>
		<nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

		<footer-bar></footer-bar>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"

export default {
	components: {
		NavBar,
		FooterBar
	},
	data() {
		return {
			AIadvisorMenu: [
				{title: "首页", link: "/", selected: false},
				{title: "智能投顾", link: "/AIadvisor", selected: true},
				{title: "AI社区", link: "", selected: false},
				{title: "清华量协", link: "", selected: false},
				{title: "个人账号", link: "", selected: false}
			]
		}
	}
}
</script>

<style lang="scss">

</style>