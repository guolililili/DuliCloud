<template>
	<header id="topnav">
            <div class="topbar-main">
                <div class="container">
                    <div class="logo">
                        <a href="index.html" class="logo">
                           <!--  <img src="assets/images/logo_dark.png" alt="" height="24" class="logo-lg">
                            <img src="assets/images/logo_sm.png" alt="" height="24" class="logo-sm"> -->
                        </a>

                    </div>
                    <div class="menu-extras topbar-custom">

                        <ul class="list-inline float-right mb-0">

                            <li class="menu-item list-inline-item">
                                <a class="navbar-toggle nav-link" v-on:click="navToggle($event)">
                                    <div class="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item dropdown notification-list">
                                <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="false" aria-expanded="false">
                                    <i class="dripicons-bell noti-icon"></i>
                                    <span class="badge badge-pink noti-icon-badge">4</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-lg" aria-labelledby="Preview">
                                    <!-- item-->
                                    <div class="dropdown-item noti-title">
                                        <h5><span class="badge badge-danger float-right">5</span>Notification</h5>
                                    </div>

                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-success"><i class="icon-bubble"></i></div>
                                        <p class="notify-details">Robert S. Taylor commented on Admin<small class="text-muted">1 min ago</small></p>
                                    </a>

                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-info"><i class="icon-user"></i></div>
                                        <p class="notify-details">New user registered.<small class="text-muted">1 min ago</small></p>
                                    </a>

                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-danger"><i class="icon-like"></i></div>
                                        <p class="notify-details">Carlos Crouch liked <b>Admin</b><small class="text-muted">1 min ago</small></p>
                                    </a>

                                    <!-- All-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item notify-all">
                                        View All
                                    </a>

                                </div>
                            </li>

                            <li class="list-inline-item dropdown notification-list">
                                <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="false" aria-expanded="false">
                                    <img src="../../assets/images/users/avatar-1.jpg" alt="user" class="rounded-circle">
                                </a>
                                <div class="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview">
                                    <!-- item-->
                                    <div class="dropdown-item noti-title">
                                        <h5 class="text-overflow"><small>Welcome ! Guoli</small> </h5>
                                    </div>
                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="zmdi zmdi-settings"></i> <span>Settings</span>
                                    </a>
                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="zmdi zmdi-power"></i> <span>Logout</span>
                                    </a>

                                </div>
                            </li>

                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <!-- menu -->
            <div class="navbar-custom">
                <div class="container">
                    <div id="navigation">
                        <ul class="navigation-menu">
                        	<router-link tag="li" class="has-submenu" v-for="(item) in navList" :to="item.navRoute" active-class
                        	="active" exact>
                        		<a><i class="fi-paper"></i>{{item.navName}}</a>
                        	</router-link>
                        </ul>
                    </div> 
                </div> 
            </div> 
    </header>
</template>
<script type="text/javascript">
export default {
  	name: 'vheader',
  	data(){
  		return {
  			navList:[{
  				navName:"首页",
  				navRoute:'/dashboard'
  			},{
  				navName:"设备列表",
  				navRoute:'/device'
  			},{
  				navName:"保养信息",
  				navRoute:'/maintain'
  			},{
  				navName:"报警信息",
  				navRoute:'/warning'
  			}]
  		}
  	},
    methods:{
        navToggle:function(event){
            $(event.currentTarget).toggleClass('open');
            $('#navigation').slideToggle(400);
        }
    }
}
</script>