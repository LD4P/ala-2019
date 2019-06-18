// Copyright 2019 Stanford University, licensed under Apache 2.0
import WorkCycleOne  from './WorkCycleOne.js'

customElements.define(`work-cycle-one`, WorkCycleOne)
const el = customElements.get('work-cycle-one')
const workCycleOne = new el()
document.body.appendChild(workCycleOne)
