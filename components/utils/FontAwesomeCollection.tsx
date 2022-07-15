import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faUser, faClipboard, faReceipt, faImage} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
// adding icons
const FontAwesomeCollection = () => library.add(faCheckSquare,
     faCoffee, 
     faUser, 
     faClipboard, 
     faReceipt, 
     faImage);

export default FontAwesomeCollection;