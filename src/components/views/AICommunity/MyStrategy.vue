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
						<div style="border: 1px solid black; width: 100%; height: 600px; margin: 0 auto;">

						</div>
					</el-row>
				</el-col>
				<el-col :span="12" :class="{hidePane: shouldHideBuildPane}" style="height: 100%;">
					<el-row class="build-toolbar" :class="{hidePane: shouldHideBuildToolbarPane}">
						<el-col :span="20">
							<div>
								<el-date-picker class="quant-date" v-model="startDate" type="date" placeholder="选择日期"></el-date-picker>
								<span>至</span>
								<el-date-picker class="quant-date" v-model="endDate" type="date" placeholder="选择日期"></el-date-picker>

								<span>￥</span>
								<el-input v-model="amountMoney" style="width: 122px;"></el-input>
								<el-select v-model="frequency" placeholder="请选择" style="width: 84px;">
									<el-option v-for="fre in freOptions" :key="fre.value" :label="fre.label" :value="fre.value"></el-option>
								</el-select>
							</div>
						</el-col>
						<el-col :span="2" :offset="1">
							<el-button type="primary">运行回测</el-button>
						</el-col>
					</el-row>
					<el-row :class="{hidePane: shouldHideBuildChartPane}">
						<div style="border: 1px solid black; width: 100%; height: 300px; margin: 0 auto;"></div>
					</el-row>
					<el-row>
						<el-row>
							<span class="log-tab" @click="showLogMsg">日志</span>
							<span class="log-tab" @click="showErrorMsg">错误</span>
							<span style="float: right; padding: 10px"><img :src="toggleMsgPaneIcon" @click="toggleMsgPane"></span>
						</el-row>
						<el-row>
							<div class="log-pane" v-text="outputMsg"></div>
						</el-row>
					</el-row>
				</el-col>
			</el-row>
		</div>

		<!-- <footer-bar></footer-bar> -->
	</div>
</template>

<script>
// import Ace from "ace-builds/src/ace"
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
			toggleMsgPaneIcon: './static/up-expand.png',
			IDECols: 12,
			shouldHideIDEPane: false,
			shouldHideBuildPane: false,
			shouldHideBuildToolbarPane: false,
			shouldHideBuildChartPane: false,
			startDate: "2016-8-19",
			endDate: "2017-8-19",
			amountMoney: 100000,
			frequency: 'day',
			freOptions: [
				{value: 'day', label: '每天'},
				{value: 'minute', label: '分钟'}
			],
			activeMsg: 'log',
			logMsg: "logs message",
			errorMsg: "error message",
			outputMsg: '',
			msgPaneState: 'not-expanded',
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
		},
		showLogMsg: function() {
			this.outputMsg = this.logMsg;
		},
		showErrorMsg: function() {
			this.outputMsg = this.errorMsg;
		},
		toggleMsgPane: function() {
			if(this.msgPaneState === "not-expanded") {
				this.shouldHideBuildChartPane = true;
				this.shouldHideBuildToolbarPane = true;
				this.msgPaneState = "expanded";
				this.toggleMsgPaneIcon = "./static/down-expand.png";
			}else {
				this.shouldHideBuildChartPane = false;
				this.shouldHideBuildToolbarPane = false;
				this.msgPaneState = "not-expanded";
				this.toggleMsgPaneIcon = "./static/up-expand.png";
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
					padding: 15px 20px 15px 50px;

					.toolbar-icon {
						padding: 5px;
					}

					.keyboard:before {
						content: url(/static/keyboard.png)
					}
				}

				.build-toolbar {
					padding: 10px;
				}

				.log-tab {
					display: inline-block;
					padding: 10px;

					&:hover {
						background-color: grey;
					}
				}

				.log-pane {
					width: 100%;
					height: 100%;
					min-height: 300px;
					margin: 0 auto;
					background-color: black;
					color: white;
					padding: 10px;
				}

				.hidePane {
					display: none;
				}

				.quant-date {
					width: 134px;
				}
			}
		}
	}
</style>