<template>
	<div id="AI-community">
		<nav-bar :navMenuItems="AIComunityMenu"></nav-bar>

		<div class="main">
			<el-row class="community-nav">
				<el-col :span="6" style="padding-left: 50px;">
					<img :src="goBackIcon">
					<span>小市值策略</span>
				</el-col>
			</el-row>
			<el-row class="community-content">
				<el-col :span="IDECols" :class="{hidePane: shouldHideIDEPane}">
					<el-row class="IDE-toolbar">
						<el-col :span="12">
							<el-button class="toolbar-icon">已保存</el-button>
							<el-button class="toolbar-icon">编译运行</el-button>
							<el-button class="toolbar-icon">函数库</el-button>
						</el-col>
						<el-col :span="6" :offset="5">
							<div style="float: right;">
								<el-button class="toolbar-icon">API</el-button>
								<el-button icon="search" class="toolbar-icon"></el-button>
								<el-button icon="setting" class="toolbar-icon"></el-button>
								<el-button class="toolbar-icon"><i class="keyboard"></i></el-button>
							</div>
						</el-col>
						<el-col :span="1">
							<img :src="toggleIDEIcon" style="float: right; margin: 5px 0px;" @click="toggleIDE">
						</el-col>
					</el-row>
					<el-row>
						<div style="border: 1px solid black; width: 100%; height: 100%; margin: 0 auto;">

						</div>
					</el-row>
				</el-col>
				<el-col :span="12" style="border: 1px solid black;" :class="{hidePane: shouldHideBuildPane}">running</el-col>
			</el-row>
		</div>

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
			goBackIcon: './static/go-back.png',
			toggleIDEIcon: './static/right-expand.png',
			IDECols: 12,
			shouldHideIDEPane: false,
			shouldHideBuildPane: false,
			AIComunityMenu: [
				{title: "首页", link: "/", selected: false},
				{title: "智能投顾", link: "/AIadvisor/assetsSteward", selected: false},
				{title: "AI社区",
					link: "",
					selected: false,
					subMenus: [
						{title: "我的策略", link: "/AICommunity/myStrategy"}
					]
				},
				{title: "清华量协", link: "", selected: false},
				{title: "个人账号", link: "", selected: false}
			]
		}
	},
	methods: {
		toggleIDE: function() {
			if(this.IDECols !== 24) {
				console.log("expand IDE now...");
				this.IDECols = 24;
				this.toggleIDEIcon = "./static/left-expand.png";
				self.shouldHideIDEPane = false;
				this.shouldHideBuildPane = true;
			}else {
				this.IDECols = 12;
				this.toggleIDEIcon = "./static/right-expand.png";
				self.shouldHideIDEPane = false;
				this.shouldHideBuildPane = false;
			}
		}
	}
}
</script>

<style lang="scss">
	#AI-community {
		.main {
			font-size: 14px;

			.community-nav {
				height: 56px;
				line-height: 56px;
			}

			.community-content {
				background-color: #EDF0F2;

				.IDE-toolbar {
					padding: 10px 20px 10px 50px;

					.toolbar-icon {
						padding: 5px;
					}

					.keyboard:before {
						content: url(/static/keyboard.png)
					}
				}

				.hidePane {
					display: none;
				}
			}
		}
	}
</style>