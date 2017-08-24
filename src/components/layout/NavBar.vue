<template>
	<div class="header">
		<div class="quant-menu">
			<div class="quant-menu-logo-wrapper">
				<img class="quant-menu-logo" :src="logoImage">
			</div>
			<div class="quant-menu-items">
				<ul>
					<li class="menu" v-for="item in navMenuItems">
						<router-link class="quant-menu-item" v-if="item.link" :to="item.link" v-text="item.title" :class="{'quant-menu-selected': item.selected}"></router-link>
						<span v-else v-text="item.title" class="quant-menu-item" :class="{'quant-menu-selected': item.selected}"></span>
						<template v-if="item.subMenus && item.subMenus.length">
							<ul class="sub-menu" index="2">
								<li v-for="subItem in item.subMenus">
									<router-link :to="subItem.link" v-text="subItem.title"></router-link>
								</li>
							</ul>
						</template>
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
		font-size: 16px;
		padding-left: 100px;
		padding-right: 50px;
		background-color: #122333;

		.quant-menu {
			height: 62px;
		}

		.quant-menu-logo-wrapper {
			display: inline-block;
			float: left;
		}

		.quant-menu-logo {
			height: 40px;
			width: 40px;
			padding-top: 11px;
		}

		.quant-menu-items {
			color: white;
			display: inline-block;
			float: right;

			.quant-menu-item {
				display: inline-block;
				height: 62px;
				line-height: 62px;
				padding: 0px 15px;
			}

			ul {
				padding: 0px;
				margin: 0px;
			}

			ul li.menu{
				float: left;
				list-style: none;
				cursor: pointer;

				ul {
					display: none;
					position: absolute;
					background-color: #192939;
					
					li {
						float: none;
						list-style: none;
						cursor: pointer;
						padding: 10px;
					}
				}

				a:hover, span:hover {
					opacity: 0.5;

					
				}

				&:hover ul{
					display: block;
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