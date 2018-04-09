<template>
  <div id="main" class="col-md-2" style="">
			<div id="nav"  style="padding-left: 0px;">
				<ul id="ul_nav" class="nav nav-pills navbar-inverse nav-stacked col-md-12">
					<li class="col-md-12">
						<!--data-toggle，用于告诉 js需要对按钮做什么-->
						<!--collapse即是折叠-->
						<!--<a href="#sub1" data-toggle="collapse">系统功能</a>-->
						<!--data-target指示要切换到哪一个元素-->
						<a href="#" data-toggle="collapse" data-target="#sub1">当前部门&nbsp;<span class="glyphicon glyphicon-cog"></span></a>
						<ul id="sub1" class="nav collapse">
							<li>
								<a href="#"><span class="glyphicon glyphicon-user"></span>&nbsp;XX1组</a>
							</li>
							<li>
								<a href="#"><span class="glyphicon glyphicon-user"></span>&nbsp;XX2组</a>
							</li>

						</ul>
					</li>
				</ul>
			</div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#ul_nav {
  position: absolute;
  height: 100%;
}
#main {
  height: 100%;
}

#nav {
  height: 100%;
  /*background: #00B83F;*/
}
</style>


