<template>
<!-- 中间的输入框 -->
  <section id="operate_menu">
					<form class="form-inline">
						<!--输入权限名称以及是否选中信息-->
						<!--归属信息-->
						<fieldset>
							<!--域的标题-->
							<legend>新建值班</legend>

							<div class="form-group ">								
								<div class="col-md-2">
									<input type="text" class="form-control" placeholder="日期" aria-describedby="basic-addon2" />
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-2 control-label" for="ds_username">组</label>
								<div class="col-md-4">
									<!--<select data-toggle="select" class="form-control select select-inverse mrs mbm" style="width:150px">-->
									<!--此处不单独设置该select标签的宽度-->
									<select data-toggle="select" class="form-control select  mrs mbm">
										<option value="0">风暴潮</option>
										<option value="1">海啸</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label" for="ds_username">人员</label>
								<div class="col-md-4">
									<!--<select id="disabledSelect" class="form-control">
												<option>禁止选择</option>
												<option>禁止选择</option>
											</select>-->
									<select data-toggle="select" class="form-control select mrs mbm">
										<option value="0">XX1</option>
										<option value="1">XX2</option>
										<option value="2">XX3</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label" for="ds_username">班类</label>
								<div class="col-md-2">
									<!--<select id="disabledSelect" class="form-control">
												<option>禁止选择</option>
												<option>禁止选择</option>
											</select>-->
									<select data-toggle="select" class="form-control select mrs mbm">
										<option value="0">XX1</option>
										<option value="1">XX2</option>
										<option value="2">XX3</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<button type="button" class="btn btn-success">添加</button>
								<button type="button" class="btn btn-danger">删除</button>
							</div>
						</fieldset>
						<!--显示样式-->
					</form>

				</section>
</template>
<style>
#operate_menu form fieldset div label {
  /*background-color: #F5E79E;
				height: 100%;*/
  padding-left: 2px;
  padding-right: 2px;
  text-align: center;
  margin-top: 4px;
}
</style>

