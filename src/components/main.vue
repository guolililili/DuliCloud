<template>
    <div>
    	<v-header></v-header>
         <div class="wrapper">
            <div class="container">
                <div class="row">
                	<!-- 这是dashboard首页 -->
                </div>
            </div> 
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script type="text/javascript">
	import vheader from "@/components/layout/header.vue"
	import vfooter from "@/components/layout/footer.vue"
	export default {
		components:{
			"v-header":vheader,
			"v-footer":vfooter
		}
	}
</script>