import { ToggleButtonModel } from '@modules/shared/models';

export const MovieFilterType: ToggleButtonModel[] = [
  {
    title: 'Watched',
    name: 'watched',
    icon: 'icon-show',
    value: true
  },
  {
    title: 'Unwatched',
    name: 'unwatched',
    icon: 'icon-hide',
    value: false
  }
]
