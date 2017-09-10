<template>
	<div id="product-manager">
		<el-tabs>
			<el-tab-pane label="AI信号分析">
				<signal-analysis></signal-analysis>
			</el-tab-pane>
			<el-tab-pane label="AI舆情分析">
				<public-opinion-analysis></public-opinion-analysis>
			</el-tab-pane>
			<el-tab-pane label="AI基本面分析">
				<fundamental-analysis></fundamental-analysis>
			</el-tab-pane>
			<el-tab-pane label="AI热点标的">
				<hot-mark></hot-mark>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import SignalAnalysis from '@/components/views/AIadvisor/ProductManager/SignalAnalysis'
import PublicOpinionAnalysis from '@/components/views/AIadvisor/ProductManager/PublicOpinionAnalysis'
import FundamentalAnalysis from '@/components/views/AIadvisor/ProductManager/FundamentalAnalysis'
import HotMark from '@/components/views/AIadvisor/ProductManager/HotMark'

export default {
	components: {
		SignalAnalysis,
		PublicOpinionAnalysis,
		FundamentalAnalysis,
		HotMark
	},
	data() {
		return {
		}
	}
}
</script>

<style lang="scss">
	#product-manager {
		.el-tabs__item {
			font-size: 18px;
		}
	}
</style>