import color from 'color';

const colors = {
  primary: color.rgb(85, 136, 170),
  danger: color.rgb(190, 0, 0),
  well: color.rgb(245, 245, 245),
  warning: color.rgb(255, 217, 102),
  success: color.rgb(221, 238, 223),
  info: color.rgb(217, 237, 247),
};

const theme = {
  primary: {
    background: colors.primary.string(),
    borderColor: colors.primary.darken(0.3).string(),
    color: colors.primary.light() ? '#000' : '#fff',
  },

  info: {
    background: colors.info.string(),
    borderColor: colors.info.darken(0.3).string(),
    color: colors.info.light() ? colors.info.darken(0.9) : colors.info.lighten(0.9),
  },

  danger: {
    background: colors.danger.string(),
    borderColor: colors.danger.darken(0.3).string(),
    color: colors.danger.light() ? '#000' : '#fff',
  },

  warning: {
    background: colors.warning.string(),
    borderColor: colors.warning.darken(0.3).string(),
    color: colors.warning.light() ? '#000' : '#fff',
  },

  success: {
    background: colors.success.string(),
    borderColor: colors.success.darken(0.3).string(),
    color: colors.success.light() ? '#000' : '#fff',
  },

  well: {
    background: colors.well.string(),
    borderColor: colors.well.darken(0.1).string(),
    color: colors.well.light() ? '#000' : '#fff',
  }

};

export default theme;
