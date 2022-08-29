const flowOptions: flow[] = ['light', 'average', 'heavy']

//cycle flow options up by one until we reach the end of the array and then start over
const cycleFlow = (flow: flow): flow | undefined => {
  if (!flow) {
    return flowOptions[1]
  } else {
    // if we are at the end of the array, set flow to undefined
    if (flowOptions.indexOf(flow) === flowOptions.length - 1) {
      return undefined
    }
    // otherwise, return the next flow option
    return flowOptions[flowOptions.indexOf(flow) + 1]
  }
}
type flow = 'heavy' | 'average' | 'light'
type optionOfFlow = flow | undefined

type flowKeyString = {
  [key in flow]: string
}

type flowData = {
  [key: string]: optionOfFlow
}

const colorVarients: flowKeyString = {
  heavy: 'bg-flow-heavy',
  average: 'bg-flow-average',
  light: 'bg-flow-light',
}

const findColorClass = (flow?: flow): string => {
  if (flow) {
    return colorVarients[flow]
  } else {
    return ''
  }
}

type optionsForOpacity = 75 | 100

const namesOfWeekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

export {
  colorVarients,
  cycleFlow,
  findColorClass,
  flowOptions,
  namesOfWeekdays,
}
export type { flow, flowData, optionOfFlow, optionsForOpacity }
