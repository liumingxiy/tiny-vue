import Theme from '../../../feature/theme'

function icon(legend, iChartOption) {
  if (iChartOption.legend.icon == 'line') {
    legend.icon = 'rect'
    legend.itemHeight = Theme.config.legendReactItemHeight
    legend.itemWidth = Theme.config.legendReactItemWidth
  }
}

export default icon
