// Filter for cutting off strings that are too long.
export function truncate (value) {
  var length = 60

  if (value.length <= length) {
    return value
  } else {
    return value.substring(0, length) + '...'
  }
}

//
export function currency (value) {
  return '￥' + value.toFixed(2)
}

export function xx (value) {
  return value
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
