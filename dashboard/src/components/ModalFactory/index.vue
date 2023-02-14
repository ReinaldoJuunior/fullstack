<template>
    <teleport to="body">
        <div v-if="state.isActive"
        class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        @click="handleModalToggle({ status: false })"

            <div
             class="fixed mx-10"
              :class="state.width">
                <div
                    class="flex flex-col overflow-hidden bg-white rounded-lg animate__animate animate__fadeInDown animate__faster">
                    <div class="flex flex-col px-12 py-10 bg-white">
                        <component :is="state.component" />
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import useModal from '../../hooks/useModal.js'
import { onBeforeMount } from '@vue/runtime-core'
import { defineAsyncComponent } from '@vue/runtime-core'

const ModalLogin = defineAsyncComponent(() => import('../ModaLogin'))

const DEFAULT_WIDTH = 'w-3/4 lg:1/3'


export default {

    components:{
        ModalLogin
    },

    setup(){

        const modal = useModal()
        const state = reactive({
            isActive: false,
            component:{},
            props:{},
            width: DEFAULT_WIDTH,
        })

        onMounted(() => {
            modal.list(handleModalToggle)
        })
        onBeforeMount(()=>{
            modal.off(handleModalToggle)

        })

        function handleModalToggle(payload){

            if(payload.status){
                state.component = payload.component
                state.props = payload.props
                state.width = payload.width ?? DEFAULT_WIDTH
            }else{
                state.component = {}
                state.props = {}
                state.width = DEFAULT_WIDTH
            }
        }

        return{
            state
        }
    }

}
</script>