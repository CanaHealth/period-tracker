export const CurrentWeekArgs = {
  week: [
    { DayOfWeekLabel: 'Mo', color: 'flow' },
    { DayOfWeekLabel: 'Tu', color: 'flow' },
    { DayOfWeekLabel: 'We', color: 'flow', isCurrentDay: true },
    { DayOfWeekLabel: 'Th' },
    { DayOfWeekLabel: 'Fr' },
    { DayOfWeekLabel: 'Sa' },
    { DayOfWeekLabel: 'Su' },
  ],
};

export const HistoricalWeekArgs = { week: [{}, {}, {}, {}, {}, {}, {}] };
export const HistoricalWeekWithOvulationArgs = {
  week: [
    { color: 'ovulation' },
    { color: 'ovulation' },
    { color: 'ovulation' },
    { color: 'ovulation' },
    {},
    {},
    {},
  ],
};

export const FlowWeekArgs = {
  week: [
    { color: 'normal' },
    { color: 'normal' },
    { color: 'normal' },
    { color: 'normal' },
    { color: 'normal' },
    { color: 'flow' },
    { color: 'flow' },
  ],
};
