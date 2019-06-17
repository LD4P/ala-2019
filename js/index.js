import WorkCycleOne  from './WorkCycleOne.js'

customElements.define(`work-cycle-one`, WorkCycleOne)
const el = customElements.get('work-cycle-one')
const workCycleOne = new el()
document.body.appendChild(workCycleOne)


