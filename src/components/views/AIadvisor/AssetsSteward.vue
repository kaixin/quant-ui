<template>
	<div id="asset-steward">
		<el-tabs>
			<el-tab-pane label="AI经济周期预测">
				<economic-forecast></economic-forecast>
			</el-tab-pane>
			<el-tab-pane label="AI全球资产配置">
				<assets-allocation></assets-allocation>
			</el-tab-pane>
			<el-tab-pane label="AI资产组合打理">
				<assets-management></assets-management>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import EconomicForecast from '@/components/views/AIadvisor/AssetsSteward/EconomicForecast'
import AssetsAllocation from '@/components/views/AIadvisor/AssetsSteward/AssetsAllocation'
import AssetsManagement from '@/components/views/AIadvisor/AssetsSteward/AssetsManagement'

export default {
	components: {
		EconomicForecast,
		AssetsAllocation,
		AssetsManagement
	},
	data() {
		return {
		}
	}
}
</script>

<style lang="scss">
	#asset-steward {
		.el-tabs__item {
			font-size: 18px;
		}
	}
</style>