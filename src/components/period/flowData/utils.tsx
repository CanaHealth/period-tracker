export const flowOptions: flow[] = ['light', 'average', 'heavy']

//cycle flow options up by one until we reach the end of the array and then start over
export const cycleFlow = (flow: optionOfFlow) => {
  switch (flow) {
    case undefined:
      return 'light'
    case 'light':
      return 'average'
    case 'average':
      return 'heavy'
    case 'heavy':
      return undefined
  }
}

export type flow = 'heavy' | 'average' | 'light'
export type optionOfFlow = flow | undefined

export type flowKeyString = {
  [key in flow]: string
}

export type flowData = {
  [key: string]: optionOfFlow
}

export type optionsForOpacity = 75 | 100

export const colorVarients: flowKeyString = {
  heavy: 'bg-flow-heavy',
  average: 'bg-flow-average',
  light: 'bg-flow-light',
}

export const findColorClass = (flow?: flow): string => {
  if (flow) {
    return colorVarients[flow]
  } else {
    return ''
  }
}

export const namesOfWeekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
