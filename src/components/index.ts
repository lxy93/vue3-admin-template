import SvgIcon from './SvgIcon.vue'
import Test from './Test.vue'

const allGobalComponents = {SvgIcon, Test}
export default {
    install(app){
        Object.keys(allGobalComponents).forEach(key=> {
            app.component(key,allGobalComponents[key])
        })
        
    }
}