<template>
	<div class="header">
		<div class="quant-menu">
			<div class="quant-menu-logo-wrapper">
				<img class="quant-menu-logo" :src="logoImage">
			</div>
			<div class="quant-menu-items">
				<ul>
					<li v-for="item in navMenuItems">
						<router-link v-if="item.link" :to="item.link" v-text="item.title" :class="{'quant-menu-selected': item.selected}"></router-link>
						<span v-else v-text="item.title" :class="{'quant-menu-selected': item.selected}"></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			logoImage: "/static/logo.png"
		}
	},
	props: ['navMenuItems']
}
</script>

<style lang="scss">
	.header{
		font-size: 21px;
		padding-left: 100px;
		padding-right: 50px;
		background-color: #378DE5;

		.quant-menu {
			height: 70px;
		}

		.quant-menu-logo-wrapper {
			display: inline-block;
			float: left;
		}

		.quant-menu-logo {
			height: 60px;
			width: 60px;
		}

		.quant-menu-items {
			color: white;
			display: inline-block;
			float: right;

			ul li {list-style: none;
				padding-right: 20px;
				float: left;
				cursor: pointer;

				&:hover {
					opacity: 0.5;
				}

				a {
					text-decoration: none;
					color: white;
				}

				.quant-menu-selected {
					opacity: 0.5
				}
			}
		}
	}
</style>